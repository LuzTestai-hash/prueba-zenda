<template>
  <div id="what-we-do" class="whatWeDo-background">
    <b-container class="whatWeDo-container">
      <b-row>
        <b-col md="12">
          <p class="subtitle">{{ $t('what.name') }}</p>
        </b-col>
        <b-col md="8">
          <p class="title">{{ $t('what.title') }}</p>
          <div :class="`mobile-graphic ${bottomActive}`" />
          <div class="content-container">
            <div class="button-container">
              <b-button
                :class="
                  bottomActive === 'first'
                    ? 'button primary selected'
                    : 'button primary'
                "
                @click="textSelected('first')"
              >
                {{ $t('what.items[0].title') }}
              </b-button>

              <b-button
                :class="
                  bottomActive === 'second'
                    ? 'button third selected'
                    : 'button third'
                "
                @click="textSelected('second')"
              >
                {{ $t('what.items[1].title') }}
              </b-button>

              <b-button
                :class="
                  bottomActive === 'third'
                    ? 'button secondary selected'
                    : 'button secondary'
                "
                @click="textSelected('third')"
              >
                {{ $t('what.items[2].title') }}
              </b-button>
            </div>
            <p v-if="bottomActive === 'first'" class="detail-title">
              {{ $t('what.items[0].title') }}
            </p>
            <p v-if="bottomActive === 'first'" class="detail-content">
              {{ $t('what.items[0].description') }}
            </p>
            <p v-if="bottomActive === 'second'" class="detail-title">
              {{ $t('what.items[1].title') }}
            </p>
            <p v-if="bottomActive === 'second'" class="detail-content">
              {{ $t('what.items[1].description') }}
            </p>
            <p v-if="bottomActive === 'third'" class="detail-title">
              {{ $t('what.items[2].title') }}
            </p>
            <p v-if="bottomActive === 'third'" class="detail-content">
              {{ $t('what.items[2].description') }}
            </p>
          </div>
        </b-col>
        <b-col md="4" class="p-md-5">
          <div
            v-for="(item, index) in $t('what.items')"
            :key="index"
            class="card-colapse"
          >
            <b-button
              v-b-toggle="`collapse-${item._id}`"
              :class="`button-colapse ${getColor(index)}`"
            >
              <p class="text">{{ item.title }}</p>
            </b-button>
            <b-collapse :id="`collapse-${item._id}`">
              <b-card class="collapse-content">
                {{ item.description }}
              </b-card>
            </b-collapse>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAnimation: false,
      bottomActive: 'first',
      isMobile: false,
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      const w = window.innerWidth
      if (w < 600) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    })
  },
  methods: {
    isViewableNow(isVisible, entry) {
      this.showAnimation = isVisible
    },
    textSelected(selected) {
      this.bottomActive = selected
      this.$nuxt.$emit('graphic', selected)
    },
    getColor(index) {
      switch ((index + 1) % 3) {
        case 1:
          return 'primary'
        case 2:
          return 'secondary'
        case 0:
          return 'third'
        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.whatWeDo-background {
  background-color: $background-white;
}
.whatWeDo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1.4rem 4rem 1.4rem;
  .subtitle {
    font-weight: 700;
    color: $typography;
    letter-spacing: 0.02rem;
    line-height: 1.2rem;
  }
  .title {
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 2.3rem;
    letter-spacing: -0.02em;
    color: $typography;
    margin-top: 1.2rem;
    margin-bottom: 3.3rem;
    padding-right: 3rem;
  }
  .mobile-graphic {
    background-image: url(../assets/icons/zenda-grafico-mobile.svg);
    background-repeat: no-repeat;
    background-position-x: 50%;
    width: 100%;
    height: 15rem;
  }
  .content-container {
    .button-container {
      margin-bottom: 3rem;
      .button {
        background-color: transparent;
        border-radius: 0.5rem;
        width: 11rem;
        height: 2.8rem;
        transition: all 0.4s ease;
        &:focus {
          box-shadow: initial;
        }
        &.primary {
          border-color: $primary;
          color: $primary;
          &.selected {
            color: white;
            background-color: $primary;
          }
          &:hover {
            color: white;
            background-color: $primary;
          }
        }
        &.secondary {
          border-color: $secondary;
          color: $secondary;
          &.selected {
            color: white;
            background-color: $secondary;
          }
          &:hover {
            color: white;
            background-color: $secondary;
          }
        }
        &.third {
          border-color: $third;
          color: $third;
          &.selected {
            color: white;
            background-color: $third;
          }
          &:hover {
            color: white;
            background-color: $third;
          }
        }
      }
    }
    .detail-content {
      padding-right: 20%;
      font-weight: 100;
      color: rgba(10, 10, 11, 0.64);
      font-size: 1.1rem;
    }
    .detail-title {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
  @media (max-width: 767px) {
    .content-container {
      display: none;
    }
  }

  .active {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background-color: #fff !important;
    border-radius: 1rem;
    border-color: transparent !important;
  }
  .btn-secondary:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  .card-colapse {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    .button-colapse {
      width: 100%;
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-color: transparent !important;
      &:focus {
        box-shadow: initial;
      }
      .text {
        font-size: 1.125rem;
        color: $typography;
        margin-left: 0.1rem;
        margin-bottom: initial;
      }
      &.primary {
        .text {
          color: $primary;
        }
      }
      &.secondary {
        .text {
          color: $secondary;
        }
      }
      &.third {
        .text {
          color: $third;
        }
      }
    }
    .collapse-content {
      font-weight: 100;
      color: $subtitle;
      border: initial;
      border-top: 1px solid rgba(10, 10, 11, 0.29);
      background-color: transparent;
    }
  }
}
@media (min-width: 767px) {
  .whatWeDo-container {
    padding: 4rem 1.4rem 4rem 1.4rem;
    .title {
      font-size: 3.5rem;
      line-height: 3.3rem;
      padding-right: 2rem;
      letter-spacing: -0.1rem;
    }
    .mobile-graphic {
      display: none;
    }
    .card-colapse {
      display: none;
    }
    .text {
      font-size: 1.4rem;
    }
  }
}
@media (min-width: 1440px) {
  .whatWeDo-container {
    padding: 4rem 1.4rem 10% 1.4rem;
    .title {
      font-size: 3.5rem;
      line-height: 3.3rem;
      padding-right: 2rem;
      letter-spacing: -0.1rem;
    }
    .subtitle {
      font-size: 1rem;
      margin-bottom: 4rem;
    }
    .text {
      font-size: 1.5rem;
    }
  }
}
</style>

<template>
  <div :class="`clientcard-container ${title}`">
    <b-row>
      <b-col md="4">
        <div v-if="title === 'Clue'">
          <img
            src="../assets/icons/clue-logo-white.png"
            alt="clue"
            class="trademarks"
            width="188px"
            height="54px"
            loading="lazy"
          />
        </div>
        <div v-if="title === 'WynDam'">
          <img
            src="../assets/icons/whyndham-logo-white.png"
            alt="whyndham"
            class="trademarks"
            width="187px"
            height="61px"
            loading="lazy"
          />
        </div>
      </b-col>
      <b-col md="8">
        <p class="card-text">
          {{ detail }}
        </p>
      </b-col>
      <b-col md="12">
        <div :class="`detail-container ${color}`">
          <div>
            <p class="number">{{ first.number }}</p>
            <p class="detail">{{ first.detail }}</p>
          </div>
          <div>
            <p class="number">{{ second.number }}</p>
            <p class="detail">{{ second.detail }}</p>
          </div>
          <div>
            <p class="number">{{ third.number }}</p>
            <p class="detail">{{ third.detail }}</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ScreensOfMethodology',
  props: {
    title: { type: String, default: null },
    color: { type: String, default: null },
    detail: { type: String, default: null },
    first: { type: Object, default: null },
    second: { type: Object, default: null },
    third: { type: Object, default: null },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.clientcard-container {
  border-radius: 2rem;
  background-color: #161617;
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
  .trademarks {
    color: white;
  }
  .card-text {
    margin-top: 2rem;
    font-weight: 100;
    color: white;
    min-height: 10rem;
    font-size: 1.1rem;
  }
  @media (min-width: 600px) {
    .trademarks {
      margin-top: 2rem;
      margin-left: 1rem;
      color: white;
    }
    .card-text {
      min-height: 10rem;
      padding-left: 4rem;
    }
  }

  @media (min-width: 1440px) {
    .trademarks {
      margin-top: 2rem;
      margin-left: 1rem;
      color: white;
    }
    .card-text {
      min-height: 10rem;
      padding-left: 0;
    }
  }
  .detail-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    .number {
      color: $primary;
      font-family: 'Recoleta Alt', serif;
      font-weight: 600;
      font-size: 1.6rem;
      word-break: break-all;
      text-align: left;
      margin-bottom: initial;
    }
    .detail {
      font-size: 1rem;
      margin-bottom: 0.2rem;
      //padding-right: 4rem;
    }
    &.primary {
      border-top: 1px solid $primary;
      .number {
        color: $primary;
      }
      .detail {
        color: $primary;
      }
    }
    &.secondary {
      border-top: 1px solid $secondary;
      .number {
        color: $secondary;
      }
      .detail {
        color: $secondary;
      }
    }
    &.third {
      border-top: 1px solid $third;
      .number {
        color: $third;
      }
      .detail {
        color: $third;
      }
    }
    @media (min-width: 1440px) {
      .number {
        font-size: 2rem;
      }
    }
  }
  @media (min-width: 600px) {
    .card-text {
      min-height: 10rem;
    }
    .detail {
      padding-right: 4rem;
    }
    .detail-container {
      flex-wrap: initial;
    }
  }
  .button-colapse {
    margin-top: 1rem;
    background-color: transparent;
    border: initial;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.primary {
      .icon {
        color: $primary;
      }
    }
    &.secondary {
      .icon {
        color: $secondary;
      }
    }
    &.third {
      .icon {
        color: $third;
      }
    }
  }
  @media (min-width: 600px) {
    .button-colapse {
      display: none;
    }
  }
}
@media (min-width: 600px) {
  .slick-slider {
    padding: 0 -150px;
  }
  .slick-list {
    padding: 0 150px;
  }
  .clientcard-container {
    border-radius: 2rem;
    padding: 0.6rem 3rem 3rem 3rem;
    width: 75%;
    position: relative;
    z-index: 1;
    &.WynDam {
      margin-left: -2rem;
    }
    &.Clue {
      margin-left: 3rem;
    }
    &.Pepe {
      margin-left: -8rem;
    }
  }
}
</style>

<template>
  <div :class="`clientcard-container ${title}`">
    <b-row>
      <b-col md="4">
        <img
          :src="client.image.url"
          alt="clue"
          class="trademarks"
          height="54px"
          loading="lazy"
        />
      </b-col>
      <b-col md="8">
        <p class="card-text">
          {{ client.description }}
        </p>
      </b-col>
      <b-col md="12">
        <div :class="`detail-container ${color}`">
          <div
            v-for="achiviement in client.achiviements"
            :key="achiviement._id"
          >
            <p class="number">{{ achiviement.title }}</p>
            <p class="detail">{{ achiviement.description }}</p>
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
    client: { type: Object, default: null },
    color: { type: String, default: 'first' },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.clientcard-container {
  border-radius: 2rem;
  background-color: rgba(229, 229, 229, 0.07);
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
      font-size: 1.2rem;
      min-height: 10rem;
      padding-left: 3rem;
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
    }
    .detail {
      font-size: 1rem;
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
    background-color: rgb(49, 48, 48);
    padding: 2rem 3rem;
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

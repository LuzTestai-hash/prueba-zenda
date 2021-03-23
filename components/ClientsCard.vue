<template>
  <div class="clientcard-container">
    <b-row>
      <b-col md="4">
        <p class="title">{{ title }}</p>
      </b-col>
      <b-col md="8">
        <p class="card-text">
          {{ detail }}
        </p>
      </b-col>
      <b-col md="12">
        <div :class="`detail-container ${color}`">
          <p class="detail first">+120 paises</p>
          <p class="detail center">3x</p>
          <p class="detail">4 millones</p>
        </div>
        <b-button v-b-toggle="'collapse-1'" :class="`button-colapse ${color}`">
          <b-icon icon="chevron-down" class="icon"></b-icon>
        </b-button>
        <b-collapse id="collapse-1">
          <b-card class="collapse-content">Contenido</b-card>
        </b-collapse>
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
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.clientcard-container {
  border-radius: 2rem;
  background-color: rgba(229, 229, 229, 0.07);
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  .title {
    color: white;
  }
  @media (min-width: 600px) {
    .title {
      margin-top: 2rem;
      font-size: 2rem;
      margin-left: 1rem;
      color: white;
    }
  }
  .card-text {
    margin-top: 2rem;
    font-weight: 100;
    color: white;
    min-height: 15rem;
  }
  @media (min-width: 600px) {
    .card-text {
      height: 12rem;
      padding-left: 4rem;
    }
  }
  .detail-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    .detail {
      color: $primary;
      font-family: 'Recoleta Alt', serif;
      font-weight: 600;
      font-size: 1.6rem;
      word-break: break-all;
      text-align: right;
      &.first {
        padding-right: 1rem;
      }
      &.center {
        margin-left: 0.8rem;
        margin-right: 1rem;
        width: 4rem;
      }
    }
    &.primary {
      border-top: 1px solid $primary;
      .detail {
        color: $primary;
      }
    }
    &.secondary {
      border-top: 1px solid $secondary;
      .detail {
        color: $secondary;
      }
    }
    &.third {
      border-top: 1px solid $third;
      .detail {
        color: $third;
      }
    }
  }
  @media (min-width: 600px) {
    .card-text {
      min-height: 10rem;
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
  .clientcard-container {
    margin-right: 3rem;
    border-radius: 2rem;
    background-color: rgba(229, 229, 229, 0.07);
    padding: 2rem 3rem;
  }
}
</style>

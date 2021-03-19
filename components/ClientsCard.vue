<template>
  <div class="clientcard-container">
    <b-card :title="title" class="card">
      <b-card-text class="card-text">
        {{ detail }}
      </b-card-text>
      <div :class="`detail-container ${color}`">
        <p class="detail">+120 <br />paises</p>
        <p class="detail">3x</p>
        <p class="detail">4 mi<br />llones</p>
      </div>
      <b-button v-b-toggle="'collapse-1'" :class="`button-colapse ${color}`">
        <b-icon icon="chevron-down" class="icon"></b-icon>
      </b-button>
      <b-collapse id="collapse-1">
        <b-card class="collapse-content">Contenido</b-card>
      </b-collapse>
    </b-card>
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
  margin-right: 1rem;
  .card {
    border-radius: 2rem;
    background-color: rgba(229, 229, 229, 0.07);
    padding: 2rem 1rem;
    color: white;
    .card-text {
      margin-top: 2rem;
      font-weight: 100;
      color: white;
      min-height: 15rem;
    }
    .detail-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
      .detail {
        color: $primary;
        font-family: 'Recoleta Alt', serif;
        font-weight: 600;
        font-size: 1.5rem;
        word-break: break-all;
        text-align: right;
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
  }
}
</style>

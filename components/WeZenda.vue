<template>
  <div id="we-zenda" class="weZenda-background">
    <b-container class="weZenda-container">
      <b-row>
        <b-col md="12">
          <p class="title">
            {{ $t('about.name') }} <span class="special-title">ZENDA.</span>
          </p>
        </b-col>
        <b-col md="6">
          <div data-v-fc305ef6="" class="detail">
            <h2>
              {{ $t('hero.title') }}
            </h2>
            <span>
              {{ $t('hero.description') }}
            </span>
          </div>
        </b-col>
        <b-col md="6">
          <b-button v-b-toggle.accordion-1 class="button-colapse primary">
            <p class="text">{{ $t('about.items[0].title') }}</p>
            <b-icon icon="chevron-down" class="icon" alt="icon"></b-icon>
          </b-button>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card class="collapse-content">
              {{ $t('about.items[0].description') }}
            </b-card>
          </b-collapse>
          <b-button v-b-toggle.accordion-2 class="button-colapse secondary">
            <p class="text">{{ $t('about.items[1].title') }}</p>
            <b-icon icon="chevron-down" class="icon" alt="icon"></b-icon>
          </b-button>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card class="collapse-content">
              {{ $t('about.items[1].description') }}
            </b-card>
          </b-collapse>
          <b-button v-b-toggle.accordion-3 class="button-colapse third">
            <p class="text">{{ $t('about.items[2].title') }}</p>
            <b-icon icon="chevron-down" class="icon" alt="icon"></b-icon>
          </b-button>
          <b-collapse id="accordion-3" accordion="my-accordion">
            <b-card class="collapse-content">
              {{ $t('about.items[2].description') }}
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.weZenda-background {
  background-color: $background-black;
  .weZenda-container {
    display: flex;
    align-items: center;
    color: white;
    padding: 4rem 1.4rem;
    .title {
      font-weight: 700;
      margin-bottom: 2rem;
    }
    .special-title {
      font-family: 'Recoleta Alt', serif;
      text-decoration: underline;
    }
    .detail {
      font-weight: 100;
      margin-bottom: 3rem;
      h2 {
        font-weight: 100;
        font-size: 1.1rem;
        display: contents;
        letter-spacing: -0.03rem;
      }
      span {
        font-size: 1.1rem;
        letter-spacing: -0.03rem;
      }
    }
    @media (min-width: 600px) {
      .title {
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 1rem;
      }
      .special-title {
        font-weight: 700;
      }
      .detail {
        text-decoration: initial;
        padding-right: 2rem;
      }
    }
    @media (min-width: 1440px) {
      .title {
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 1rem;
      }
      .special-title {
        font-weight: 700;
      }
      .detail {
        margin-top: 1rem;
        text-decoration: initial;
      }
    }
    .button-colapse {
      width: 100%;
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border: initial;
      padding-left: initial;
      &:focus {
        border: initial;
        box-shadow: initial;
      }
      .text {
        font-size: 1.188rem;
        font-weight: 100;
      }
      .icon {
        width: 0.8rem;
      }
      &.primary {
        .text {
          color: $primary;
        }
        .icon {
          color: $primary;
        }
      }
      &.secondary {
        .text {
          color: $secondary;
        }
        .icon {
          color: $secondary;
        }
      }
      &.third {
        .text {
          color: $third;
        }
        .icon {
          color: $third;
        }
      }
    }
    @media (min-width: 600px) {
      .button-colapse {
        padding-left: 2rem;
        .text {
          font-size: 1.6rem;
          font-weight: 100;
        }
        .icon {
          width: 1rem;
        }
      }
    }
    @media (min-width: 1440px) {
      .button-colapse {
        padding-left: 2rem;
        .text {
          font-size: 1.5rem;
          font-weight: 100;
        }
        .icon {
          width: 1.5rem;
        }
      }
    }
    .collapse-content {
      background-color: transparent;
      padding-left: 2rem;
      letter-spacing: -0.03rem;
      .card-body {
        padding-top: initial;
        font-weight: 100;
      }
    }
  }
  @media (min-width: 1440px) {
    .weZenda-container {
      padding: 4rem 0 10rem 0;
    }
  }
}
</style>

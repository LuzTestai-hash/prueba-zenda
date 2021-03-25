<template>
  <div id="what-we-do" class="whatWeDo-background">
    <b-container class="whatWeDo-container">
      <b-row>
        <b-col md="12">
          <p class="subtitle">QUÉ HACEMOS</p>
        </b-col>
        <b-col md="6">
          <p class="title">Lo mejor para tu negocio.</p>
          <div class="content-container">
            <p class="title-content">Estrategias digitales</p>
            <p class="detail-content">
              Lideramos proyectos digitales implementando eficazmente
              estrategias y procesos de transformación para lograr objetivos
              medibles, alcanzables y relevantes (SMART) para los negocios de
              nuestros clientes.
            </p>
          </div>
        </b-col>
        <b-col md="6">
          <b-button v-b-toggle="'collapse-1'" class="button-colapse primary">
            <div
              v-observe-visibility="{
                callback: isViewableNow,
                throttle: 300,
              }"
              :class="`single-chart ${showAnimation}`"
            >
              <svg viewBox="0 0 36 36" class="circular-chart primary">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  stroke-dasharray="45, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage primary">45%</text>
              </svg>
            </div>

            <p class="text">Estrategias digitales</p>
          </b-button>
          <b-collapse id="collapse-1">
            <b-card class="collapse-content">
              Desarrollamos estrategias digitales para lograr objetivos
              orientados a Branding y Performance (eCommerce, Apps, Leads)
            </b-card>
          </b-collapse>
          <b-button v-b-toggle="'collapse-2'" class="button-colapse third">
            <div
              v-observe-visibility="{
                callback: isViewableNow,
                throttle: 300,
              }"
              :class="`single-chart ${showAnimation}`"
            >
              <svg viewBox="0 0 36 36" class="circular-chart third">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  stroke-dasharray="35, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage third">35%</text>
              </svg>
            </div>
            <p class="text">Implementación</p>
          </b-button>
          <b-collapse id="collapse-2">
            <b-card class="collapse-content">I am collapsible content!</b-card>
          </b-collapse>
          <b-button v-b-toggle="'collapse-3'" class="button-colapse secondary">
            <div
              v-observe-visibility="{
                callback: isViewableNow,
                throttle: 300,
              }"
              :class="`single-chart ${showAnimation}`"
            >
              <svg viewBox="0 0 36 36" class="circular-chart secondary">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  stroke-dasharray="20, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage secondary">20%</text>
              </svg>
            </div>
            <p class="text">Consultoría</p>
          </b-button>
          <b-collapse id="collapse-3">
            <b-card class="collapse-content">I am collapsible content!</b-card>
          </b-collapse>
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
    }
  },
  methods: {
    isViewableNow(isVisible, entry) {
      this.showAnimation = isVisible
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1.6rem;
  .content-container {
    .title-content {
      font-weight: bold;
      font-size: 1.5rem;
    }
    .detail-content {
      padding-right: 5rem;
      font-weight: 100;
      color: rgba(10, 10, 11, 0.64);
    }
  }
  @media (max-width: 600px) {
    .content-container {
      display: none;
    }
  }
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
    padding-right: 5rem;
  }
  @media (min-width: 600px) {
    .title {
      font-size: 3.5rem;
      line-height: 3.5rem;
      padding-right: 11rem;
    }
  }
  .button-colapse {
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: initial;
    margin-bottom: 1rem;
    &:hover {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
    }
    &:focus {
      border: initial;
      box-shadow: initial;
    }
    .text {
      font-size: 1.125rem;
      color: $typography;
      margin-left: 0.5rem;
    }
    .single-chart {
      width: 33%;
      justify-content: space-around;
      .circular-chart {
        display: block;
        margin: 10px auto;
        max-width: 70%;
        max-height: 200px;
      }

      .circle-bg {
        fill: none;
        stroke: #fff;
        stroke-width: 3.8;
      }
      .circle {
        fill: none;
        stroke-width: 2.8;
        stroke-linecap: round;
      }
      &.true {
        .circle {
          animation: progress 1s ease-out forwards;
        }
        @keyframes progress {
          0% {
            stroke-dasharray: 0 100;
          }
        }
      }

      .circular-chart.primary .circle {
        stroke: $primary;
      }
      .circular-chart.secondary .circle {
        stroke: $secondary;
      }
      .circular-chart.third .circle {
        stroke: $third;
      }

      .percentage {
        font-size: 0.5em;
        text-anchor: middle;
        &.primary {
          fill: $primary;
        }
        &.secondary {
          fill: $secondary;
        }
        &.third {
          fill: $third;
        }
      }
    }
    @media (min-width: 600px) {
      .text {
        font-size: 1.4rem;
      }
      .single-chart {
        width: 6.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .collapse-content {
      display: none;
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
</style>

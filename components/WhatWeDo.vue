<template>
  <div class="whatWeDo-background">
    <b-container fluid class="whatWeDo-container">
      <p class="subtitle">QUÉ HACEMOS</p>
      <h1 class="title">Lo mejor para tu negocio.</h1>
      <b-button v-b-toggle="'collapse-1'" class="button-colapse primary">
        <div class="single-chart">
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
          Desarrollamos estrategias digitales para lograr objetivos orientados a
          Branding y Performance (eCommerce, Apps, Leads)
        </b-card>
      </b-collapse>
      <b-button v-b-toggle="'collapse-2'" class="button-colapse third">
        <div class="single-chart">
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
        <div class="single-chart">
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
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.whatWeDo-background {
  background-color: $background-white;
}
.whatWeDo-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 1.6rem;
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
  .button-colapse {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: initial;
    margin-bottom: 1rem;

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
        animation: progress 1s ease-out forwards;
      }

      @keyframes progress {
        0% {
          stroke-dasharray: 0 100;
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
  }

  .collapse-content {
    font-weight: 100;
    color: $subtitle;
    border-top: 1px solid rgba(10, 10, 11, 0.29);
    background-color: transparent;
  }
}
</style>

<template>
  <div id="agile-process" ref="agileProcess" class="agile-background">
    <b-container class="agile-container">
      <b-row>
        <b-col md="12">
          <p class="subtitle">PROCESO ÁGIL</p>
        </b-col>
        <b-col md="6">
          <p class="title-mobile">Filosofía.</p>
          <div
            v-observe-visibility="{
              callback: isViewableNow,
              throttle: 300,
            }"
            :class="`circles-container ${showAnimation}`"
          >
            <div id="circleSecondary" class="circle secondary">
              <p class="circle-text">DATA.</p>
            </div>
            <div id="circleWhite" class="circle white">
              <p class="circle-text">ZENDA</p>
            </div>
            <div id="circlePrimary" class="circle primary">
              <p class="circle-text">INNOVACIÓN.</p>
            </div>
            <div id="circleThird" class="circle third">
              <p class="circle-text">
                PERFOR <br />
                MANCE.
              </p>
            </div>
          </div>
        </b-col>
        <b-col md="6">
          <div class="text-container">
            <p class="title">Filosofía.</p>
            <p class="text-detail">
              El aumento de la velocidad de aprendizaje y lectura de los datos
              obliga a adaptarse a metodologías veloces de accion y reaccion.
            </p>
            <p class="text-detail">
              Para trabajar con organizaciones modernas primero hay que pensar
              como una.
            </p>
            <p class="text-detail">
              Desafía el Pensamiento Crítico, clave en Growth Hacking.
            </p>
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
    }
  },
  mounted() {
    const circleSecondary = document.getElementById('circleSecondary')
    const circlePrimary = document.getElementById('circlePrimary')
    const circleThird = document.getElementById('circleThird')

    let direction = ''
    let position = window.scrollY
    let cont = 0

    const moveMinusMin = (from, to, div) => {
      let n = 0
      if (direction === 'up') {
        n = from + cont / div
      } else {
        n = from - cont / div
      }
      if (n <= to) {
        return n
      }
    }
    const movePlusMay = (from, to, div) => {
      let n = 0
      if (direction === 'up') {
        n = from - cont / div
      } else {
        n = from + cont / div
      }
      if (n >= to) {
        return n
      }
    }
    window.onscroll = () => {
      const scroll = window.scrollY

      if (scroll > position) {
        direction = 'down'
        --cont
      } else {
        direction = 'up'
        ++cont
      }
      position = scroll

      if (this.showAnimation) {
        circleSecondary.style.transform = `translate(
          ${moveMinusMin(-12, -5, 1.8)}rem,
          ${moveMinusMin(-2, 3, 2)}rem)`
        circlePrimary.style.transform = `translate(
          ${movePlusMay(8, 0, 2)}rem,
          ${moveMinusMin(-8, -3.6, 4)}rem)`
        circleThird.style.transform = `translate(
           ${movePlusMay(5, 3.5, 11)}rem,
           ${movePlusMay(10, 3.5, 2)}rem)`
      } else {
        cont = 0
      }
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
.agile-background {
  background-color: #fafafa;
  position: relative;

  .agile-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 1.4rem;
    .subtitle {
      font-weight: 700;
      color: $typography;
      letter-spacing: 0.02rem;
      line-height: 1.2rem;
    }
    .title-mobile {
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
      .title-mobile {
        display: none;
      }
    }
    @media (min-width: 1440px) {
      .subtitle {
        font-size: 1rem;
        margin-bottom: 4rem;
      }
    }
    .circles-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 15rem;
      margin-top: 12rem;
      .circle {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        .circle-text {
          text-align: center;
          color: white;
          margin-bottom: 0;
        }
        &.secondary {
          transform: translate(-12rem, -2rem);
          background-color: $secondary;
          opacity: 0.9;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: all 0.5s ease-out;
        }
        &.primary {
          transform: translate(8rem, -8rem);
          background-color: $primary;
          opacity: 0.9;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: all 0.5s ease-out;
        }
        &.third {
          transform: translate(5rem, 10rem);
          background: rgba(149, 214, 234, 0.9);
          opacity: 0.9;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: all 0.5s ease-out;
        }
        &.white {
          .circle-text {
            font-family: 'Recoleta Alt', serif;
            font-weight: 900;
            font-size: 1.3rem;
            transform: rotate(360deg);
            color: black;
            z-index: 2;
          }
        }
      }
      &.true {
        .circle {
          &.secondary {
            // animation-name: secondary-circle;
            animation-duration: 4s;
            animation-fill-mode: forwards;
          }
          &.primary {
            // animation-name: primary-circle;
            animation-duration: 4s;
            animation-fill-mode: forwards;
          }
          &.third {
            // animation-name: third-circle;
            animation-duration: 4s;
            animation-fill-mode: forwards;
          }
          &.white {
            .circle-text {
              // animation-name: text-white-circle;
              animation-duration: 4s;
              animation-fill-mode: forwards;
            }
          }
        }
      }
      @keyframes secondary-circle {
        from {
          transform: translate(-9rem, 0);
        }
        to {
          transform: translate(-4rem, 3rem);
        }
      }
      @keyframes primary-circle {
        from {
          transform: translate(6rem, -6rem);
        }
        to {
          transform: translate(0, -3.5rem);
        }
      }
      @keyframes third-circle {
        from {
          transform: translate(3.5rem, 8rem);
        }
        to {
          transform: translate(3rem, 3rem);
        }
      }
      @keyframes text-white-circle {
        from {
          transform: rotate(270deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    .text-container {
      padding: 1rem 2rem;
      .title {
        font-weight: bold;
        font-size: 2.3rem;
        line-height: 2.3rem;
        letter-spacing: -0.02em;
        color: $typography;
        margin-top: 1.2rem;
        margin-bottom: 1rem;
        padding-right: 5rem;
      }
      .text-detail {
        text-align: left;
        color: $subtitle;
        font-weight: 100;
      }
      @media (max-width: 600px) {
        .title {
          display: none;
        }
        .text-detail {
          text-align: center;
        }
      }
      @media (min-width: 1440px) {
        .title {
          font-size: 4rem;
          line-height: 4rem;
          font-weight: 100;
        }
        .text-detail {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (min-width: 1440px) {
    .agile-container {
      padding: 4rem 0;
    }
  }
}
</style>

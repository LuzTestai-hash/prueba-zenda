<template>
  <div id="dashboard" class="dashboard-background">
    <div class="dashboard-container">
      <b-container class="title-container">
        <p class="subtitle">COMO ANALIZAMOS.</p>
        <div class="hand-container">
          <HandMoveIcon :color="'#fff'" />
        </div>
      </b-container>
      <b-container>
        <p class="text-dashboard">
          {{ dashboardData.detail }}
        </p>
        <p class="dashboard-description">
          {{ dashboardData.description }}
        </p>
        <!-- <VueSlickCarousel
          ref="carousel"
          :dots="false"
          :arrows="false"
          v-bind="settings"
          class="carusel-vue-slick"
        >
          <div v-for="data in dashboarddata" :key="data.id">
            <DashboardCard :detail="data.detail" />
          </div>
        </VueSlickCarousel> -->
      </b-container>
      <b-container class="buttons-container">
        <kinesis-container>
          <kinesis-element
            id="buttonVideo"
            ref="buttonVideo"
            tag="b-button"
            :strength="10"
            class="button"
          >
            <div class="order-button">
              <p>Ver video</p>
            </div>
            <span id="spanVideo" />
          </kinesis-element>
        </kinesis-container>

        <!-- <div class="arrows-container">
          <kinesis-container>
            <kinesis-element :strength="10">
              <div class="arrow-button" @click="showPrev">
                <b-icon icon="arrow-left" style="color: #fff" />
              </div>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10">
              <div class="arrow-button" @click="showNext">
                <b-icon icon="arrow-right" style="color: #fff" />
              </div>
            </kinesis-element>
          </kinesis-container>
        </div> -->
      </b-container>
    </div>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'MyComponent',
  // components: { VueSlickCarousel },

  data() {
    return {
      arrowPrev: false,
      dashboardData: {
        detail:
          ' Desarrollamos KPIs en Data Studio 100% online, customizables y actualizados en tiempo real.',
        description:
          'Establecemos Tableros de Control adaptables a cada área tomando como prioridad el control de Métricas Claves, evitando perder tiempo en datos irrelevantes. Sabemos perfecto que "Si no es accionable, no debería ser monitoreada.',
      },
      // dashboarddata: [
      //   {
      //     id: 0,
      //     detail:
      //       'Desarrollamos KPIs en Data Studio 100% online, customizables y actualizados en tiempo real.',
      //   },
      //   // {
      //   //   id: 1,
      //   //   detail:
      //   //     'Nuestro HUB compartido para mejorar la colaboración entre los equipos.',
      //   // },
      // ],
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        // centerMode: true,
        // centerPadding: '15px',
        // focusOnSelect: true,
        slidesToShow: 1,
        speed: 500,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       centerPadding: '0px',
        //     },
        //   },
        // ],
      },
    }
  },
  mounted() {
    // this.$refs.carousel.$el.addEventListener('mouseenter', () => {
    //   this.$nuxt.$emit('mouse', 'carousel')
    // })
    // this.$refs.carousel.$el.addEventListener('mouseleave', () => {
    //   this.$nuxt.$emit('mouse', 'pointer')
    // })
    const button = document.getElementById('buttonVideo')
    const span = document.getElementById('spanVideo')

    this.$refs.buttonVideo.$el.addEventListener('mouseenter', (e) => {
      const relX = e.pageX - button.offsetLeft
      const relY = e.pageY - button.offsetTop
      span.style.top = `${relY}px`
      span.style.left = `${relX}px`
    })
    this.$refs.buttonVideo.$el.addEventListener('mouseout', (e) => {
      const relX = e.pageX - button.offsetLeft
      const relY = e.pageY - button.offsetTop
      span.style = { top: relY, left: relX }
    })
  },
  // methods: {
  //   showNext() {
  //     this.$refs.carousel.next()
  //     this.arrowPrev = true
  //   },
  //   showPrev() {
  //     this.$refs.carousel.prev()
  //     this.arrowPrev = false
  //   },
  // },
}
</script>

<style lang="scss" scoped>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
@import '../assets/stylesheets/components/colors';
.dashboard-background {
  background: linear-gradient(274.38deg, #7cf3c1 -18.85%, #95d6ea 86%);
  .dashboard-container {
    min-height: 100vh;
    padding: 4rem 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .subtitle {
        font-weight: 700;
        color: white;
        letter-spacing: 0.02rem;
        line-height: 1.2rem;
        margin-bottom: 5rem;
      }
      @media (min-width: 1440px) {
        .subtitle {
          font-size: 1rem;
        }
      }
    }
    .text-dashboard {
      color: #fff;
      font-size: 2rem;
      line-height: 2.3rem;
      margin-bottom: 0;
      padding: 0 0 2rem 0;
    }
    .dashboard-description {
      color: #fff;
      font-size: 1.22rem;
      line-height: 1.3;
      letter-spacing: -0.04rem;
      font-weight: 300;
      margin-bottom: 2rem;
    }
    @media (min-width: 660px) {
      .text-dashboard {
        font-weight: 600;
        width: 60%;
        font-size: 2.6rem;
        line-height: 3rem;
      }
      .dashboard-description {
        width: 60%;
      }
    }

    @media (min-width: 1440px) {
      .text-dashboard {
        font-weight: 100;
        font-size: 3.5rem;
        line-height: 4.5rem;
      }
    }
    .buttons-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .button {
        position: relative;
        display: block;
        border-color: white;
        background-color: transparent;
        border-radius: 6rem;
        padding: 1rem;
        width: 11rem;
        overflow: hidden;
        .order-button {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        p {
          color: white;
          margin-bottom: 0;
        }
        span {
          display: block;
          position: absolute;
          border-radius: 50%;
          background-color: white;
          transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
          transform: translate(-50%, -50%);
          z-index: -1;
          width: 0;
          height: 0;
        }
        &:hover {
          p {
            color: #95d6ea;
          }
          span {
            width: 11rem * 4;
            height: 11rem * 2.25;
          }
        }
      }
      .arrows-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        .arrow-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border: 1px solid white;
          border-radius: 50%;
          padding: 1rem;
          margin: 1rem;
        }
      }
      @media (max-width: 600px) {
        .arrows-container {
          display: none;
          .arrow-button {
            display: none;
          }
        }
      }
    }
    @media (min-width: 1440px) {
      .button {
        border-radius: 6rem;
        padding: 1rem;
        width: 14rem;
        p {
          font-size: 1.5rem;
        }
      }
    }

    @media (min-width: 1024px) {
      .hand-container {
        display: none;
      }
    }
    .carusel-vue-slick {
      cursor: grab;
      margin-left: 1rem;
    }
  }
  @media (min-width: 1440px) {
    .dashboard-container {
      padding: 4rem 0;
    }
  }
}
</style>

<template>
  <div id="dashboard" class="dashboard-background">
    <div class="dashboard-container">
      <b-container class="title-container">
        <p class="subtitle">PANEL DE CONTROL.</p>
        <div class="hand-container">
          <HandMoveIcon :color="'#fff'" />
        </div>
      </b-container>
      <VueSlickCarousel
        ref="carousel"
        :dots="false"
        :arrows="false"
        v-bind="settings"
        class="carusel-vue-slick"
      >
        <div v-for="data in dashboarddata" :key="data.id">
          <DashboardCard :detail="data.detail" />
        </div>
      </VueSlickCarousel>
      <b-container>
        <b-button class="button">
          <p>Ver video</p>
          <img src="../assets/icons/play.svg" width="30" height="30" />
        </b-button>
      </b-container>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },

  data() {
    return {
      arrowPrev: false,
      dashboarddata: [
        {
          id: 0,
          detail:
            'Desarrollado en Google Data Studio,  100% Online y customizable. ',
        },
        {
          id: 1,
          detail:
            'Nuestro HUB compartido para mejorar la colaboración entre los equipos.',
        },
      ],
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        centerMode: true,
        centerPadding: '150px',
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerPadding: '0px',
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.$refs.carousel.$el.addEventListener('mouseenter', () => {
      this.$nuxt.$emit('mouse', 'carousel')
    })
    this.$refs.carousel.$el.addEventListener('mouseleave', () => {
      this.$nuxt.$emit('mouse', 'pointer')
    })
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
      this.arrowPrev = true
    },
    showPrev() {
      this.$refs.carousel.prev()
      this.arrowPrev = false
    },
  },
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
          font-size: 1.4rem;
        }
      }
    }
    .button {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: transparent;
      justify-content: space-between;
      border-color: white;
      border-radius: 6rem;
      padding: 1rem;
      width: 11rem;
      p {
        color: white;
        margin-bottom: 0;
        margin-right: 2rem;
      }
    }
    .arrow-animation {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      img:first-child {
        margin-right: 7rem;
      }
    }
    @media (min-width: 1440px) {
      .button {
        border-radius: 6rem;
        padding: 1rem;
        width: 14rem;
        p {
          font-size: 1.5rem;
          margin-right: 3rem;
        }
      }
    }

    @media (min-width: 1024px) {
      .hand-container {
        display: none;
      }
    }
    @media (max-width: 1024px) {
      .arrow-animation {
        display: none;
      }
    }
    .carusel-vue-slick {
      cursor: grab;
    }
  }
  @media (min-width: 1440px) {
    .dashboard-container {
      padding: 4rem 0;
    }
  }
}
</style>

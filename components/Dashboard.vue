<template>
  <div id="dashboard" class="dashboard-background">
    <div class="dashboard-container">
      <div class="title-container">
        <p class="subtitle">PANEL DE CONTROL.</p>
        <div class="hand-container">
          <HandMoveIcon :color="'#fff'" />
        </div>
      </div>
      <VueSlickCarousel
        ref="carousel"
        :dots="false"
        :arrows="false"
        v-bind="settings"
      >
        <div v-for="data in dashboarddata" :key="data.id">
          <DashboardCard :detail="data.detail" />
        </div>
      </VueSlickCarousel>
      <div class="arrow-animation">
        <img
          v-if="arrowPrev"
          src="../assets/icons/arrow-prev.svg"
          width="100"
          height="100"
          @click="showPrev"
        />
        <img
          src="../assets/icons/arrow.svg"
          width="100"
          height="100"
          @click="showNext"
        />
      </div>
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
    .arrow-animation {
      margin-top: 2rem;
      margin-left: 10rem;
      display: flex;
      justify-content: center;
      animation: arrow-move 3s ease-out infinite;
      img:first-child {
        margin-right: 7rem;
      }
    }
    @keyframes arrow-move {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(0.5em);
      }
      100% {
        transform: translateX(0);
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
  }
  @media (min-width: 1440px) {
    .dashboard-container {
      padding: 4rem 0;
    }
  }
}
</style>

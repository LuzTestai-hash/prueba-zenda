<template>
  <div id="clients" class="client-background">
    <div class="client-container">
      <div class="d-none d-md-flex circle one"></div>
      <div class="d-none d-md-flex circle two"></div>
      <div class="d-none d-md-flex circle three"></div>
      <b-container class="title-container">
        <p class="subtitle">CASOS DE ÉXITO.</p>
        <div class="hand-container">
          <HandMoveIcon :color="'#fff'" />
        </div>
      </b-container>

      <VueSlickCarousel
        id="client-carousel"
        ref="carousel"
        v-bind="settings"
        class="carusel-vue-slick"
      >
        <div v-for="data in clientdata" :key="data.id">
          <ClientsCard
            :title="data.title"
            :color="data.color"
            :detail="data.detail"
          />
        </div>
      </VueSlickCarousel>

      <!-- <div class="arrow-animation">
        <img
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
      </div> -->
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
      clientdata: [
        {
          id: 0,
          title: 'Clue',
          color: 'primary',
          detail:
            'App de Salud Femenina: Desarrollamos una estrategia de medición basada en la retención a 6 meses de los usuarios, midiendo el Costo por retención del usuario por canal y campaña en todo el mundo y clasificando según Tier de calidad ponderada.',
        },
        {
          id: 1,
          title: 'WynDam',
          color: 'third',
          detail:
            'Grupo de Cadenas Hoteleras: Gestionamos los proyectos digitales de todas las cadenas del grupo (Dazzler,La Quinta, Wyndham, etc.) en todo Latinoamérica.',
        },
        {
          id: 2,
          title: 'Pepe',
          color: 'primary',
          detail:
            'App de Salud Femenina: Desarrollamos una estrategia de medición basada en la retención a 6 meses de los usuarios, midiendo el Costo por retención del usuario por canal y campaña en todo el mundo y clasificando según Tier de calidad ponderada.',
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
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
@import '../assets/stylesheets/components/colors';
.client-background {
  background-color: $background-black;
  .client-container {
    padding: 3rem 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .title-container {
      display: flex;
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
    .arrow-animation {
      width: 100%;
      margin-top: 2rem;
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
        transform: translateX(0.5rem);
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
    .carusel-vue-slick {
      cursor: grab;
    }
  }
  @media (min-width: 1024px) {
    .client-container {
      padding: 4rem 0;
      position: relative;
      overflow: hidden;
      .circle {
        position: absolute;
        border-radius: 100%;
        &.one {
          bottom: -3rem;
          min-height: 22rem;
          width: 29%;
          border: 1px solid rgba(231, 28, 162, 0.4);
        }
        &.two {
          min-height: 20rem;
          width: 24%;
          left: 46rem;
          border: 1px solid rgba(89, 215, 162, 0.2);
        }
        &.three {
          min-height: 30rem;
          width: 44%;
          left: 57rem;
          border: 1px solid rgba(149, 214, 234, 0.36);
          top: -3rem;
        }
      }
    }
  }
}
</style>

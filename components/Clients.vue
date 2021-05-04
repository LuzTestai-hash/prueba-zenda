<template>
  <div id="clients" class="client-background">
    <div v-rellax="rellax">
      <div class="client-container">
        <div class="d-none d-md-flex circle one"></div>
        <div class="d-none d-md-flex circle two"></div>
        <div class="d-none d-md-flex circle three"></div>
        <b-container class="title-container">
          <p class="subtitle">{{ $t('portfolio.name') }}</p>
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
          <div
            v-for="(client, index) in $t('portfolio.items')"
            :key="client._id"
          >
            <ClientsCard :client="client" :color="getCardColor(index)" />
          </div>
        </VueSlickCarousel>

        <b-container class="arrows-container">
          <kinesis-container>
            <kinesis-element :strength="10">
              <div class="arrow-button" @click="showPrev">
                <b-icon icon="arrow-left" style="color: #fff" alt="icon" />
              </div>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10">
              <div class="arrow-button" @click="showNext">
                <b-icon icon="arrow-right" style="color: #fff" alt="icon" />
              </div>
            </kinesis-element>
          </kinesis-container>
        </b-container>
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
      rellax: {
        speed: -1.2,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      },
      clientdata: [
        {
          id: 0,
          title: 'Clue',
          color: 'primary',
          detail:
            'App de Salud Femenina: Desarrollamos una estrategia de medición basada en la retención a 6 meses de los usuarios, midiendo el Costo por retención del usuario por canal y campaña en todo el mundo y clasificando según Tier de calidad ponderada.',
          first: {
            number: '3X',
            detail: 'Usuarios Nuevos Retenidos después de 6 meses.',
          },
          second: {
            number: '4 millones',
            detail: 'Extra de usuarios activos mensuales (MAU)',
          },
          third: {
            number: '3X',
            detail: 'Alcanzados por las campañas de adquisición',
          },
        },
        {
          id: 1,
          title: 'WynDam',
          color: 'third',
          detail:
            'Grupo de Cadenas Hoteleras: Gestionamos los proyectos digitales de todas las cadenas del grupo (Dazzler,La Quinta, Wyndham, etc.) en todo Latinoamérica.',
          first: {
            number: '80%',
            detail:
              'de reducción de tiempos dedicados a reporting a través de la automatización',
          },
          second: {
            number: '+400%',
            detail:
              'de aumento de ROI en campañas de facebook reemplazando campañas de branding por campañas de performance',
          },
          third: {
            number: '+15 cadenas',
            detail: 'hoteleras promocionadas en todo LATAM en 3 idiomas',
          },
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
        edgeFriction: 0.1,
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
    getCardColor(index) {
      switch ((index + 1) % 3) {
        case 1:
          return 'primary'
        case 2:
          return 'third'
        case 0:
          return 'secondary'
        default:
          break
      }
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
    @media (min-width: 1024px) {
      .hand-container {
        display: none;
      }
    }
    .carusel-vue-slick {
      cursor: grab;
    }
    .arrows-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 2rem;
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
          height: 22rem;
          width: 22rem;
          border: 1px solid rgba(231, 28, 162, 0.4);
        }
        &.two {
          height: 20rem;
          width: 20rem;
          left: 46rem;
          border: 1px solid rgba(89, 215, 162, 0.2);
        }
        &.three {
          height: 30rem;
          width: 30rem;
          left: 57rem;
          border: 1px solid rgba(149, 214, 234, 0.36);
          top: -3rem;
        }
      }
    }
  }
}
</style>

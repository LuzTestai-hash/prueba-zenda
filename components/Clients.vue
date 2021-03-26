<template>
  <div id="clients" class="client-background">
    <b-container class="client-container">
      <div class="title-container">
        <p class="subtitle">CASOS DE ÉXITO.</p>
        <div class="hand-container">
          <HandMoveIcon :color="'#fff'" />
        </div>
      </div>

      <VueSlickCarousel v-bind="settings">
        <div v-for="data in clientdata" :key="data.id">
          <ClientsCard
            :title="data.title"
            :color="data.color"
            :detail="data.detail"
          />
        </div>
      </VueSlickCarousel>
      <div class="arrow-animation">
        <img src="../assets/icons/arrow.svg" width="100" height="100" />
      </div>
    </b-container>
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
}
</script>

<style lang="scss" scoped>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
@import '../assets/stylesheets/components/colors';
.client-background {
  background-color: $background-black;
  .client-container {
    min-height: 100vh;
    padding: 3rem 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  @media (min-width: 1024px) {
    .client-container {
      padding: 4rem 0;
    }
  }
}
</style>

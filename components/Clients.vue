<template>
  <div class="client-background">
    <b-container class="client-container">
      <VueSlickCarousel v-bind="settings">
        <div v-for="data in clientdata" :key="data.id">
          <ClientsCard
            :title="data.title"
            :color="data.color"
            :detail="data.detail"
          />
        </div>
      </VueSlickCarousel>
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
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
    padding: 4rem 1.6rem;
  }
}
</style>

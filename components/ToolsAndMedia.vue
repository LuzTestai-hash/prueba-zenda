<template>
  <b-container class="containerToolsAndMedia">
    <h2 class="subtitle">Confia en nosotros</h2>
    <VueSlickCarousel v-bind="settings">
      <p>Medios</p>
      <p>Data</p>
      <p>Flow</p>

      <p>Walmart</p>
      <p>Walmart</p>
      <p>Walmart</p>

      <p>Workana</p>
      <p>Workana</p>
      <p>Workana</p>

      <p>Heiniken</p>
      <p>Heiniken</p>
      <p>Heiniken</p>
    </VueSlickCarousel>
  </b-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      rows: 3,
      slidesPerRow: 1,
    },
  }),
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.containerToolsAndMedia {
  padding: 2rem;

  .subtitle {
    color: $subtitle;
    font-size: 1.2rem;
    text-align: center;
  }
}

.probando {
  display: flex;
  flex-direction: row;
}
</style>

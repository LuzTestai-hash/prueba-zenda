<template>
  <b-container class="toolsAndMedia-container">
    <p class="subtitle">HERRAMIENTAS Y MEDIOS</p>
    <VueSlickCarousel v-bind="settings" class="carrusel">
      <div class="carrusel-container">
        <img src="../assets/icons/media.svg" width="60" height="60" />
      </div>
      <div class="carrusel-container">
        <p>Medios</p>
      </div>
      <div class="carrusel-container">
        <p>Walmart</p>
      </div>
      <div class="carrusel-container">
        <p>Workana</p>
      </div>
      <div class="carrusel-container">
        <p>Heiniken</p>
      </div>
    </VueSlickCarousel>
    <VueSlickCarousel v-bind="settings" class="carrusel">
      <div class="carrusel-container">
        <img src="../assets/icons/data.svg" width="60" height="60" />
      </div>
      <div class="carrusel-container">
        <p>Data</p>
      </div>
      <div class="carrusel-container">
        <p>Walmart</p>
      </div>
      <div class="carrusel-container">
        <p>Workana</p>
      </div>
      <div class="carrusel-container">
        <p>Heiniken</p>
      </div>
    </VueSlickCarousel>
    <VueSlickCarousel v-bind="settings" class="carrusel">
      <div class="carrusel-container">
        <img src="../assets/icons/flow.svg" width="60" height="60" />
      </div>
      <div class="carrusel-container">
        <p>Flow</p>
      </div>
      <div class="carrusel-container">
        <p>Walmart</p>
      </div>
      <div class="carrusel-container">
        <p>Workana</p>
      </div>
      <div class="carrusel-container">
        <p>Heiniken</p>
      </div>
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
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.toolsAndMedia-container {
  padding: 2rem;

  .subtitle {
    font-weight: 700;
    color: $typography;
    letter-spacing: 0.02rem;
    margin-bottom: 3rem;
    padding-right: 10rem;
  }
  .carrusel {
    margin-bottom: 2rem;
  }
  .carrusel-container {
    display: flex;
    align-items: center;
    p {
      margin-top: 1rem;
      margin-bottom: initial;
    }
  }
}
</style>

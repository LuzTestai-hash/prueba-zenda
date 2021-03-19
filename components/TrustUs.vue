<template>
  <b-container>
    <h2 class="subtitle">Confia en nosotros</h2>
    <VueSlickCarousel class="containerTrust" v-bind="settings">
      <p class="trademarks">Walmart</p>

      <p class="trademarks">Workana</p>

      <p class="trademarks">Heiniken</p>
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
      centerMode: true,
      centerPadding: '20px',
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
    },
  }),
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.subtitle {
  color: $subtitle;
  font-size: 1.2rem;
  text-align: center;
}
.containerTrust {
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  min-height: 10vh;
  overflow: auto;
  min-width: 500px;
  .trademarks {
    outline: none;
    font-size: 1.5rem;
    font-weight: 900;
    margin-right: 1rem;
  }
}
</style>

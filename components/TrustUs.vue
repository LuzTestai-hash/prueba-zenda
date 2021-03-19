<template>
  <div class="trustus-background">
    <b-container class="trustus-container">
      <p class="subtitle">Confia en nosotros</p>
      <VueSlickCarousel class="containerTrust" v-bind="settings">
        <div>
          <p class="trademarks">Walmart</p>
        </div>

        <div>
          <p class="trademarks">Workana</p>
        </div>

        <div>
          <p class="trademarks">Heiniken</p>
        </div>
      </VueSlickCarousel>
    </b-container>
  </div>
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
        slidesToShow: 2,
        speed: 500,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.trustus-background {
  background: white;
  .trustus-container {
    padding: 4rem 1.6rem;
    margin-top: 3rem;
    justify-content: center;
    align-items: center;
    .subtitle {
      font-size: 1.2rem;
      color: $subtitle;
      text-align: center;
      margin-bottom: 3rem;
    }
    .trademarks {
      font-size: 1.5rem;
      font-weight: 900;
    }
  }
}
</style>

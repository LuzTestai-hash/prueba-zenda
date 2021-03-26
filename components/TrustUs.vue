<template>
  <div class="trustus-background">
    <b-container class="trustus-container">
      <p class="subtitle">Confian en nosotros</p>
      <div class="d-block d-md-none">
        <VueSlickCarousel v-bind="settings">
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
      </div>
      <div class="d-none d-md-flex container-trademarks-desktop">
        <div class="row">
          <p class="trademarks">Heiniken</p>
          <p class="trademarks">Heiniken</p>
          <p class="trademarks">Heiniken</p>
          <p class="trademarks">Heiniken</p>
        </div>
        <div class="row mt-4">
          <p class="trademarks">Walmart</p>
          <p class="trademarks">Walmart</p>
          <p class="trademarks">Walmart</p>
          <p class="trademarks">Walmart</p>
        </div>
      </div>
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
  background: #fafafa;
  .trustus-container {
    padding: 4rem 1.6rem;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    .subtitle {
      font-size: 1.2rem;
      color: rgba(10, 10, 11, 0.45);
      text-align: center;
      margin-bottom: 3rem;
    }
    @media (min-width: 1440px) {
      .subtitle {
        font-size: 1.8rem;
      }
    }
    .trademarks {
      font-size: 1.5rem;
      font-weight: 900;
    }
    .container-trademarks-desktop {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .trademarks {
        font-size: 1.5rem;
        font-weight: 900;
        margin-left: 4rem;
        margin-right: 4rem;
      }
    }
  }
}
@media (max-width: 768px) {
  .trustus-background {
    .trustus-container {
      height: 50vh;
    }
  }
}
</style>

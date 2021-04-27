<template>
  <div class="trustus-background">
    <b-container class="trustus-container">
      <p class="subtitle">Confian en nosotros</p>
      <div class="d-block d-md-none">
        <VueSlickCarousel v-bind="settings">
          <div>
            <img
              src="../assets/icons/walmart-logo.png"
              alt="walmart"
              class="trademarks"
              width="151px"
              height="auto"
            />
          </div>

          <div>
            <img
              src="../assets/icons/workana-logo.png"
              alt="workana"
              class="trademarks"
              width="150px"
              height="auto"
            />
          </div>

          <div>
            <img
              src="../assets/icons/heiniken-logo.png"
              alt="Heiniken"
              class="trademarks"
              width="175px"
              height="auto"
            />
          </div>
        </VueSlickCarousel>
      </div>
      <div class="d-none d-md-flex container-trademarks-desktop">
        <b-row class="row">
          <img
            src="../assets/icons/walmart-logo.png"
            alt="walmart"
            class="trademarks"
            width="151px"
            height="auto"
          />
          <img
            src="../assets/icons/workana-logo.png"
            alt="workana"
            class="trademarks"
            width="150px"
            height="auto"
          />
          <img
            src="../assets/icons/heiniken-logo.png"
            alt="Heiniken"
            class="trademarks"
            width="175px"
            height="auto"
          />
          <img
            src="../assets/icons/Supervielle-logo.png"
            alt="Supervielle"
            class="trademarks"
            width="130px"
            height="auto"
          />
        </b-row>
        <b-row class="row">
          <img
            src="../assets/icons/clue-logo.png"
            alt="clue"
            class="trademarks"
            width="114,97px"
            height="auto"
          />
          <img
            src="../assets/icons/whyndham-logo.png"
            alt="whyndham"
            class="trademarks"
            width="139,5px"
            height="auto"
          />
          <img
            src="../assets/icons/depilife-logo.png"
            alt="depilife"
            class="trademarks"
            width="138,46px"
            height="auto"
          />
          <img
            src="../assets/icons/acamica-logo.png"
            alt="acamica"
            class="trademarks"
            width="140,57px"
            height="auto"
          />
        </b-row>
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
    padding: 1rem 1.6rem 5rem 1.6rem;
    justify-content: center;
    align-items: center;
    .subtitle {
      font-size: 1.2rem;
      color: rgba(10, 10, 11, 0.45);
      text-align: center;
      margin-bottom: 3rem;
    }
    @media (min-width: 1440px) {
      .subtitle {
        font-size: 1.6rem;
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
      margin-bottom: 1rem;
      .row {
        display: flex;
        align-items: flex-end;
        margin-bottom: 2rem;
      }
      .trademarks {
        margin-left: 3rem;
        margin-right: 3rem;
      }
    }
  }
}
@media (max-width: 768px) {
  .trustus-background {
    .trustus-container {
      padding: 1rem 1.6rem 2rem 1.6rem;
    }
  }
}
</style>

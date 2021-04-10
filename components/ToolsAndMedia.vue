<template>
  <b-container id="dashboard-tools" class="toolsAndMedia-container">
    <p class="subtitle">HERRAMIENTAS Y MEDIOS</p>
    <div class="d-block d-md-none">
      <VueSlickCarousel v-bind="settings" class="carrusel-container">
        <div class="carrusel">
          <img src="../assets/icons/media.svg" width="60" height="60" />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/google-ads-logo.png"
            width="100px"
            height="25px"
          />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/facebook-logo.png"
            width="127,03px"
            height="18,38px"
          />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/searchads-logo.png"
            width="122,24px"
            height="25,57px"
          />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/linkedin-logo.png"
            width="104,43px"
            height="17,71px"
          />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/amazon-logo.png"
            width="69,51px"
            height="68,71px"
          />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/pinterest-logo.png"
            width="101,63px"
            height="27,04px"
          />
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel v-bind="settings" class="carrusel-container">
        <div class="carrusel">
          <img src="../assets/icons/data.svg" width="60" height="60" />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/google-suite-logo.png"
            width="60"
            height="60"
          />
        </div>
        <div class="carrusel">
          <img src="../assets/icons/slack-logo.png" width="60" height="60" />
        </div>
        <div class="carrusel">
          <img src="../assets/icons/notion-logo.png" width="60" height="60" />
        </div>
        <div class="carrusel">
          <img src="../assets/icons/Trello-logo.png" width="60" height="60" />
        </div>
      </VueSlickCarousel>
      <VueSlickCarousel v-bind="settings" class="carrusel-container">
        <div class="carrusel">
          <img src="../assets/icons/flow.svg" width="60" height="60" />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/datastudio-logo.png"
            width="60"
            height="60"
          />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/supermetrics-logo.png"
            width="60"
            height="60"
          />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/google-analytics-logo.png"
            width="60"
            height="60"
          />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/appsflyer-logo.png"
            width="60"
            height="60"
          />
        </div>
        <div class="carrusel">
          <img
            src="../assets/icons/amplitude-logo.png"
            width="60"
            height="60"
          />
        </div>
        <div class="carrusel">
          <img src="../assets/icons/segment-logo.png" width="60" height="60" />
        </div>
      </VueSlickCarousel>
    </div>

    <div class="d-none d-md-block">
      <div v-bind="settings" class="container-icon">
        <div
          class="icon"
          :class="{ 'botton-selected': categorySelected === 'Medios' }"
          @click.prevent="getMembers('Medios')"
        >
          <img src="../assets/icons/media.svg" width="60" height="60" />
          <p>Media</p>
        </div>
        <div
          class="icon"
          :class="{ 'botton-selected': categorySelected === 'Data' }"
          @click.prevent="getMembers('Data')"
        >
          <img src="../assets/icons/data.svg" width="60" height="60" />
          <p>Data</p>
        </div>
        <div
          class="icon"
          :class="{ 'botton-selected': categorySelected === 'Flow' }"
          @click.prevent="getMembers('Flow')"
        >
          <img src="../assets/icons/flow.svg" width="60" height="60" />
          <p>Flow</p>
        </div>
      </div>
      <div
        v-if="categorySelected === 'Medios'"
        v-bind="settings"
        class="container-trademarks"
      >
        <p v-for="(item, index) in category.Medios" :key="index">
          {{ item }}
        </p>
      </div>
      <div
        v-if="categorySelected === 'Data'"
        v-bind="settings"
        class="container-trademarks"
      >
        <p v-for="(item, index) in category.Data" :key="index">
          {{ item }}
        </p>
      </div>
      <div
        v-if="categorySelected === 'Flow'"
        v-bind="settings"
        class="container-trademarks"
      >
        <p v-for="(item, index) in category.Flow" :key="index">
          {{ item }}
        </p>
      </div>
    </div>
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
      category: {
        Medios: ['Walmart', 'Walmart', 'Walmart', 'Walmart', 'Walmart'],
        Data: ['Workana', 'Workana', 'Workana', 'Workana', 'Workana'],
        Flow: ['Heiniken', 'Heiniken', 'Heiniken', 'Heiniken', 'Heiniken'],
      },
      categorySelected: 'Medios',
      getMembers(info) {
        this.categorySelected = info
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.toolsAndMedia-container {
  padding: 4rem 1.4rem;

  .subtitle {
    font-weight: 700;
    color: $typography;
    letter-spacing: 0.02rem;
    margin-bottom: 3rem;
    padding-right: 10rem;
  }
  @media (min-width: 1440px) {
    .subtitle {
      font-size: 1rem;
      margin-bottom: 4rem;
    }
  }
  .carrusel-container {
    margin-bottom: 2rem;
  }
  .carrusel {
    display: flex;
    align-items: center;
    p {
      margin-top: 1rem;
      margin-bottom: initial;
    }
  }

  .container-trademarks {
    display: flex;
    margin-top: 3rem;
    margin-bottom: 3rem;
    justify-content: center;

    p {
      margin: 2rem;
      font-size: 1.2rem;
    }
  }

  .container-icon {
    display: flex;
    justify-content: center;
    .botton-selected {
      background-color: $background-botton;
      border-radius: 10px;
      box-shadow: 0.1px 4px 20px $color-box-shadow;
    }
    .icon {
      display: flex;
      align-items: center;
      margin-right: 3rem;
      margin-left: 3rem;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;

      &:hover {
        background-color: $background-botton;
        border-radius: 10px;
        box-shadow: 0.1px 4px 20px $color-box-shadow;
      }
      p {
        margin-top: 1rem;
        margin-left: 1.5rem;
        margin-right: 1rem;
      }
    }
  }
}
@media (min-width: 660px) {
  .toolsAndMedia-container {
    padding: 4rem 1.6rem;
  }
}
</style>

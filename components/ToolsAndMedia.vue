<template>
  <b-container id="dashboard-tools" class="toolsAndMedia-container">
    <p class="subtitle">{{ $t('howDidWeDoIt.name') }}</p>
    <div class="d-block d-md-none">
      <div class="mobile-carrusel-container">
        <div class="image-carrusel">
          <img
            src="../assets/icons/media.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="media"
          />
        </div>
        <div
          v-for="(item, index) in category.Medios"
          :key="index"
          class="image-carrusel"
        >
          <img
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            class="image-carrusel"
            loading="lazy"
          />
        </div>
      </div>

      <div class="mobile-carrusel-container">
        <div class="image-carrusel">
          <img
            src="../assets/icons/data.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="data"
          />
        </div>
        <div
          v-for="(item, index) in category.Data"
          :key="index"
          class="image-carrusel"
        >
          <img
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            loading="lazy"
          />
        </div>
      </div>

      <div class="mobile-carrusel-container">
        <div class="image-carrusel">
          <img
            src="../assets/icons/flow.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="flow"
          />
        </div>
        <div
          v-for="(item, index) in category.Flow"
          :key="index"
          class="image-carrusel"
        >
          <img
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="d-none d-md-block">
      <div v-bind="settings" class="container-icon">
        <div
          class="icon"
          :class="{ 'botton-selected': categorySelected === 'Medios' }"
          @click.prevent="getMembers('Medios')"
        >
          <img
            src="../assets/icons/media.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="media"
          />
          <p>Media</p>
        </div>
        <div
          class="icon"
          :class="{ 'botton-selected': categorySelected === 'Data' }"
          @click.prevent="getMembers('Data')"
        >
          <img
            src="../assets/icons/data.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="data"
          />
          <p>Data</p>
        </div>
        <div
          class="icon"
          :class="{ 'botton-selected': categorySelected === 'Flow' }"
          @click.prevent="getMembers('Flow')"
        >
          <img
            src="../assets/icons/flow.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="flow"
          />
          <p>Flow</p>
        </div>
      </div>
      <div
        v-if="categorySelected === 'Medios'"
        v-bind="settings"
        class="container-trademarks"
      >
        <div v-for="(item, index) in category.Medios" :key="index">
          <img
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            loading="lazy"
          />
        </div>
      </div>
      <div
        v-if="categorySelected === 'Data'"
        v-bind="settings"
        class="container-trademarks"
      >
        <div v-for="(item, index) in category.Data" :key="index">
          <img
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            loading="lazy"
          />
        </div>
      </div>
      <div
        v-if="categorySelected === 'Flow'"
        v-bind="settings"
        class="container-trademarks"
      >
        <div v-for="(item, index) in category.Flow" :key="index">
          <img
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'MyComponent',

  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 500,
      },
      category: {
        Medios: [
          // { title: 'googleAds-logo', width: '60px', height: '60px' },
          { title: 'facebook-logo', width: '140px' },
          { title: 'searchads-logo', width: '140px' },
          { title: 'linkedin-logo', width: '140px' },
          { title: 'amazon-logo', width: '60px', height: '60px' },
          { title: 'pinterest-logo', width: '100px' },
        ],
        Data: [
          { title: 'google-suite-logo', width: '120px' },
          { title: 'slack-logo', width: '100px' },
          { title: 'notion-logo', width: '80px' },
          { title: 'Trello-logo', width: '100px' },
        ],
        Flow: [
          { title: 'datastudio-logo', width: '100px' },
          { title: 'supermetrics-logo', width: '100px' },
          { title: 'google-analytics-logo', width: '90px' },
          { title: 'appsflyer-logo', width: '85px' },
          { title: 'amplitude-logo', width: '90px' },
          { title: 'segment-logo', width: '90px' },
        ],
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
  .image-carrusel {
    margin-right: 1rem;
  }
  .carrusel {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    p {
      margin-top: 1rem;
      margin-bottom: initial;
    }
  }
  .mobile-carrusel-container {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    overflow: auto;
  }

  .mobile-carrusel-container::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }

  .container-trademarks {
    display: flex;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
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

<template>
  <div class="trustus-background">
    <b-container class="trustus-container">
      <p class="subtitle">{{ $t('clients.title') }}</p>
      <div class="d-flex d-md-none horizontal-scroll">
        <div
          v-for="item in images.one"
          :key="item._id"
          style="margin-right: 1rem"
        >
          <img
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            class="trademarks"
          />
        </div>
        <div
          v-for="item in images.two"
          :key="item._id"
          style="margin-right: 1rem"
        >
          <img
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            class="trademarks"
          />
        </div>
      </div>

      <div class="d-none d-md-flex container-trademarks-desktop">
        <b-row class="row">
          <img
            v-for="item in images.one"
            :key="item._id"
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            class="trademarks"
          />
        </b-row>
        <b-row class="row">
          <img
            v-for="item in images.two"
            :key="item._id"
            :src="require(`../assets/icons/${item.title}.png`)"
            :alt="item.title"
            :width="item.width"
            height="auto"
            class="trademarks"
          />
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      images: {
        one: [
          { title: 'walmart-logo', width: '151px' },
          { title: 'workana-logo', width: '150px' },
          { title: 'heiniken-logo', width: '175px' },
          { title: 'Supervielle-logo', width: '130px' },
        ],
        two: [
          { title: 'clue-logo', width: '114,97px' },
          { title: 'whyndham-logo', width: '139,5px' },
          { title: 'depilife-logo', width: '138,46px' },
          { title: 'acamica-logo', width: '140,57px' },
        ],
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
      margin-bottom: 2rem;
    }
    .horizontal-scroll {
      overflow: auto;
    }
    .horizontal-scroll::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;
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
    .carousel {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      overflow-x: auto;
      margin-bottom: 2rem;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .trademarks {
        margin: 0 1rem;
      }
    }
    @media (min-width: 600px) {
      .carousel {
        display: none;
      }
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

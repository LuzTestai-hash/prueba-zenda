<template>
  <b-container
    v-if="media && dataTools && flow"
    id="dashboard-tools"
    class="toolsAndMedia-container"
  >
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
        <div v-for="img in media.images" :key="img._id" class="image-carrusel">
          <img
            :src="img.url"
            :alt="img.originalName"
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
          v-for="img in dataTools.images"
          :key="img._id"
          class="image-carrusel"
        >
          <img
            :src="img.url"
            :alt="img.originalName"
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
        <div v-for="img in flow.images" :key="img._id" class="image-carrusel">
          <img
            :src="img.url"
            :alt="img.originalName"
            height="auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="d-none d-md-block">
      <div class="container-icon">
        <div
          class="icon"
          :class="{ 'button-selected': selectedTool === 'media' }"
          @click.prevent="handleSelectedTool('media')"
        >
          <img
            src="../assets/icons/media.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="media"
          />
          <p>Medios</p>
        </div>
        <div
          class="icon"
          :class="{ 'button-selected': selectedTool === 'dataTool' }"
          @click.prevent="handleSelectedTool('dataTool')"
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
          :class="{ 'button-selected': selectedTool === 'flow' }"
          @click.prevent="handleSelectedTool('flow')"
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
      <div v-if="selectedTool === 'media'" class="container-trademarks">
        <div v-for="img in media.images" :key="img._id">
          <img
            :src="img.url"
            :alt="img.originalName"
            height="auto"
            loading="lazy"
          />
        </div>
      </div>
      <div v-if="selectedTool === 'dataTool'" class="container-trademarks">
        <div v-for="img in dataTools.images" :key="img._id">
          <img
            :src="img.url"
            :alt="img.originalName"
            height="auto"
            loading="lazy"
          />
        </div>
      </div>
      <div v-if="selectedTool === 'flow'" class="container-trademarks">
        <div v-for="img in flow.images" :key="img._id">
          <img
            :src="img.url"
            :alt="img.originalName"
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
  name: 'ToolsAndMedia',
  data() {
    return {
      tools: [],
      selectedTool: 'media',
      interval: null,
    }
  },
  computed: {
    media() {
      return this.tools.find((t) => t.name === 'media')
    },
    flow() {
      return this.tools.find((t) => t.name === 'flow')
    },
    dataTools() {
      return this.tools.find((t) => t.name === 'data')
    },
  },
  async created() {
    const { tools } = await this.$axios.$get('/tools')
    this.tools = tools
  },
  mounted() {
    this.inverval = setInterval(() => {
      this.changeSelectedTool()
    }, 5000)
    // this.intervalChange()
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    handleSelectedTool(tool) {
      this.selectedTool = tool
    },
    changeSelectedTool() {
      switch (this.selectedTool) {
        case 'media':
          this.selectedTool = 'dataTool'
          break
        case 'dataTool':
          this.selectedTool = 'flow'
          break
        case 'flow':
          this.selectedTool = 'media'
          break
        default:
          break
      }
    },
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
    //padding-right: 10rem;
  }
  @media (min-width: 1440px) {
    .subtitle {
      font-size: 1rem;
      margin-bottom: 4rem;
    }
  }
  .carrusel-container {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    margin-bottom: 2rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .image-carrusel {
    margin-right: 1rem;
    img {
      width: 7rem;
    }
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
    img {
      width: 7.5rem;
    }
  }

  .container-icon {
    display: flex;
    justify-content: center;
    cursor: pointer;
    .button-selected {
      background-color: $background-botton;
      border-radius: 10px;
      //box-shadow: 0.1px 4px 20px $color-box-shadow;
      transition: 0.4s;
      box-shadow: 0.1px 4px 20px rgb(89 215 150 / 35%) !important;
      border: 1px solid rgb(89 215 150) !important;
    }
    .icon {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      margin-left: 1rem;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      border-radius: 10px;
      box-shadow: 0.1px 4px 20px $color-box-shadow;
      transition: 0.4s;
      border: 1px solid #fff;
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

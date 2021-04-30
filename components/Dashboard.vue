<template>
  <div id="dashboard" class="dashboard-background">
    <div class="dashboard-container">
      <b-container class="title-container">
        <p class="subtitle">{{ $t('analyses.name') }}</p>
        <div class="hand-container">
          <HandMoveIcon :color="'#fff'" />
        </div>
      </b-container>
      <b-container>
        <VueSlickCarousel
          ref="carousel"
          :dots="false"
          :arrows="false"
          v-bind="settings"
          class="carusel-vue-slick"
        >
          <div v-for="analysis in $t('analyses.analyses')" :key="analysis._id">
            <DashboardCard
              :title="analysis.title"
              :description="analysis.description"
              :video="analysis.videoUrl"
            />
          </div>
        </VueSlickCarousel>
      </b-container>
      <b-container class="buttons-container">
        <div class="arrows-container">
          <kinesis-container>
            <kinesis-element :strength="10">
              <div class="arrow-button" @click="showPrev">
                <b-icon icon="arrow-left" style="color: #fff" />
              </div>
            </kinesis-element>
          </kinesis-container>
          <kinesis-container>
            <kinesis-element :strength="10">
              <div class="arrow-button" @click="showNext">
                <b-icon icon="arrow-right" style="color: #fff" />
              </div>
            </kinesis-element>
          </kinesis-container>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },

  data() {
    return {
      arrowPrev: false,
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 1,
        speed: 500,
      },
    }
  },
  mounted() {
    this.$refs.carousel.$el.addEventListener('mouseenter', () => {
      this.$nuxt.$emit('mouse', 'carousel')
    })
    this.$refs.carousel.$el.addEventListener('mouseleave', () => {
      this.$nuxt.$emit('mouse', 'pointer')
    })
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
      this.arrowPrev = true
    },
    showPrev() {
      this.$refs.carousel.prev()
      this.arrowPrev = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
@import '../assets/stylesheets/components/colors';
.dashboard-background {
  background: linear-gradient(274.38deg, #7cf3c1 -18.85%, #95d6ea 86%);
  .dashboard-container {
    min-height: 100vh;
    padding: 4rem 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .subtitle {
        font-weight: 700;
        color: white;
        letter-spacing: 0.02rem;
        line-height: 1.2rem;
        margin-bottom: 5rem;
      }
      @media (min-width: 1440px) {
        .subtitle {
          font-size: 1rem;
        }
      }
    }
    .buttons-container {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .arrows-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        .arrow-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border: 1px solid white;
          border-radius: 50%;
          padding: 1rem;
          margin: 1rem;
        }
      }
      @media (max-width: 600px) {
        .arrows-container {
          display: none;
          .arrow-button {
            display: none;
          }
        }
      }
    }

    @media (min-width: 1024px) {
      .hand-container {
        display: none;
      }
    }
    .carusel-vue-slick {
      cursor: grab;
      //margin-left: 1rem;
    }
  }
  @media (min-width: 1440px) {
    .dashboard-container {
      padding: 4rem 0;
    }
  }
}
</style>

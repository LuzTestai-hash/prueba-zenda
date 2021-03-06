<template>
  <div id="methodology" class="methodology-background">
    <b-container class="methodology-container">
      <div v-rellax="rellax">
        <div class="title-container">
          <p class="subtitle">{{ $t('how.name') }}</p>
          <div class="hand-container">
            <HandMoveIcon :color="'#000'" />
          </div>
        </div>
        <p class="title-card">{{ $t('how.title') }}</p>
        <VueSlickCarousel
          class="d-block d-md-none"
          :dots="false"
          :arrows="false"
          v-bind="settings"
        >
          <div v-for="(item, index) in $t('how.items')" :key="item._id">
            <MethodologyCard
              :number="`0${index + 1}`"
              :title="item.title"
              color="knowledge"
              :icon="getIcon(index)"
              :detail="item.description"
              classdetail="detail"
            />
          </div>
        </VueSlickCarousel>

        <div class="d-none d-md-flex flex-column">
          <p class="title-desktop">{{ $t('how.title') }}</p>
          <div class="cards-container">
            <div class="container-first-column">
              <div
                v-for="item in firstColumn"
                :key="item._id"
                class="card-method"
              >
                <p class="number">
                  {{ `0${$t('how.items').indexOf(item) + 1}` }}
                </p>
                <p class="knowledge primary">{{ item.title }}</p>
                <p class="detail">
                  {{ item.description }}
                </p>
              </div>
            </div>
            <img
              src="../assets/icons/zenda-arrow.svg"
              alt="iconPlay1"
              class="icon-play"
              loading="lazy"
            />
            <div class="container-second-column">
              <div
                v-for="item in secondColumn"
                :key="item._id"
                class="card-method"
              >
                <p class="number">
                  {{ `0${$t('how.items').indexOf(item) + 1}` }}
                </p>
                <p class="knowledge">{{ item.title }}</p>
                <p class="detail">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
    <svg
      id="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-300 0 950 270"
      class="wave"
    >
      <path
        d="M-314,267 C105,364 400,100 812,279"
        fill="none"
        stroke="#fafafa"
        stroke-width="120"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Methodology',
  components: { VueSlickCarousel },
  data() {
    return {
      rellax: {
        speed: -1.8,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      },
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  computed: {
    firstColumn() {
      return this.$t('how.items').filter(
        (item, index) => index === 0 || index === 3
      )
    },
    secondColumn() {
      return this.$t('how.items').filter(
        (item, index) => index === 1 || index === 2
      )
    },
  },
  methods: {
    getIcon(index) {
      switch (index) {
        case 0:
          return 'challenge'
        case 1:
          return 'knowledge'
        case 2:
          return 'planning'
        case 3:
          return 'execution'
        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
@import '../assets/stylesheets/components/colors';
.methodology-background {
  position: relative;
  .wave {
    z-index: -1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
  }
  .methodology-container {
    padding: 5rem 1.9rem;
    .title-container {
      display: flex;
      justify-content: space-between;
      .subtitle {
        font-size: 1rem;
        font-weight: 700;
        color: $typography;
        letter-spacing: 0.02rem;
        line-height: 1.2rem;
        //margin-bottom: 2rem;
      }
    }

    .title-card {
      font-size: 2.2rem;
      line-height: 3rem;
      margin-bottom: 1rem;
      letter-spacing: -0.1rem;
      font-weight: 700;
      transform: translateY(0.8rem);
    }
    @media (min-width: 600px) {
      .hand-container {
        display: none;
      }
      .title-card {
        display: none;
      }
    }
    //Desktop
    .cards-container {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background-image: url(../assets/icons/zenda-infinite.svg);
      background-repeat: no-repeat;
    }
    .icon-play {
      position: absolute;
      width: 3.8rem;
      height: auto;
      z-index: 1;
      top: 10rem;
      left: 25rem;
      animation: icon-play-1 6s linear infinite;
      @keyframes icon-play-1 {
        0% {
          transform: translate(0) rotate(0deg);
        }
        10% {
          transform: translate(15rem, 12rem) rotate(0deg);
        }
        20% {
          transform: translate(32rem, 12rem) rotate(-100deg);
        }
        30% {
          transform: translate(34rem, 1rem) rotate(-100deg);
        }
        40% {
          transform: translate(26rem, -5rem) rotate(85deg);
        }
        50% {
          transform: translate(16rem, -1rem) rotate(85deg);
        }
        60% {
          transform: translate(-1rem, 12rem) rotate(85deg);
        }
        70% {
          transform: translate(-10rem, 15rem) rotate(180deg);
        }
        80% {
          transform: translate(-18.5rem, 5rem) rotate(180deg);
        }
        90% {
          transform: translate(-10rem, -6rem) rotate(180deg);
        }
        100% {
          transform: translate(0) rotate(0deg);
        }
      }
    }
    @media (max-width: 1200px) {
      .icon-play {
        display: none;
      }
    }
    .container-first-column {
      max-width: 30%;
    }
    .container-second-column {
      display: flex;
      flex-direction: column-reverse;
      max-width: 30%;
    }
    .title-desktop {
      font-weight: 700;
      transform: translateY(0.8rem);
      margin-bottom: 6rem;
      font-size: 3.5rem;
      line-height: 3.3rem;
      padding-right: 2rem;
      letter-spacing: -0.1rem;
    }
    .card-method {
      position: relative;
      background-color: white;
      box-shadow: 0 4px 100px rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 2rem;
      z-index: 5;
    }
    .knowledge {
      font-family: 'Recoleta Alt', serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: black;
      margin-bottom: initial;
    }
    .detail {
      color: rgba(10, 10, 11, 0.64);
      line-height: 1.4rem;
      font-weight: 100;
    }
    .number {
      font-family: 'Recoleta Alt', serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: $primary;
    }
    @media (min-width: 1440px) {
      .title-desktop {
        font-size: 3rem;
        margin-bottom: 6rem;
      }
    }
  }
  @media (min-width: 600px) {
    .methodology-container {
      padding: 4rem 1.6rem;
    }
  }
}
@media (min-width: 600px) {
  .methodology-background {
    position: relative;
  }
}
</style>

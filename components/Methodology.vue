<template>
  <div id="methodology" class="methodology-background">
    <b-container class="methodology-container">
      <div class="title-container">
        <p class="subtitle">CÓMO LO HACEMOS.</p>
        <div class="hand-container">
          <HandMoveIcon :color="'#000'" />
        </div>
      </div>
      <VueSlickCarousel
        class="d-block d-md-none"
        :dots="false"
        :arrows="false"
        v-bind="settings"
      >
        <div v-for="data in methoddata" :key="data.id">
          <MethodologyCard
            :number="data.number"
            :title="data.title"
            :color="data.color"
            :icon="data.icon"
            :detail="data.detail"
            :classdetail="data.classDetail"
          />
        </div>
      </VueSlickCarousel>

      <div class="d-none d-md-flex flex-column">
        <p class="title-desktop">Nuestro método.</p>
        <div class="cards-container">
          <div class="container-first-column">
            <div v-for="item in firstColumn" :key="item.id" class="card-method">
              <h1 class="number">{{ item.number }}</h1>
              <p :class="item.color">{{ item.title }}</p>
              <p :class="item.classDetail">
                {{ item.detail }}
              </p>
            </div>
          </div>
          <img
            src="../assets/icons/zenda-icon-play.svg"
            alt="iconPlay1"
            class="icon-play"
          />
          <div class="container-second-column">
            <div
              v-for="item in secondColumn"
              :key="item.id"
              class="card-method"
            >
              <h1 class="number">{{ item.number }}</h1>
              <p :class="item.color">{{ item.title }}</p>
              <p :class="item.classDetail">
                {{ item.detail }}
              </p>
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
      methoddata: [
        {
          id: 0,
          number: '01',
          title: 'Conocimiento',
          color: 'knowledge primary',
          icon: 'knowledge',
          detail:
            'Relevamos los activos del proyecto, los potenciales limitantes y el objetivo del negocio a través de un Marketing Canvas propio.',
          classDetail: 'detail',
        },
        {
          id: 1,
          number: '02',
          title: 'Planificación',
          color: 'knowledge secondary',
          icon: 'planning',
          detail:
            'Generamos un plan de crecimento que tiene tanto objetivos de performance de pauta como metas a cumplir de desarrollo del canal.',
          classDetail: 'detail',
        },
        {
          id: 2,
          number: '03',
          title: 'Ejecución',
          color: 'knowledge third',
          icon: 'execution',
          detail:
            'Generamos un plan de crecimento que tiene tanto objetivos de performance de pauta como metas a cumplir de desarrollo del canal.',
          classDetail: 'detail',
        },
        {
          id: 3,
          number: '04',
          title: 'Desafío',
          color: 'knowledge primary',
          icon: 'challenge',
          detail:
            'Generamos un plan de crecimento que tiene tanto objetivos de performance de pauta como metas a cumplir de desarrollo del canal.',
          classDetail: 'detail',
        },
      ],

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
      return this.methoddata.filter((item, index) => index === 0 || index === 3)
    },
    secondColumn() {
      return this.methoddata.filter((item, index) => index === 1 || index === 2)
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
        margin-bottom: 2rem;
      }
    }
    @media (min-width: 600px) {
      .hand-container {
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
      width: 3rem;
      height: auto;
      z-index: 1;
      top: 10rem;
      left: 25rem;
      animation: icon-play-1 15s ease-out infinite;
    }
    @media (max-width: 1200px) {
      .icon-play {
        display: none;
      }
    }
    @keyframes icon-play-1 {
      0% {
        transform: translate(0);
      }
      10% {
        transform: translate(15rem, 12rem);
      }
      20% {
        transform: translate(32rem, 12rem);
      }
      30% {
        transform: translate(35rem, 1rem);
      }
      40% {
        transform: translate(26rem, -5rem);
      }
      50% {
        transform: translate(15rem, -1rem);
      }
      60% {
        transform: translate(-1rem, 12rem);
      }
      70% {
        transform: translate(-10rem, 15rem);
      }
      80% {
        transform: translate(-20rem, 5rem);
      }
      90% {
        transform: translate(-10rem, -6rem);
      }
      100% {
        transform: translate(0);
      }
    }
    // @keyframes icon-play-2 {
    //   to {
    //     transform: translate(0);
    //   }
    //   from {
    //     transform: translate(-15rem, 12rem);
    //   }
    // }
    .container-first-column {
      max-width: 30%;
    }
    .container-second-column {
      max-width: 30%;
    }
    .title-desktop {
      font-size: 2.5rem;
      line-height: 3rem;
      font-weight: 700;
      transform: translateY(0.8rem);
      letter-spacing: -0.02em;
      margin-bottom: 6rem;
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
    }
    .detail {
      font-size: 1.1rem;
      color: rgba(10, 10, 11, 0.64);
      line-height: 1.4rem;
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

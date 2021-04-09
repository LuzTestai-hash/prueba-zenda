<template>
  <div id="methodology" class="methodology-background">
    <b-container class="methodology-container">
      <div class="title-container">
        <p class="subtitle">METODOLOGÍA.</p>
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
        <div class="d-md-flex justify-content-center mt-1">
          <div class="container-first-column">
            <div v-for="item in firstColumn" :key="item.id">
              <h1 class="number">{{ item.number }}</h1>
              <p :class="item.color">{{ item.title }}</p>
              <p :class="item.classDetail">
                {{ item.detail }}
              </p>
            </div>
          </div>

          <div class="container-second-column">
            <div v-for="item in secondColumn" :key="item.id">
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
  name: 'MyComponent',
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
  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -57%;
    left: -58%;
    z-index: -1;
    background: url(../assets/icons/zenda-circle.svg) no-repeat center;
    background-size: 35rem 35rem;
    animation: spin 5s linear infinite;
  }

  .wave {
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
    .container-first-column {
      max-width: 40%;
      div {
        margin-right: 5rem;
        margin-bottom: 5rem;
      }
    }
    .container-second-column {
      max-width: 30%;
      margin-top: 5rem;
      margin-bottom: 7rem;
      div {
        margin-bottom: 5rem;
      }
    }
    .title-desktop {
      font-size: 2.5rem;
      line-height: 3rem;
      font-weight: 700;
      transform: translateY(0.8rem);
      letter-spacing: -0.02em;
      margin-bottom: 6rem;
    }
    .knowledge {
      font-family: 'Recoleta Alt', serif;
      font-size: 1.5rem;
      font-weight: 600;
      &.primary {
        color: $primary;
      }
      &.secondary {
        color: $secondary;
      }
      &.third {
        color: $third;
      }
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
    }
    @media (min-width: 1440px) {
      .title-desktop {
        font-size: 3rem;
        margin-bottom: 6rem;
      }
      .number {
        font-size: 4rem;
      }
      .knowledge {
        font-size: 2rem;
      }
    }
  }
  @media (min-width: 600px) {
    .methodology-container {
      padding: 4rem 1.6rem;
    }
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

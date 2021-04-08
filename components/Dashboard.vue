<template>
  <div id="dashboard" class="dashboard-background">
    <div class="dashboard-container">
      <b-container class="title-container">
        <p class="subtitle">PANEL DE CONTROL.</p>
        <div class="hand-container">
          <HandMoveIcon :color="'#fff'" />
        </div>
      </b-container>
      <VueSlickCarousel
        ref="carousel"
        :dots="false"
        :arrows="false"
        v-bind="settings"
        class="carusel-vue-slick"
      >
        <div v-for="data in dashboarddata" :key="data.id">
          <DashboardCard :detail="data.detail" />
        </div>
      </VueSlickCarousel>

      <kinesis-container>
        <b-container>
          <kinesis-element
            id="buttonVideo"
            ref="buttonVideo"
            tag="b-button"
            :strength="10"
            class="button"
          >
            <div class="order-button">
              <p>Ver video</p>
              <svg
                id="Capa_1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 25 25"
                style="enable-background: new 0 0 25 25"
                xml:space="preserve"
                class="icon"
              >
                <path
                  class="icon"
                  d="M16.8,11.2l-3.7-2.1L9.5,7C9.2,6.8,8.8,6.7,8.4,6.8C8.1,6.9,7.7,7.1,7.5,7.5C7.5,7.6,7.4,7.7,7.4,7.8
	c0,0.1,0,0.2-0.1,0.3c0,0,0,0.1,0,0.1v4.3v4.3c0,0.4,0.2,0.8,0.4,1c0.3,0.3,0.6,0.4,1,0.4C9,18.2,9.5,18,9.6,18l3.6-2.1h0l0,0
	l3.7-2.1c0.4-0.2,0.6-0.5,0.7-0.9c0-0.1,0-0.2,0-0.3C17.7,11.7,16.8,11.2,16.8,11.2z M16.3,12.7l-3.7,2.1c0,0-0.1,0-0.1,0L9,16.9
	c0,0-0.2,0.1-0.2,0.1s-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.2v-4.3V8.2v0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1C8.7,8,8.7,8,8.8,8
	c0.1,0,0.1,0,0.1,0C8.9,8,9,8,9,8l3.6,2.1c0,0,0.1,0,0.1,0h0l3.7,2.1c0.1,0,0.2,0.1,0.2,0.2C16.4,12.5,16.4,12.6,16.3,12.7z"
                />
                <path
                  class="icon"
                  d="M21.3,3.7C18.9,1.2,15.7,0,12.5,0C9.3,0,6.1,1.2,3.7,3.7C1.2,6.1,0,9.3,0,12.5c0,3.2,1.2,6.4,3.7,8.8
	c2.4,2.4,5.6,3.7,8.8,3.7c3.2,0,6.4-1.2,8.8-3.7c2.4-2.4,3.7-5.6,3.7-8.8C25,9.3,23.8,6.1,21.3,3.7z M20.5,20.4
	c-2.2,2.2-5.1,3.3-7.9,3.3c-2.9,0-5.7-1.1-7.9-3.3c-2.2-2.2-3.3-5.1-3.3-7.9s1.1-5.7,3.3-7.9c2.2-2.2,5.1-3.3,7.9-3.3
	c2.9,0,5.7,1.1,7.9,3.3c2.2,2.2,3.3,5.1,3.3,7.9S22.7,18.3,20.5,20.4z"
                />
              </svg>
            </div>
            <span id="spanVideo" />
          </kinesis-element>
        </b-container>
      </kinesis-container>
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
      dashboarddata: [
        {
          id: 0,
          detail:
            'Desarrollado en Google Data Studio,  100% Online y customizable. ',
        },
        {
          id: 1,
          detail:
            'Nuestro HUB compartido para mejorar la colaboración entre los equipos.',
        },
      ],
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        centerMode: true,
        centerPadding: '150px',
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerPadding: '0px',
            },
          },
        ],
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
    const button = document.getElementById('buttonVideo')
    const span = document.getElementById('spanVideo')

    this.$refs.buttonVideo.$el.addEventListener('mouseenter', (e) => {
      const relX = e.pageX - button.offsetLeft
      const relY = e.pageY - button.offsetTop
      span.style.top = `${relY}px`
      span.style.left = `${relX}px`
    })
    this.$refs.buttonVideo.$el.addEventListener('mouseout', (e) => {
      const relX = e.pageX - button.offsetLeft
      const relY = e.pageY - button.offsetTop
      span.style = { top: relY, left: relX }
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
    .button {
      position: relative;
      display: block;
      border-color: white;
      background-color: transparent;
      border-radius: 6rem;
      padding: 1rem;
      width: 11rem;
      overflow: hidden;
      .order-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      p {
        color: white;
        margin-bottom: 0;
        margin-right: 2rem;
      }
      .icon {
        width: 2rem;
        height: 2rem;
        fill: white;
      }
      span {
        display: block;
        position: absolute;
        border-radius: 50%;
        background-color: white;
        transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 0;
        height: 0;
      }
      &:hover {
        p {
          color: #95d6ea;
        }
        .icon {
          fill: #95d6ea;
        }
        span {
          width: 11rem * 4;
          height: 11rem * 2.25;
        }
      }
    }
    .arrow-animation {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      img:first-child {
        margin-right: 7rem;
      }
    }
    @media (min-width: 1440px) {
      .button {
        border-radius: 6rem;
        padding: 1rem;
        width: 14rem;
        p {
          font-size: 1.5rem;
          margin-right: 3rem;
        }
      }
    }

    @media (min-width: 1024px) {
      .hand-container {
        display: none;
      }
    }
    @media (max-width: 1024px) {
      .arrow-animation {
        display: none;
      }
    }
    .carusel-vue-slick {
      cursor: grab;
    }
  }
  @media (min-width: 1440px) {
    .dashboard-container {
      padding: 4rem 0;
    }
  }
}
</style>

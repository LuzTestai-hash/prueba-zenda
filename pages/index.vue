<template>
  <div>
    <div>
      <div
        :style="cursorCircle"
        :class="
          cursor === 'pointer'
            ? 'g-cursor__pointer'
            : 'g-cursor__carouselCursor'
        "
      >
        <svg class="arrow-left">
          <svg id="arrow-left-small" viewBox="0 0 7.9 14">
            <polygon
              class="st0"
              points="7.9,1 6.8,0 0.5,6.5 0,7 6.8,14 7.9,13 2.1,7 "
            ></polygon>
          </svg>
        </svg>
        <svg class="arrow-right">
          <svg id="arrow-right-small" viewBox="0 0 7.9 14">
            <polygon
              class="st0"
              points="0,13 1.1,14 7.4,7.6 7.9,7 1.1,0 0,1 5.8,7 "
            ></polygon>
          </svg>
        </svg>
      </div>
    </div>
    <Header />
    <NavBottom />
    <Welcome />
    <WeZenda v-view="viewHandler" />
    <div :class="`grafic-zenda ${graphic}`" />
    <WhatWeDo v-view="viewHandler" />
    <Methodology v-view="viewHandler" />
    <TrustUs />
    <Clients v-view="viewHandler" />
    <ToolsAndMedia v-view="viewHandler" />
    <Dashboard v-view="viewHandler" />
    <Contact v-view="viewHandler" />
    <div
      v-scroll-to="{
        element: '#contact',
        duration: 3000,
        onStart: onStart,
      }"
      class="float-button"
    >
      <kinesis-container>
        <kinesis-element
          id="contactButton"
          ref="contactButton"
          tag="b-button"
          :strength="10"
          class="buttonContact"
        >
          <p>Comenzá</p>
          <span id="spanContacto" />
        </kinesis-element>
      </kinesis-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      xParent: 0,
      yParent: 0,
      cursor: 'pointer',
      graphic: 'first',
      activeViewHandler: true,
    }
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`
    },
  },
  created() {
    this.$nuxt.$on('mouse', (data) => {
      this.cursor = data
    })
    this.$nuxt.$on('graphic', (data) => {
      this.graphic = data
    })
    this.$nuxt.$on('viewHandler', (data) => {
      this.activeViewHandler = data
    })
  },
  mounted() {
    document.addEventListener('mousemove', this.moveCursor)

    const button = document.getElementById('contactButton')
    const span = document.getElementById('spanContacto')

    this.$refs.contactButton.$el.addEventListener('mouseenter', (e) => {
      const relX = e.pageX - button.offsetLeft
      const relY = e.pageY - button.offsetTop
      span.style.top = `${relY}px`
      span.style.left = `${relX}px`
    })
    this.$refs.contactButton.$el.addEventListener('mouseout', (e) => {
      const relX = e.pageX - button.offsetLeft
      const relY = e.pageY - button.offsetTop
      span.style = { top: relY, left: relX }
    })
  },
  methods: {
    viewHandler(e) {
      console.log(e.target.element.id, e.percentCenter, e.type)
      if (
        this.activeViewHandler &&
        e.percentCenter >= 0.45 &&
        e.percentCenter <= 0.7
      ) {
        this.$nuxt.$emit('changeNav', e.target.element)
      }
    },

    moveCursor(e) {
      if (this.cursor === 'pointer') {
        this.xParent = e.clientX - 12
        this.yParent = e.clientY - 12
      } else {
        this.xParent = e.clientX - 33
        this.yParent = e.clientY - 33
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.float-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 50;
  .buttonContact {
    position: relative;
    display: block;
    border-color: $primary;
    background-color: transparent;
    border-radius: 100%;
    padding: 1rem;
    width: 7rem;
    height: 7rem;
    overflow: hidden;
    .order-button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    p {
      color: $primary;
      margin-bottom: 0;
    }
    span {
      display: block;
      position: absolute;
      border-radius: 50%;
      background-color: $primary;
      transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
      transform: translate(-50%, -50%);
      z-index: -1;
      width: 0;
      height: 0;
    }
    &:hover {
      p {
        color: white;
      }
      span {
        width: 11rem * 4;
        height: 11rem * 2.25;
      }
    }
  }
}
.g-cursor {
  &__pointer {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 1.5rem;
    height: 1.5rem;
    background: $primary;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: transform 0.1s ease;
    .arrow-left {
      display: none;
    }
    .arrow-right {
      display: none;
    }
  }
  &__carouselCursor {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 4rem;
    height: 4rem;
    border: 1px solid white;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: transform 0.1s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    .arrow-left {
      width: 1rem;
      height: 1rem;
      fill: #fff;
      animation: arrow-left-move 2s ease-out infinite;
    }
    .arrow-right {
      width: 1rem;
      height: 1rem;
      fill: #fff;
      animation: arrow-right-move 2s ease-out infinite;
    }
    @keyframes arrow-left-move {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-0.5em);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes arrow-right-move {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(0.5em);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
}
.grafic-zenda {
  position: absolute;
  z-index: 5;
  right: 0;
  width: 28rem;
  height: 40rem;
  //transform: translateY(-10rem);
  background-repeat: no-repeat;
  //transition: all 0.1s ease-out;
  &.first {
    background-image: url(../assets/icons/zenda-grafico1.svg);
    transform: translate(0, -10rem);
  }
  &.second {
    background-image: url(../assets/icons/zenda-grafico2.svg);
    transform: translate(0, -10rem);
  }
  &.third {
    background-image: url(../assets/icons/zenda-grafico3.svg);
    transform: translate(5.2rem, -5rem);
  }
}
@media (max-width: 767px) {
  .grafic-zenda {
    display: none;
  }
}
@media (max-width: 600px) {
  .g-cursor {
    display: none;
    &__pointer {
      display: none;
    }
  }
}
</style>

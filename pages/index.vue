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
    <div class="grafic-zenda" />
    <WhatWeDo v-view="viewHandler" />
    <Methodology v-view="viewHandler" />
    <TrustUs />
    <Clients v-view="viewHandler" />
    <ToolsAndMedia v-view="viewHandler" />
    <Dashboard v-view="viewHandler" />
    <Contact v-view="viewHandler" />
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

    this.$nuxt.$on('viewHandler', (data) => {
      this.activeViewHandler = data
    })
  },
  mounted() {
    document.addEventListener('mousemove', this.moveCursor)
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
  transform: translateY(-10rem);
  background-image: url(../assets/icons/zenda-grafico.svg);
  background-repeat: no-repeat;
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

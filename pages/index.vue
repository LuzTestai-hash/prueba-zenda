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
    <WeZenda
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <WhatWeDo
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <AgileProcess />
    <Methodology
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <TrustUs />
    <Clients
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <ToolsAndMedia
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <!-- <Dashboard
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    /> -->
    <Contact
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
})

export default {
  name: 'Index',
  components: {},
  data() {
    return {
      xParent: 0,
      yParent: 0,
      cursor: 'pointer',
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
  },
  mounted() {
    document.addEventListener('mousemove', this.moveCursor)
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.$nuxt.$emit('changeNav', entry.target)
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
@media (max-width: 600px) {
  .g-cursor {
    display: none;
    &__pointer {
      display: none;
    }
  }
}
</style>

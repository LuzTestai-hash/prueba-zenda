<template>
  <div v-rellax="rellax">
    <div class="circle-container">
      <div :class="`circle green ${graphic === 'first' ? 'first' : ''}`">
        <p v-if="graphic === 'first'" class="porcent">45%</p>
      </div>
      <div :class="`circle pink ${graphic === 'third' ? 'third' : ''}`">
        <p v-if="graphic === 'third'" class="porcent">20%</p>
      </div>
      <div :class="`circle blue ${graphic === 'second' ? 'second' : ''}`">
        <p v-if="graphic === 'second'" class="porcent">35%</p>
      </div>
      <div class="middle">
        <img src="../assets/icons/zenda.png" alt="zendaLogo" class="logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Graphic',
  props: {
    graphic: { type: String, default: null },
  },
  data() {
    return {
      rellax: {
        speed: -1.5,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
$width: 500px;
.circle-container {
  position: absolute;
  z-index: 5;
  right: 0;
  width: 28rem;
  height: 40rem;
  .circle {
    width: ($width / 2);
    height: $width;
    background: transparent;
    -moz-border-radius: $width 0 0 $width;
    -webkit-border-radius: $width 0 0 $width;
    border-radius: $width 0 0 $width;

    &.green {
      border-top: ($width / 6) solid $primary;
      border-left: ($width / 6) solid $primary;
      border-bottom: ($width / 6) solid $primary;
      transform: translate(15rem, -12.5rem) rotate(100deg);
      z-index: 1;
      transition: border-top 1s, border-left 1s, border-bottom 1s;
      &.first {
        border-top: ($width / 5) solid $primary;
        border-left: ($width / 5) solid $primary;
        border-bottom: ($width / 5) solid $primary;
        .porcent {
          color: white;
          font-weight: 700;
          font-size: 2.5rem;
          transform: translate(-5rem, 16.5rem) rotate(-150deg);
        }
      }
    }
    &.pink {
      border-top: ($width / 6) solid $secondary;
      border-left: ($width / 6) solid $secondary;
      border-bottom: ($width / 6) solid $secondary;
      z-index: 2;
      transform: translate(11.5rem, -28rem) rotate(-75deg);
      transition: border-top 1s, border-left 1s, border-bottom 1s;
      &.third {
        border-top: ($width / 5) solid $secondary;
        border-left: ($width / 5) solid $secondary;
        border-bottom: ($width / 5) solid $secondary;
        .porcent {
          color: white;
          font-weight: 700;
          font-size: 2.5rem;
          transform: translate(3rem, -6rem) rotate(-22deg);
        }
      }
    }
    &.blue {
      border-top: ($width / 5.9) solid $third;
      border-left: ($width / 5.9) solid $third;
      border-bottom: ($width / 5.9) solid $third;
      transform: translate(16rem, -59.3rem) rotate(-108.5deg);
      z-index: 3;
      transition: border-top 1s, border-left 1s, border-bottom 1s;
      background: white;
      &.second {
        border-top: ($width / 5) solid $third;
        border-left: ($width / 5) solid $third;
        border-bottom: ($width / 5) solid $third;
        .porcent {
          color: white;
          font-weight: 700;
          font-size: 2.5rem;
          transform: translate(-7.5rem, 6rem) rotate(110deg);
        }
      }
    }
  }
  .middle {
    width: 173px;
    height: 173px;
    border-radius: 100%;
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transform: translate(16rem, -88rem);
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      width: 50px;
      height: auto;
    }
  }
}

@media (max-width: 767px) {
  .circle-container {
    display: none;
  }
}
</style>

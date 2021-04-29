<template>
  <div
    v-scroll-to="{
      element: '#contact',
      duration: 3000,
    }"
    class="float-button"
  >
    <kinesis-container tag="div">
      <kinesis-element
        id="contactButton"
        ref="contactButton"
        tag="b-button"
        :strength="10"
        class="buttonContact"
      >
        <p>contacto</p>
        <span id="spanContacto" />
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.float-button {
  position: fixed;
  bottom: 0.8rem;
  right: 1rem;
  z-index: 50;
  .buttonContact {
    position: relative;
    display: block;
    border-color: $primary;
    background-color: transparent;
    border-radius: 100%;
    //padding: 1rem;
    width: 6rem;
    height: 6rem;
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
      font-weight: 700;
      font-size: 1.12rem;
      letter-spacing: -0.04rem;
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
@media (max-width: 600px) {
  .float-button {
    display: none;
  }
}
</style>

<template>
  <div class="switch-button">
    <span class="active"></span>
    <NuxtLink
      :to="switchLocalePath('es')"
      class="switch-button-case left active-case"
    >
      ES
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('en')" class="switch-button-case right">
      EN
    </NuxtLink>
  </div>
</template>

<script>
export default {
  mounted() {
    // const switchButton = document.querySelector('.switch-button')
    const switchBtnRight = document.querySelector('.switch-button-case.right')
    const switchBtnLeft = document.querySelector('.switch-button-case.left')
    const activeSwitch = document.querySelector('.active')

    function switchLeft() {
      switchBtnRight.classList.remove('active-case')
      switchBtnLeft.classList.add('active-case')
      activeSwitch.style.left = '0%'
    }

    function switchRight() {
      switchBtnRight.classList.add('active-case')
      switchBtnLeft.classList.remove('active-case')
      activeSwitch.style.left = '50%'
    }

    const locale = this.$i18n.getLocaleCookie()

    if (locale === 'es') {
      switchLeft()
    } else {
      switchRight()
    }

    switchBtnLeft.addEventListener(
      'click',
      function () {
        switchLeft()
      },
      false
    )

    switchBtnRight.addEventListener(
      'click',
      function () {
        switchRight()
      },
      false
    )
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.switch-button {
  position: absolute;
  right: 0;
  top: 3rem;
  width: 175px;
  height: 42px;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
  z-index: 197 !important;
  cursor: pointer;
  transition: 0.3s ease all;
  border: 1px solid $primary;
  border-radius: 5rem;
  display: flex;
  flex-direction: row;
  &-case {
    display: inline-block;
    background: none;
    width: 49%;
    height: 100%;
    color: $primary;
    position: relative;
    border: none;
    transition: 0.3s ease all;
    text-align: center;
    padding-top: 0.7rem;
    border-radius: 5rem;
    font-size: 12px;
    text-decoration: initial;
    &:hover {
      color: #59d7a2a2;
      cursor: pointer;
      text-decoration: initial;
    }
    &:focus {
      outline: none;
      text-decoration: initial;
    }
  }
  .active {
    color: white;
    background-color: $primary;
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: -1;
    transition: 0.3s ease-out all;
    border-radius: 5rem;
    &-case {
      color: white;
    }
  }
}
@media (max-width: 660px) {
  .switch-button {
    left: 7rem;
    top: 3rem;
  }
}
</style>

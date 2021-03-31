<template>
  <div class="header-container">
    <div class="section-bottom-container">
      <div
        v-scroll-to="{
          element: '#we-zenda',
          duration: 3000,
        }"
        class="section"
        :class="{
          active: seccionSelected === 'we-zenda',
        }"
      >
        Somos Zenda
      </div>
      <div
        v-scroll-to="{
          element: '#what-we-do',
          duration: 3000,
        }"
        class="section"
        :class="{
          active: seccionSelected === 'what-we-do',
        }"
      >
        Qué hacemos
      </div>
      <div
        v-scroll-to="{
          element: '#methodology',
          duration: 3000,
        }"
        class="section"
        :class="{
          active: seccionSelected === 'methodology',
        }"
      >
        Metodología
      </div>
      <div
        v-scroll-to="{ element: '#clients', duration: 3000 }"
        class="section"
        :class="{
          active: seccionSelected === 'clients',
        }"
      >
        Clientes
      </div>
      <div
        v-scroll-to="{
          element: '#dashboard',
          duration: 3000,
        }"
        class="section"
        :class="{
          active:
            seccionSelected === 'dashboard' ||
            seccionSelected === 'dashboard-tools',
        }"
      >
        Panel de Control
      </div>
      <div
        v-scroll-to="{ element: '#contact', duration: 3000 }"
        class="section"
        :class="{
          active: seccionSelected === 'contact',
        }"
      >
        Contacto
      </div>
      <div class="menu__border"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seccionSelected: 'we-zenda',
    }
  },
  mounted() {
    const body = document.body
    const menu = body.querySelector('.section-bottom-container')
    const menuItems = menu.querySelectorAll('.section')
    const menuBorder = menu.querySelector('.menu__border')
    let activeItem = menu.querySelector('.active')

    function clickItem(item) {
      menu.style.removeProperty('--timeOut')

      if (activeItem === item) return

      if (activeItem) {
        activeItem.classList.remove('active')
      }

      item.classList.add('active')
      activeItem = item
      offsetMenuBorder(activeItem, menuBorder)
    }

    function offsetMenuBorder(element, menuBorder) {
      menuBorder.style.width = '0px'
      const offsetActiveItem = element.getBoundingClientRect()
      const left = Math.floor(offsetActiveItem.left - menu.offsetLeft) + 'px'
      menuBorder.style.transform = `translate3d(${left}, 0 , 0)`
      menuBorder.style.width = offsetActiveItem.width + 'px'
    }

    offsetMenuBorder(activeItem, menuBorder)

    menuItems.forEach((item, index) => {
      item.addEventListener('click', () => clickItem(item))
    })

    this.$nuxt.$on('changeNav', (data) => {
      this.seccionSelected = data.id
      setTimeout(function () {
        const activeItem = menu.querySelector('.active')
        offsetMenuBorder(activeItem, menuBorder)
      }, 500)
    })
  },
}
</script>
<style lang="scss" scoped>
.header-container {
  .menu__border {
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    height: 75%;
    position: absolute;
    will-change: transform;
    background-color: #0a0a0b;
    transition: 1s;
    border-radius: 0.8rem;
    margin-top: 0.5rem;
  }
  .section-bottom-container {
    width: 65%;
    z-index: 10;
    opacity: 1;
    position: fixed;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    margin-left: 4rem;
    padding: 1rem;
    background-color: #f0f0f0;
    border-radius: 10px;
    margin-bottom: 1rem;
    min-height: 4.5rem;
    .section {
      margin: 3rem;
      padding: 0.6rem 1rem;
      all: unset;
      flex-grow: 1;
      z-index: 100;
      display: flex;
      cursor: pointer;
      position: relative;
      border-radius: 50%;
      align-items: center;
      will-change: transform;
      justify-content: center;
    }
    .active {
      color: #fff;
    }
  }
  @media (max-width: 660px) {
    .section-bottom-container {
      display: none;
    }
  }
}
</style>

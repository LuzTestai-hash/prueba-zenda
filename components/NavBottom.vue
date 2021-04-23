<template>
  <div class="header-container">
    <div id="nav-menu-container" class="section-bottom-container">
      <div
        id="nav-item-we-zenda"
        class="section"
        :class="{
          active: seccionSelected === 'we-zenda',
        }"
        @click="handleItem('we-zenda')"
      >
        Somos Zenda
      </div>
      <div
        id="nav-item-what-we-do"
        class="section"
        :class="{
          active: seccionSelected === 'what-we-do',
        }"
        @click="handleItem('what-we-do')"
      >
        Qué hacemos
      </div>
      <div
        id="nav-item-methodology"
        class="section"
        :class="{
          active: seccionSelected === 'methodology',
        }"
        @click="handleItem('methodology')"
      >
        Cómo lo hacemos
      </div>
      <div
        id="nav-item-clients"
        class="section"
        :class="{
          active: seccionSelected === 'clients',
        }"
        @click="handleItem('clients')"
      >
        Qué logramos
      </div>
      <div
        id="nav-item-dashboard-tools"
        class="section"
        :class="{
          active:
            seccionSelected === 'dashboard-tools' ||
            seccionSelected === 'dashboard',
        }"
        @click="handleItem('dashboard-tools')"
      >
        Cómo lo logramos
      </div>
      <div
        id="nav-item-contact"
        class="section"
        :class="{
          active: seccionSelected === 'contact',
        }"
        @click="handleItem('contact')"
      >
        Comencemos
      </div>
      <div id="nav-menu-border" class="menu__border"></div>
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
    this.offsetMenuBorder()

    this.$nuxt.$on('changeNav', (data) => {
      this.seccionSelected = data.id
      this.offsetMenuBorder()
    })
  },
  methods: {
    offsetMenuBorder() {
      const menu = document.getElementById('nav-menu-container')
      const menuBorder = document.getElementById('nav-menu-border')
      const activeItem = document.getElementById(
        `nav-item-${
          this.seccionSelected === 'dashboard'
            ? 'dashboard-tools'
            : this.seccionSelected
        }`
      )
      const offsetActiveItem = activeItem.getBoundingClientRect()
      const left = Math.floor(offsetActiveItem.left - menu.offsetLeft) + 'px'
      menuBorder.style.width = '0px'
      menuBorder.style.transform = `translate3d(${left}, 0 , 0)`
      menuBorder.style.width = offsetActiveItem.width + 'px'
    },

    handleItem(name) {
      if (name === this.seccionSelected) return
      this.$nuxt.$emit('viewHandler', false)
      this.seccionSelected = name
      this.$scrollTo(`#${name}`, 2000, {
        container: 'body',
        easing: 'ease',
        force: true,
        cancelable: true,
        onStart(element) {},
        onDone: (element) => {
          this.$nuxt.$emit('viewHandler', true)
        },
        onCancel: () => {
          this.$nuxt.$emit('viewHandler', true)
        },
        x: false,
        y: true,
      })
      this.offsetMenuBorder()
    },
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

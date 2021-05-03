<template>
  <div class="header-container">
    <div id="nav-menu-container" class="section-bottom-container">
      <div
        id="nav-item-welcome"
        class="section"
        :class="{
          active: selectedSection === 'welcome',
        }"
        @click="handleItem('welcome')"
      >
        <b-icon icon="house" />
      </div>
      <div
        id="nav-item-we-zenda"
        class="section"
        :class="{
          active: selectedSection === 'we-zenda',
        }"
        @click="handleItem('we-zenda')"
      >
        {{ $t('nav.about') }}
      </div>
      <div
        id="nav-item-what-we-do"
        class="section"
        :class="{
          active: selectedSection === 'what-we-do',
        }"
        @click="handleItem('what-we-do')"
      >
        {{ $t('nav.what') }}
      </div>
      <div
        id="nav-item-methodology"
        class="section"
        :class="{
          active: selectedSection === 'methodology',
        }"
        @click="handleItem('methodology')"
      >
        {{ $t('nav.how') }}
      </div>
      <div
        id="nav-item-clients"
        class="section"
        :class="{
          active: selectedSection === 'clients',
        }"
        @click="handleItem('clients')"
      >
        {{ $t('nav.portfolio') }}
      </div>
      <div
        id="nav-item-dashboard-tools"
        class="section"
        :class="{
          active:
            selectedSection === 'dashboard-tools' ||
            selectedSection === 'dashboard',
        }"
        @click="handleItem('dashboard-tools')"
      >
        {{ $t('nav.howDid') }}
      </div>
      <div
        v-show="selectedSection !== 'contact'"
        id="nav-menu-border"
        class="menu__border"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedSection: 'welcome',
    }
  },
  mounted() {
    this.offsetMenuBorder()

    this.$nuxt.$on('changeNav', (data) => {
      this.selectedSection = data.id
      this.offsetMenuBorder()
    })
  },
  methods: {
    offsetMenuBorder() {
      if (this.selectedSection !== 'contact') {
        const menu = document.getElementById('nav-menu-container')
        const menuBorder = document.getElementById('nav-menu-border')
        const activeItem = document.getElementById(
          `nav-item-${
            this.selectedSection === 'dashboard'
              ? 'dashboard-tools'
              : this.selectedSection
          }`
        )
        const offsetActiveItem = activeItem.getBoundingClientRect()
        const left = Math.floor(offsetActiveItem.left - menu.offsetLeft) + 'px'
        menuBorder.style.width = '0px'
        menuBorder.style.transform = `translate3d(${left}, 0 , 0)`
        menuBorder.style.width = offsetActiveItem.width + 'px'
      }
    },

    handleItem(name) {
      if (name === this.selectedSection) return
      this.$nuxt.$emit('viewHandler', false)
      this.selectedSection = name
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
    margin-left: 10rem;
    padding: 1rem;
    background-color: #f0f0f0;
    border-radius: 10px;
    margin-bottom: 1.6rem;
    min-height: 4rem;
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

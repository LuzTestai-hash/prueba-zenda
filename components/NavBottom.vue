<template>
  <div class="header-container">
    <div class="section-bottom-container">
      <p
        v-scroll-to="{
          element: '#we-zenda',
          duration: 3000,
          onStart: onStart,
        }"
        class="section"
        :class="{
          active: seccionSelected === 'we-zenda',
        }"
      >
        Somos Zenda
      </p>
      <p
        v-scroll-to="{
          element: '#what-we-do',
          duration: 3000,
          onStart: onStart,
        }"
        class="section"
        :class="{
          active: seccionSelected === 'what-we-do',
        }"
      >
        Qué hacemos
      </p>
      <p
        v-scroll-to="{
          element: '#methodology',
          duration: 3000,
          onStart: onStart,
        }"
        class="section"
        :class="{
          active: seccionSelected === 'methodology',
        }"
      >
        Metodología
      </p>
      <p
        v-scroll-to="{ element: '#clients', duration: 3000, onStart: onStart }"
        class="section"
        :class="{
          active: seccionSelected === 'clients',
        }"
      >
        Clientes
      </p>
      <p
        v-scroll-to="{
          element: '#dashboard',
          duration: 3000,
          onStart: onStart,
        }"
        class="section"
        :class="{
          active:
            seccionSelected === 'dashboard' ||
            seccionSelected === 'dashboard-tools',
        }"
      >
        Panel de Control
      </p>
      <p
        v-scroll-to="{ element: '#contact', duration: 3000, onStart: onStart }"
        class="section"
        :class="{
          active: seccionSelected === 'contact',
        }"
      >
        Contacto
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seccionSelected: '',
    }
  },
  created() {
    this.$nuxt.$on('changeNav', (data) => {
      this.seccionSelected = data
    })
  },
  methods: {
    onStart(info) {
      this.seccionSelected = info.id
    },
  },
}
</script>
<style lang="scss" scoped>
.header-container {
  .section-bottom-container {
    z-index: 1;
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
    height: 10vh;
    margin-bottom: 1rem;
    transform: translateZ(0);
    transition: transform 1s cubic-bezier(0.4, 0, 0, 1),
      opacity 1s cubic-bezier(0.4, 0, 0, 1);
    .section {
      margin-bottom: 0.5rem !important;
      margin-top: 0.5rem !important;
      padding: 0.6rem 1rem;
      cursor: pointer;
      border-radius: 8px;
      transition: all 2s cubic-bezier(0.4, 0, 0, 1);
    }
    .active {
      background: #0a0a0b;
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

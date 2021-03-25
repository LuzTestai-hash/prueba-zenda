<template>
  <div class="header-container">
    <nav>
      <b-container class="client-container">
        <a href="/">
          <img src="../assets/icons/Zenda-Logo.svg" width="70" height="70" />
        </a>
      </b-container>
      <!-- <ul class="">
        <li>Somos Zenda</li>
        <li>Qué hacemos</li>
        <li>Qué hacemos</li>
        <li>Clientes</li>
        <li>Casos de éxito</li>
        <li>Metodología</li>
        <li>Herramientas y medios</li>
        <li>Servicio</li>
        <li>Contacto</li>
      </ul> -->
    </nav>
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
        {{ isVisible }}
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
          active: seccionSelected === 'dashboard',
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
  mounted() {
    // we zenda
    const weZenda = document.querySelector('#we-zenda')
    const topWeZenda = weZenda.getBoundingClientRect().top
    // what we do
    const WhatWeDo = document.querySelector('#what-we-do')
    const topWhatWeDo = WhatWeDo.getBoundingClientRect().top
    // methodology
    const methodology = document.querySelector('#methodology')
    const topMethodology = methodology.getBoundingClientRect().top
    // clients
    const clients = document.querySelector('#clients')
    const topClients = clients.getBoundingClientRect().top
    // dashboard
    const dashboard = document.querySelector('#dashboard')
    const topDashboard = dashboard.getBoundingClientRect().top
    // contact
    const contact = document.querySelector('#contact')
    const topContact = contact.getBoundingClientRect().top

    document.addEventListener('scroll', () => {
      if (window.scrollY === topWeZenda) {
        this.seccionSelected = 'we-zenda'
      }
      if (window.scrollY === topWhatWeDo) {
        this.seccionSelected = 'what-we-do'
      }
      if (window.scrollY === topMethodology) {
        this.seccionSelected = 'methodology'
      }
      if (window.scrollY === topClients) {
        this.seccionSelected = 'clients'
      }
      if (window.scrollY === topDashboard) {
        this.seccionSelected = 'dashboard'
      }
      if (window.scrollY === topContact) {
        this.seccionSelected = 'contact'
      }

      // switch (window.scrollY) {
      //   case topWeZenda:
      //     this.seccionSelected = 'we-zenda'
      //     break
      //   case topWhatWeDo:
      //     this.seccionSelected = 'what-we-do'
      //     break
      //   case topMethodology:
      //     this.seccionSelected = 'methodology'
      //     break
      //   case topClients:
      //     this.seccionSelected = 'clients'
      //     break
      //   case topDashboard:
      //     this.seccionSelected = 'dashboard'
      //     break
      //   case topContact:
      //     this.seccionSelected = 'contact'
      //     break
      //   default:
      //     return this.seccionSelected
      // }
      console.log(this.seccionSelected)
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
    .section {
      margin-bottom: 0.5rem !important;
      margin-top: 0.5rem !important;
      padding: 0.6rem 1rem;
      cursor: pointer;
    }
    .active {
      background: #0a0a0b;
      border-radius: 8px;
      color: #fff;
    }
  }
}
</style>

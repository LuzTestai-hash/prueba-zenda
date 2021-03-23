<template>
  <div class="hearder-container">
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
      <p v-scroll-to="'#we-zenda'" class="section">Somos Zenda</p>
      <p v-scroll-to="'#what-we-do'" class="section">Qué hacemos</p>
      <p v-scroll-to="'#clients'" class="section">Clientes</p>
      <p v-scroll-to="'#we-zenda'" class="section">Casos de éxito</p>
      <p v-scroll-to="'#agile-process'" class="section">Metodología</p>
      <p v-scroll-to="'#dashboard'" class="section">Herramientas y medios</p>
      <p v-scroll-to="'#we-zenda'" class="section">Servicio</p>
      <p v-scroll-to="'#contact'" class="section">Contacto</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
})

export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss" scoped>
.hearder-container {
  .section-bottom-container {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    bottom: 0;
    left: 0;
    margin-left: 4rem;
    padding: 1rem;
    .section {
      cursor: pointer;
      padding: 1rem;
    }
  }
}
</style>

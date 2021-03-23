<template>
  <div class="hearder-container">
    <nav>
      <b-container class="client-container">
        <a href="/">
          <img src="../assets/icons/zenda-logo.svg" width="70" height="70" />
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
      <p v-scroll-to="{ element: '#we-zenda', duration: 3000 }" class="section">
        Somos Zenda
      </p>
      <p
        v-scroll-to="{ element: '#what-we-do', duration: 3000 }"
        class="section"
      >
        Qué hacemos
      </p>
      <p v-scroll-to="{ element: '#clients', duration: 3000 }" class="section">
        Clientes
      </p>
      <p v-scroll-to="{ element: '#we-zenda', duration: 3000 }" class="section">
        Casos de éxito
      </p>
      <p
        v-scroll-to="{ element: '#agile-process', duration: 3000 }"
        class="section"
      >
        Metodología
      </p>
      <p
        v-scroll-to="{ element: '#dashboard', duration: 3000 }"
        class="section"
      >
        Herramientas y medios
      </p>
      <p v-scroll-to="{ element: '#we-zenda', duration: 3000 }" class="section">
        Servicio
      </p>
      <p v-scroll-to="{ element: '#contact', duration: 3000 }" class="section">
        Contacto
      </p>
    </div>
  </div>
</template>

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

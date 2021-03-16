<template>
  <div>
    <b-container fluid class="container welcome">
      <h1>Lideramos</h1>
      <h1>Proyectos digitales.</h1>
    </b-container>
    <b-container fluid class="container">
      <WeZenda />
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  &.welcome {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>

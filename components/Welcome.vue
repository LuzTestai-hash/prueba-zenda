<template>
  <div class="welcome-background">
    <b-container fluid class="welcome-container">
      <h1 class="title">Lideramos</h1>
      <h1>proyectos digitales.</h1>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.welcome-background {
  background-color: $background-white;
}
.welcome-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 45px;
    line-height: 50.71px;
    text-align: center;
    letter-spacing: -0.02em;
    color: $typography;
  }
  .title {
    text-decoration: underline;
    margin-bottom: 0;
  }
}
</style>

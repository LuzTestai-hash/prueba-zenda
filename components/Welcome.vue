<template>
  <div class="welcome-background">
    <b-container class="welcome-container">
      <p class="title">Lideramos</p>
      <p>proyectos digitales.</p>
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
  width: 100%;
  margin: 0 auto;
  min-height: 101vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 3rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: $typography;
  }
  .title {
    text-decoration: underline;
    margin-bottom: 0;
  }
}
@media (min-width: 600px) {
  .welcome-background {
    background-image: url(../assets/icons/zenda-hero.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 98%;
    .welcome-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
      p {
        font-size: 3.1rem;
        line-height: 3.4rem;
      }
      .title {
        text-decoration: initial;
      }
    }
  }
}
@media (min-width: 1440px) {
  .welcome-background {
    .welcome-container {
      p {
        font-size: 4rem;
        line-height: 4rem;
      }
    }
  }
}
</style>

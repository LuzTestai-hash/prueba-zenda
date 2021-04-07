<template>
  <div class="welcome-background">
    <div id="cursor" class="cursor" />
    <b-container class="welcome-container">
      <div class="container-title">
        <p class="title">Lideramos</p>
        <p>proyectos digitales.</p>
      </div>
      <div class="d-block d-md-none mt-5">
        <img
          src="../assets/icons/zenda-mobile-hero.svg"
          alt="logo"
          class="hero"
        />
      </div>
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
  position: relative;
}

.welcome-container {
  padding: 0.1rem !important;
  width: 100%;
  margin: 0 auto;
  min-height: 101vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .hero {
    width: 5rem;
  }
  .container-title {
    p {
      font-weight: bold;
      font-size: 2.6rem;
      line-height: 3rem;
      text-align: flex-start;
      letter-spacing: -0.02em;
      color: $typography;
    }
    .title {
      text-decoration: underline;
      margin-bottom: 0;
    }
  }
}
@media (min-width: 600px) {
  .welcome-background {
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-image: url(../assets/icons/zenda-hero.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 98%;
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

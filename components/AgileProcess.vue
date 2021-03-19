<template>
  <div class="agile-background">
    <b-container class="agile-container">
      <p class="subtitle">PROCESO ÁGIL</p>
      <p class="title">Filosofía.</p>
      <div class="circles-container">
        <div class="circle secondary">
          <p class="circle-text">DATA.</p>
        </div>
        <div class="circle white">
          <p class="circle-text">ZENDA</p>
        </div>
        <div class="circle primary">
          <p class="circle-text">INNOVACIÓN.</p>
        </div>
        <div class="circle third">
          <p class="circle-text">
            PERFOR <br />
            MANCE.
          </p>
        </div>
      </div>
      <div class="text-container">
        <p class="text-detail">
          El aumento de la velocidad de aprendizaje y lectura de los datos
          obliga a adaptarse a metodologías veloces de accion y reaccion.
        </p>
        <p class="text-detail">
          Para trabajar con organizaciones modernas primero hay que pensar como
          una.
        </p>
        <p class="text-detail">
          Desafía el Pensamiento Crítico, clave en Growth Hacking.
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.agile-background {
  background-color: $background-white;
}
.agile-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 1.6rem;
  .subtitle {
    font-weight: 700;
    color: $typography;
    letter-spacing: 0.02rem;
    line-height: 1.2rem;
  }
  .title {
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 2.3rem;
    letter-spacing: -0.02em;
    color: $typography;
    margin-top: 1.2rem;
    margin-bottom: 3.3rem;
    padding-right: 5rem;
  }
  .circles-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .circle {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle-text {
        text-align: center;
        color: white;
        margin-bottom: 0;
      }
      &.secondary {
        background-color: $secondary;
      }
      &.primary {
        background-color: $primary;
      }
      &.third {
        background-color: $third;
      }
      &.white {
        .circle-text {
          color: black;
        }
      }
    }
  }
  .text-container {
    padding: 1rem 2rem;
    .text-detail {
      margin-top: 1.5rem;
      text-align: center;
      color: $subtitle;
      font-weight: 100;
    }
  }
}
</style>

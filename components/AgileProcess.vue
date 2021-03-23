<template>
  <div id="agile-process" class="agile-background">
    <b-container class="agile-container">
      <b-row>
        <b-col md="12">
          <p class="subtitle">PROCESO ÁGIL</p>
        </b-col>
        <b-col md="6">
          <p class="title-mobile">Filosofía.</p>
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
        </b-col>
        <b-col md="6">
          <div class="text-container">
            <p class="title">Filosofía.</p>
            <p class="text-detail">
              El aumento de la velocidad de aprendizaje y lectura de los datos
              obliga a adaptarse a metodologías veloces de accion y reaccion.
            </p>
            <p class="text-detail">
              Para trabajar con organizaciones modernas primero hay que pensar
              como una.
            </p>
            <p class="text-detail">
              Desafía el Pensamiento Crítico, clave en Growth Hacking.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.agile-background {
  background-color: #fafafa;
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
  .title-mobile {
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 2.3rem;
    letter-spacing: -0.02em;
    color: $typography;
    margin-top: 1.2rem;
    margin-bottom: 3.3rem;
    padding-right: 5rem;
  }
  @media (min-width: 600px) {
    .title-mobile {
      display: none;
    }
  }
  .circles-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 15rem;
    margin-top: 12rem;
    .circle {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle-text {
        text-align: center;
        color: white;
        margin-bottom: 0;
      }
      &.secondary {
        animation-name: secondary-circle;
        animation-duration: 4s;
        animation-fill-mode: forwards;
        transform: translate(-4rem, 3rem);
        background-color: $secondary;
        opacity: 0.9;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      }
      &.primary {
        animation-name: primary-circle;
        animation-duration: 4s;
        animation-fill-mode: forwards;
        transform: translate(0, -3.5rem);
        background-color: $primary;
        opacity: 0.9;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      }
      &.third {
        animation-name: third-circle;
        animation-duration: 4s;
        animation-fill-mode: forwards;
        transform: translate(3rem, 3rem);
        background: rgba(149, 214, 234, 0.9);
        opacity: 0.9;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      }
      &.white {
        .circle-text {
          animation-name: text-white-circle;
          animation-duration: 4s;
          animation-fill-mode: forwards;
          font-family: 'Recoleta Alt', serif;
          font-weight: 900;
          font-size: 1.3rem;
          transform: rotate(360deg);
          color: black;
          z-index: 10;
        }
      }
    }
    @keyframes secondary-circle {
      from {
        transform: translate(-4rem, 3rem);
      }
      to {
        transform: translate(-9rem, 0);
      }
    }
    @keyframes primary-circle {
      from {
        transform: translate(0, -3.5rem);
      }
      to {
        transform: translate(6rem, -6rem);
      }
    }
    @keyframes third-circle {
      from {
        transform: translate(3rem, 3rem);
      }
      to {
        transform: translate(3.5rem, 8rem);
      }
    }
    @keyframes text-white-circle {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(270deg);
      }
    }
  }
  .text-container {
    padding: 1rem 2rem;
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
    .text-detail {
      text-align: left;
      color: $subtitle;
      font-weight: 100;
    }
    @media (max-width: 600px) {
      .title {
        display: none;
      }
      .text-detail {
        text-align: center;
      }
    }
  }
}
</style>

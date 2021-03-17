<template>
  <div class="weZenda-background">
    <b-container class="weZenda-container">
      <p class="title">SOMOS <span class="special-title">ZENDA.</span></p>
      <p class="detail">
        Lideramos proyectos digitales implementando eficazmente estrategias y
        procesos de transformación para lograr objetivos medibles, alcanzables y
        relevantes (SMART) para los negocios de nuestros clientes.
      </p>
      <b-button v-b-toggle="'collapse-1'" class="button-colapse primary">
        <p class="text">Proactividad</p>
        <b-icon icon="chevron-down" class="icon"></b-icon>
      </b-button>
      <b-collapse id="collapse-1">
        <b-card class="collapse-content">Proactividad</b-card>
      </b-collapse>
      <b-button v-b-toggle="'collapse-2'" class="button-colapse secondary">
        <p class="text">Atención personalizada</p>
        <b-icon icon="chevron-down" class="icon"></b-icon>
      </b-button>
      <b-collapse id="collapse-2">
        <b-card class="collapse-content">I am collapsible content!</b-card>
      </b-collapse>
      <b-button v-b-toggle="'collapse-3'" class="button-colapse third">
        <p class="text">Transparencia y respeto :)</p>
        <b-icon icon="chevron-down" class="icon"></b-icon>
      </b-button>
      <b-collapse id="collapse-3">
        <b-card class="collapse-content">I am collapsible content!</b-card>
      </b-collapse>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.weZenda-background {
  background-color: $background-black;
}
.weZenda-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 4rem 1.6rem;
  .title {
    font-weight: 700;
  }
  .special-title {
    font-family: 'Recoleta Alt', serif;
  }
  .detail {
    font-weight: 100;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    font-size: 1.03rem;
    line-height: 1.9rem;
  }
  .button-colapse {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: initial;
    padding-left: initial;
    &:focus {
      border: initial;
      box-shadow: initial;
    }
    .text {
      font-size: 1.188rem;
      font-weight: 100;
    }
    .icon {
      width: 0.8rem;
    }
    &.primary {
      .text {
        color: $primary;
      }
      .icon {
        color: $primary;
      }
    }
    &.secondary {
      .text {
        color: $secondary;
      }
      .icon {
        color: $secondary;
      }
    }
    &.third {
      .text {
        color: $third;
      }
      .icon {
        color: $third;
      }
    }
  }
  .collapse-content {
    background-color: transparent;
  }
}
</style>

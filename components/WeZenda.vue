<template>
  <div id="we-zenda" class="weZenda-background">
    <b-container class="weZenda-container">
      <b-row>
        <b-col md="12">
          <p class="title">SOMOS <span class="special-title">ZENDA.</span></p>
        </b-col>
        <b-col md="6">
          <p class="detail">
            Lideramos proyectos digitales implementando eficazmente estrategias
            y procesos de transformación para lograr objetivos medibles,
            alcanzables y relevantes (SMART) para los negocios de nuestros
            clientes.
          </p>
        </b-col>
        <b-col md="6">
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
.weZenda-background {
  background-color: $background-black;
  .weZenda-container {
    min-height: 80vh;
    display: flex;
    align-items: center;
    color: white;
    padding: 4rem 1.6rem;
    .title {
      font-weight: 700;
      margin-bottom: 2rem;
    }
    .special-title {
      font-family: 'Recoleta Alt', serif;
      text-decoration: underline;
    }
    .detail {
      font-weight: 100;
      margin-bottom: 3rem;
      font-size: 1.03rem;
      line-height: 1.9rem;
    }
    @media (min-width: 600px) {
      .title {
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 1.3rem;
      }
      .special-title {
        font-weight: 700;
      }
      .detail {
        text-decoration: initial;
        padding-right: 2rem;
        font-size: 1.2rem;
      }
    }
    .button-colapse {
      width: 100%;
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
    @media (min-width: 600px) {
      .button-colapse {
        padding-left: 2rem;
        .text {
          font-size: 1.6rem;
          font-weight: 100;
        }
      }
    }
    .collapse-content {
      background-color: transparent;
    }
  }
}
</style>

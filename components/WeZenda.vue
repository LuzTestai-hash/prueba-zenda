<template>
  <div id="we-zenda" class="weZenda-background">
    <b-container class="weZenda-container">
      <b-row>
        <b-col md="12">
          <p class="title">SOMOS <span class="special-title">ZENDA.</span></p>
        </b-col>
        <b-col md="6">
          <div class="detail">
            <h2>{{ h2 }}</h2>
            <span>{{ detail }}</span>
          </div>
        </b-col>
        <b-col md="6">
          <div v-for="(item, index) in content" :key="index">
            <b-button
              v-b-toggle="`accordion-${item.id}`"
              :class="`button-colapse ${item.color}`"
            >
              <p class="text">{{ item.title }}</p>
              <b-icon icon="chevron-down" class="icon" alt="icon"></b-icon>
            </b-button>
            <b-collapse
              :id="`accordion-${item.id}`"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card class="collapse-content">
                {{ item.description }}
              </b-card>
            </b-collapse>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      h2: 'Implementamos eficazmente estrategias y procesos de transformación',
      detail:
        'para encontrar y conectar con tu audiencia en aquellos lugares donde se toman decisiones de compra. Logramos objetivos medibles, alcanzables para influir significativamente en decisiones para que tu marca gane.',
      content: [
        {
          id: 1,
          title: 'Proactividad',
          description:
            ' Nos hacemos cargo de la responsabilidad de liderar las campañas digitales basándonos en la innovación y en las mejoras permanentes que se presentan en el ecosistema.',
          color: 'primary',
        },
        {
          id: 2,
          title: 'Atención personalizada',
          description:
            'Cada equipo de trabajo estará siempre disponibles para cualquier consulta o inquietud. Ante cualquier cambio en el equipo, se le informará inmediatamente al cliente.',
          color: 'secondary',
        },
        {
          id: 3,
          title: 'Transparencia y respeto :)',
          description:
            'Es algo que nos gustaría que un cliente destaque de nosotros en el largo plazo. Creemos que es el mejor camino para poder tener relaciones duraderas en el tiempo',
          color: 'third',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.weZenda-background {
  background-color: $background-black;
  .weZenda-container {
    display: flex;
    align-items: center;
    color: white;
    padding: 4rem 1.4rem;
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
      h2 {
        font-weight: 100;
        font-size: 1.1rem;
        display: contents;
        letter-spacing: -0.03rem;
      }
      span {
        font-size: 1.1rem;
        letter-spacing: -0.03rem;
      }
    }
    @media (min-width: 600px) {
      .title {
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 1rem;
      }
      .special-title {
        font-weight: 700;
      }
      .detail {
        text-decoration: initial;
        padding-right: 2rem;
      }
    }
    @media (min-width: 1440px) {
      .title {
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 1rem;
      }
      .special-title {
        font-weight: 700;
      }
      .detail {
        margin-top: 1rem;
        text-decoration: initial;
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
        .icon {
          width: 1rem;
        }
      }
    }
    @media (min-width: 1440px) {
      .button-colapse {
        padding-left: 2rem;
        .text {
          font-size: 1.5rem;
          font-weight: 100;
        }
        .icon {
          width: 1.5rem;
        }
      }
    }
    .collapse-content {
      background-color: transparent;
      padding-left: 2rem;
      letter-spacing: -0.03rem;
      .card-body {
        padding-top: initial;
        font-weight: 100;
      }
    }
  }
  @media (min-width: 1440px) {
    .weZenda-container {
      padding: 4rem 0 10rem 0;
    }
  }
}
</style>

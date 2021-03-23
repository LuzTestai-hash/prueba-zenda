<template>
  <div id="methodology" class="methodology-background">
    <b-container class="methodology-container">
      <div class="hand-container">
        <p class="subtitle">METODOLOGÍA.</p>
        <HandMoveIcon :color="'#000'" />
      </div>
      <VueSlickCarousel :dots="false" :arrows="false" v-bind="settings">
        <div v-for="data in methoddata" :key="data.id">
          <MethodologyCard
            :number="data.number"
            :title="data.title"
            :color="data.color"
            :icon="data.icon"
            :detail="data.detail"
          />
        </div>
      </VueSlickCarousel>
    </b-container>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  data() {
    return {
      methoddata: [
        {
          id: 0,
          number: '01',
          title: 'Conocimiento',
          color: 'knowledge primary',
          icon: 'knowledge',
          detail:
            'Relevamos los activos del proyecto, los potenciales limitantes y el objetivo del negocio a través de un Marketing Canvas propio.',
        },
        {
          id: 1,
          number: '02',
          title: 'Planificacion',
          color: 'knowledge secondary',
          icon: 'planning',
          detail:
            'Generamos un plan de crecimento que tiene tanto objetivos de performance de pauta como metas a cumplir de desarrollo del canal.',
        },
        {
          id: 2,
          number: '03',
          title: 'Ejecucion',
          color: 'knowledge third',
          icon: 'execution',
          detail:
            'Generamos un plan de crecimento que tiene tanto objetivos de performance de pauta como metas a cumplir de desarrollo del canal.',
        },
        {
          id: 3,
          number: '04',
          title: 'Desafio',
          color: 'knowledge primary',
          icon: 'challenge',
          detail:
            'Generamos un plan de crecimento que tiene tanto objetivos de performance de pauta como metas a cumplir de desarrollo del canal.',
        },
      ],
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
@import '../assets/stylesheets/components/colors';
.methodology-background {
  background: white;
  .methodology-container {
    min-height: 100vh;
    padding: 4rem 1rem;
    .hand-container {
      display: flex;
      justify-content: space-between;
      .subtitle {
        font-size: 1.2rem;
        font-weight: 700;
        color: $typography;
        letter-spacing: 0.02rem;
        line-height: 1.2rem;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>

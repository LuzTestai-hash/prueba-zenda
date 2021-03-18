<template>
  <VueSlickCarousel class="containerMethodology">
    <div v-for="data in methoddata" :key="data.id">
      <ScreensOfMethodology
        :number="data.number"
        :title="data.title"
        :color="data.color"
      />
    </div>
  </VueSlickCarousel>
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
        },
        {
          id: 1,
          number: '02',
          title: 'Planificacion',
          color: 'knowledge primary',
        },
        {
          id: 2,
          number: '03',
          title: 'Ejecucion',
          color: 'knowledge secondary',
        },
        {
          id: 3,
          number: '04',
          title: 'Desafio',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.containerMethodology {
  min-height: 100vh;
  padding: 1rem;
  overflow: auto;

  .container-seccion {
    min-width: 100% !important;
    min-height: 100vh;
  }
  .containerTitles {
    margin: 0.5rem;
    min-height: 10vh;
  }
  .containerIcon {
    border-bottom: 1px solid;
    margin-top: -15%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .icon {
    background-color: rgb(49, 80, 173);
    height: 4rem;
  }
  .subTitle {
    font-size: 0.9rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  .title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 900;
    margin-top: 3rem;
  }
  .containerNumber {
    text-align: center;
  }
  .number {
    font-size: 2.8rem;
    font-weight: 900;
  }
  .containerKnowledge {
    padding: 1rem;
    min-height: 50vh;
    margin-top: 1.5rem;
  }
  .knowledge {
    color: #59d7a2;
    font-size: 1.8rem;
    font-weight: 900;
    margin-top: 0.5rem;
  }
  .knowledgeText {
    font-size: 1.3rem;
  }
}
</style>

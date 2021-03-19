<template>
  <VueSlickCarousel class="containerMethodology">
    <div v-for="data in methoddata" :key="data.id">
      <ScreensOfMethodology
        :number="data.number"
        :title="data.title"
        :color="data.color"
        :icon="data.icon"
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
          icon: 'knowledge',
        },
        {
          id: 1,
          number: '02',
          title: 'Planificacion',
          color: 'knowledge secondary',
          icon: 'planning',
        },
        {
          id: 2,
          number: '03',
          title: 'Ejecucion',
          color: 'knowledge third',
          icon: 'execution',
        },
        {
          id: 3,
          number: '04',
          title: 'Desafio',
          color: 'knowledge primary',
          icon: 'challenge',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.containerMethodology {
  padding: 1rem;
  overflow: auto;
}
</style>

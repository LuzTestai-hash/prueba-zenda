<template>
  <div>
    <CursorCircle />
    <Header />
    <NavBottom />
    <Welcome v-view="viewHandler" />
    <WeZenda v-view="viewHandler" />
    <Graphic :graphic="graphic" />
    <!-- <div :class="`grafic-zenda ${graphic}`" /> -->
    <WhatWeDo v-view="viewHandler" />
    <Methodology v-view="viewHandler" />
    <TrustUs />
    <Clients v-view="viewHandler" />
    <ToolsAndMedia v-view="viewHandler" />
    <Dashboard v-view="viewHandler" />
    <Contact />
    <FloatContactButton />
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {
      graphic: 'first',
      activeViewHandler: true,
    }
  },
  created() {
    this.$nuxt.$on('graphic', (data) => {
      this.graphic = data
    })
    this.$nuxt.$on('viewHandler', (data) => {
      this.activeViewHandler = data
    })
  },
  methods: {
    viewHandler(e) {
      if (this.activeViewHandler) {
        if (
          (e.target.element.id === 'methodology' ||
            e.target.element.id === 'clients') &&
          e.percentCenter >= 0.2 &&
          e.percentCenter <= 0.8
        ) {
          this.$nuxt.$emit('changeNav', e.target.element)
        }

        if (
          this.activeViewHandler &&
          e.percentCenter >= 0.4 &&
          e.percentCenter <= 0.6
        ) {
          this.$nuxt.$emit('changeNav', e.target.element)
        }
      }
    },
  },
}
</script>

<template>
  <div>
    <Header />
    <NavBottom />
    <Welcome />
    <WeZenda
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <WhatWeDo />
    <AgileProcess />
    <Methodology />
    <TrustUs />
    <Clients />
    <ToolsAndMedia />
    <Dashboard />
    <Contact
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
})

export default {
  name: 'Index',
  components: {},
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.$nuxt.$emit('changeNav', entry.target.id)
      }
    },
  },
}
</script>

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
    <WhatWeDo
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <AgileProcess />
    <Methodology
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <TrustUs />
    <Clients
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <ToolsAndMedia
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
    <Dashboard
      v-observe-visibility="{
        callback: visibilityChanged,
      }"
    />
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
        this.$nuxt.$emit('changeNav', entry.target)
      }
    },
  },
}
</script>

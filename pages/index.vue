<template>
  <div>
    <Welcome />
    <WeZenda />
    <WhatWeDo />
    <AgileProcess />
    <Methodology />
    <TrustUs />
    <Clients />
    <ToolsAndMedia />
    <Dashboard />
    <Contact />
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
}
</script>

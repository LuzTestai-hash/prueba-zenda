<template>
  <div class="dashboardCard-container">
    <p class="text">{{ detail }}</p>
    <b-button class="button">
      <p>Ver video</p>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    detail: { type: String, default: null },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.dashboardCard-container {
  .text {
    color: white;
    font-size: 2.3rem;
    line-height: 3.5rem;
    margin-bottom: 5rem;
  }
  .button {
    background-color: transparent;
    border-color: white;
    border-radius: 6rem;
    padding: 1rem;
    p {
      color: white;
      margin-bottom: 0;
    }
  }
}
</style>

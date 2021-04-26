<template>
  <div class="dashboardCard-container">
    <p class="text">{{ detail }}</p>
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
    padding: 2rem 2rem;
  }

  @media (min-width: 1440px) {
    .text {
      font-weight: 100;
      font-size: 3.5rem;
      line-height: 4.5rem;
    }
  }
}
@media (min-width: 1024px) {
  .dashboardCard-container {
    padding-left: 2rem;
    padding-right: 40%;
  }
}
</style>

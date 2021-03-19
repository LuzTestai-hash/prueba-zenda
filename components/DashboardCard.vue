<template>
  <div class="dashboardCard-container">
    <p class="text">{{ detail }}</p>
    <b-button class="button">
      <p>Ver video</p>
      <img src="../assets/icons/play.svg" width="30" height="30" />
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
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    border-color: white;
    border-radius: 6rem;
    padding: 1rem;
    p {
      color: white;
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
}
</style>

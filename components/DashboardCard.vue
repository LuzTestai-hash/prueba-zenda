<template>
  <div class="dashboardCard-container">
    <b-row class="dashboard-row">
      <b-col md="6">
        <p class="text">{{ title }}</p>
        <p class="description">
          {{ description }}
        </p>
      </b-col>
      <b-col md="5">
        <div
          v-video-player:myVideoPlayer="playerOptions"
          class="video-player-box"
        ></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
require('videojs-youtube')
export default {
  name: 'DashboardCard',
  props: {
    title: { type: String, default: null },
    description: { type: String, default: null },
    video: { type: String, default: null },
  },
  data() {
    return {
      playsinline: true,
      playerOptions: {
        fluid: true,
        techOrder: ['youtube'],
        playsinline: true,
        sources: [
          {
            type: 'video/youtube',
            src: this.video,
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.dashboardCard-container {
  .dashboard-row {
    align-items: center;
    justify-content: space-between;
  }
  .text {
    color: #fff;
    font-size: 2rem;
    line-height: 2.3rem;
    margin-bottom: 0;
    padding: 0 0 2rem 0;
    letter-spacing: -0.01rem;
  }
  .description {
    color: #fff;
    font-size: 1.22rem;
    line-height: 1.3;
    letter-spacing: -0.04rem;
    font-weight: 300;
    margin-bottom: 0;
  }
  @media (min-width: 660px) {
    .text {
      font-weight: 600;
      //width: 60%;
      font-size: 2.6rem;
      line-height: 3rem;
    }
    //.description {
    //width: 60%;
    //}
  }
}
</style>

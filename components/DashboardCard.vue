<template>
  <div class="dashboardCard-container">
    <b-row class="dashboard-row">
      <b-col md="6">
        <p class="text">{{ title }}</p>
        <p class="description">
          {{ description }}
        </p>
      </b-col>
      <b-col ref="video" md="5">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dGwEWxQ82qE"
          title="YouTube"
          video
          player
          frameborder="0"
          allow="accelerometer"
          autoplay
          clipboard-write
          encrypted-media
          gyroscope
          picture-in-picture
          allowfullscreen
        ></iframe>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// require('videojs-youtube')
export default {
  name: 'DashboardCard',
  props: {
    title: { type: String, default: null },
    description: { type: String, default: null },
    video: { type: String, default: null },
  },
  data() {
    return {
      videoSrc: this.video,
    }
  },
  mounted() {
    this.$refs.video.addEventListener('mouseenter', () => {
      this.$nuxt.$emit('mouse', 'none')
    })
    this.$refs.video.addEventListener('mouseleave', () => {
      this.$nuxt.$emit('mouse', 'carousel')
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.dashboardCard-container {
  min-height: 44rem;
  .dashboard-row {
    padding: 0 1rem 0 2rem;
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
    margin-bottom: 3rem;
  }
  .video-player-box {
    margin-top: 2rem;
  }
  @media (min-width: 660px) {
    .text {
      font-weight: 600;
      //width: 60%;
      font-size: 2.6rem;
      line-height: 3rem;
    }
    .video-player-box {
      margin-right: 2rem;
    }
    //.description {
    //width: 60%;
    //}
  }
}
@media (min-width: 660px) {
  .dashboardCard-container {
    min-height: 27rem;
    .dashboard-row {
      padding: 0 0 0 0;
    }
  }
}
</style>

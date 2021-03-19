<template>
  <div class="container-seccion">
    <b-row class="containerTitles">
      <b-col>
        <p class="title">Nuestro método.</p>
      </b-col>
    </b-row>
    <b-row class="containerIcon">
      <b-col cols="8"> </b-col>
      <b-col class="col-icon">
        <div v-if="icon === 'knowledge'">
          <img src="../assets/icons/knowledge.svg" width="60" height="60" />
        </div>
        <div v-if="icon === 'planning'">
          <img src="../assets/icons/planning.svg" width="60" height="60" />
        </div>
        <div v-if="icon === 'execution'">
          <img src="../assets/icons/execution.svg" width="60" height="60" />
        </div>
        <div v-if="icon === 'challenge'">
          <img src="../assets/icons/challenge.svg" width="60" height="60" />
        </div>
      </b-col>
    </b-row>
    <b-row class="containerKnowledge">
      <b-col class="containerNumber">
        <p class="number">{{ number }}</p>
      </b-col>
      <b-col cols="9">
        <p :class="color">{{ title }}</p>
        <p class="detail">
          {{ detail }}
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ScreensOfMethodology',
  props: {
    number: { type: String, default: null },
    title: { type: String, default: null },
    color: { type: String, default: null },
    icon: { type: String, default: null },
    detail: { type: String, default: null },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.container-seccion {
  .containerTitles {
    margin-right: 0.5rem;
  }
  .containerIcon {
    border-bottom: 1px solid;
    margin-right: 2rem;
  }
  .col-icon {
    padding: initial;
    text-align: center;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  .icon {
    background-color: rgb(49, 80, 173);
    height: 4rem;
  }
  .subTitle {
    font-size: 0.9rem;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  .title {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: initial;
    font-weight: 700;
    transform: translateY(0.8rem);
  }
  .containerNumber {
    text-align: center;
  }
  .number {
    font-family: 'Recoleta Alt', serif;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .containerKnowledge {
    padding: 1rem;
    margin-top: 1.5rem;
  }
  .knowledge {
    font-family: 'Recoleta Alt', serif;
    font-size: 1.8rem;
    font-weight: 600;
    &.primary {
      color: $primary;
    }
    &.secondary {
      color: $secondary;
    }
    &.third {
      color: $third;
    }
  }
  .knowledgeText {
    font-size: 1.3rem;
  }
  .detail {
    font-size: 1.1rem;
    color: rgba(10, 10, 11, 0.64);
    line-height: 1.4rem;
  }
}
</style>

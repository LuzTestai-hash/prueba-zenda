<template>
  <div class="container-seccion">
    <b-row class="containerIcon">
      <b-col cols="7"> </b-col>
      <b-col class="col-icon">
        <div v-if="icon === 'knowledge'">
          <img
            src="../assets/icons/knowledge.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="knowledge"
          />
        </div>
        <div v-if="icon === 'planning'">
          <img
            src="../assets/icons/planning.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="planning"
          />
        </div>
        <div v-if="icon === 'execution'">
          <img
            src="../assets/icons/execution.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="execution"
          />
        </div>
        <div v-if="icon === 'challenge'">
          <img
            src="../assets/icons/challenge.svg"
            width="60px"
            height="60px"
            loading="lazy"
            alt="challenge"
          />
        </div>
      </b-col>
    </b-row>
    <b-row class="containerKnowledge">
      <b-col class="containerNumber">
        <p class="number">{{ number }}</p>
      </b-col>
      <b-col cols="8">
        <p :class="color">{{ title }}</p>
        <p :class="classdetail">
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
    classdetail: { type: String, default: null },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.container-seccion {
  margin-top: 1rem;
  .containerTitles {
    margin-right: 0.5rem;
  }
  .containerIcon {
    border-bottom: 1px solid;
    margin-right: auto;
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
  .containerNumber {
    text-align: start;
  }
  .col-8 {
    padding: 0.1rem 0.5rem;
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
    font-size: 1.5rem;
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

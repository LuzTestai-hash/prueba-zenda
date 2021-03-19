<template>
  <div class="container-seccion">
    <b-row class="containerTitles">
      <b-col>
        <h1 class="subTitle">Metodología</h1>
        <h2 class="title">Nuestro método.</h2>
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
        <p>
          Relevamos los activos del proyecto, los potenciales limitantes y el
          objetivo del negocio a través de un Marketing Canvas propio.
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
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.container-seccion {
  min-width: 100% !important;

  .containerTitles {
    margin: 0.5rem;
    min-height: 10vh;
  }
  .containerIcon {
    border-bottom: 1px solid;
    margin-top: -15%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .col-icon {
    padding: 0%;
    text-align: center;
    margin-left: 2rem;
    margin-top: -1rem;
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
    margin-bottom: 1rem;
    font-weight: 900;
    margin-top: 3rem;
  }
  .containerNumber {
    text-align: center;
  }
  .number {
    font-size: 2.8rem;
    font-weight: 900;
  }
  .containerKnowledge {
    padding: 1rem;
    min-height: 50vh;
    margin-top: 1.5rem;
  }
  .knowledge {
    font-size: 1.8rem;
    font-weight: 900;
    margin-top: 0.5rem;
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
}
</style>

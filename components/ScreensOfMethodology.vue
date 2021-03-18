<template>
  <div>
    <b-row class="containerTitles">
      <b-col class="zero-padding">
        <h1 class="subTitle">Metodología</h1>
        <h2 class="title">Nuestro método.</h2>
      </b-col>
      <b-col class="zero-padding">
        <p class="icon">icono</p>
      </b-col>
    </b-row>
    <b-row class="containerKnowledge">
      <b-col>
        <p class="number">01</p>
      </b-col>
      <b-col cols="8">
        <p class="knowledge">Conocimiento</p>
        <p>
          Relevamos los activos del proyecto, los potenciales limitantes y el
          objetivo del negocio a través de un Marketing Canvas propio.
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.containerTitles {
  border-bottom: 1px solid;
  margin: 0.5rem;
}
.icon {
  margin-left: 55%;
  margin-top: 70%;
  background-color: rgb(49, 80, 173);
  height: 4rem;
  width: 4rem;
}
.subTitle {
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.zero-padding {
  padding: 0 !important;
}
.title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 900;
}
.containerNumber {
  min-width: 7rem;
}
.number {
  font-size: 2.8rem;
  font-weight: 900;
}
.containerKnowledge {
  padding: 1rem;
}
.knowledge {
  color: #59d7a2;
  font-size: 1.6rem;
  font-weight: 900;
  margin-top: 0.5rem;
}
</style>

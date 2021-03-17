<template>
  <div class="contact-background">
    <b-container fluid class="contact-container">
      <p class="subtitle">CONTACTO.</p>
      <h1 class="email">info@zenda.com.ar</h1>
      <p class="subtitle">AMBASSADORS.</p>
      <p class="title">Zenda en el mundo.</p>
      <div class="locations-container">
        <div class="location">
          <p class="location-title">Paraguay</p>
          <p class="name">Gustavo iglesias</p>
          <b-button class="contact-button">
            <p class="contact-text">Contactar</p>
            <b-icon icon="arrow-right" class="icon"></b-icon>
          </b-button>
        </div>
        <div class="location">
          <p class="location-title">Chile</p>
          <p class="name">Gustavo iglesias</p>
          <b-button class="contact-button">
            <p class="contact-text">Contactar</p>
            <b-icon icon="arrow-right" class="icon"></b-icon>
          </b-button>
        </div>
        <div class="location">
          <p class="location-title">Uruguay</p>
          <p class="name">Gustavo iglesias</p>
          <b-button class="contact-button">
            <p class="contact-text">Contactar</p>
            <b-icon icon="arrow-right" class="icon"></b-icon>
          </b-button>
        </div>
        <div class="location">
          <p class="location-title">Brasil</p>
          <p class="name">Gustavo iglesias</p>
          <b-button class="contact-button">
            <p class="contact-text">Contactar</p>
            <b-icon icon="arrow-right" class="icon"></b-icon>
          </b-button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.contact-background {
  background-color: $background-black;
}
.contact-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 1.6rem;
  .subtitle {
    font-weight: 700;
    color: white;
    letter-spacing: 0.02rem;
    line-height: 1.2rem;
  }
  .title {
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 2.3rem;
    letter-spacing: -0.02em;
    color: white;
    margin-top: 1.2rem;
    margin-bottom: 3.3rem;
    padding-right: 5rem;
  }
  .email {
    margin-top: 2rem;
    margin-bottom: 5rem;
    font-size: 3.5rem;
    font-weight: 700;
    text-decoration-line: underline;
    text-decoration-color: #7cf3c1;
    background: -webkit-linear-gradient(#7cf3c1, #95d6ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    word-break: break-all;
  }
  .locations-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .location {
      flex-direction: column;
      .location-title {
        font-family: 'Recoleta Alt', serif;
        text-decoration: underline;
        color: white;
        font-size: 1.75rem;
        margin-bottom: 0;
      }
      .name {
        font-size: 0.9rem;
        font-weight: 100;
        color: white;
      }
      .contact-button {
        background-color: transparent;
        border: initial;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: initial;
        padding-right: initial;
        margin-right: 0;
        .contact-text {
          color: $primary;
          font-weight: 900;
          margin-bottom: initial;
        }
        .icon {
          margin-left: 1rem;
          color: $primary;
        }
      }
    }
  }
}
</style>

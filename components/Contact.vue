<template>
  <div id="contact" class="contact-background">
    <b-container class="contact-container">
      <p class="subtitle">COMENZAMOS.</p>
      <b-form class="form-contact" @submit="onSubmit">
        <label
          v-if="show === 1"
          for="input-1"
          :class="`label-contact ${show === 1 ? 'one' : ''}`"
        >
          Contanos cómo te llamas.
        </label>
        <div v-if="show === 1" class="input-container">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            class="input"
          />
          <b-icon
            v-if="form.name"
            icon="arrow-right"
            aria-hidden="true"
            class="icon-input"
            @click="showNext"
          />
        </div>
        <label
          v-if="show === 2"
          for="input-2"
          :class="`label-contact ${show === 2 ? 'two' : ''}`"
        >
          Email
        </label>
        <div v-if="show === 2" class="input-container">
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="email"
            required
            class="input"
          />
          <b-icon
            v-if="form.email"
            icon="arrow-right"
            aria-hidden="true"
            class="icon-input"
            @click="showNext"
          />
        </div>
        <label
          v-if="show === 3"
          for="input-3"
          :class="`label-contact ${show === 3 ? 'three' : ''}`"
        >
          En qué te podemos ayudar?
        </label>
        <div v-if="show === 3" class="input-container">
          <b-form-input
            id="input-3"
            v-model="form.mesage"
            type="text"
            required
            class="input"
          />
          <b-icon
            v-if="form.mesage"
            icon="arrow-right"
            aria-hidden="true"
            class="icon-input"
            @click="showNext"
          />
        </div>
        <div v-if="show !== 4" class="load-container">
          <div
            :class="`load-bar ${
              show === 1 ? 'one' : show === 2 ? 'two' : 'three'
            }`"
          />
        </div>
        <p v-if="show !== 4" class="number">{{ `${show}/3` }}</p>
        <p v-if="show === 4" class="email-success">Gracias por contactarnos.</p>
      </b-form>

      <p class="subtitle">EMBAJADORES.</p>
      <p class="title">Zenda en el mundo.</p>
      <b-row class="locations-container">
        <b-col cols="6" md="3">
          <div class="location">
            <p class="location-title">Paraguay</p>
            <p class="name">First Name</p>
            <b-button class="contact-button">
              <p class="contact-text">Contactar</p>
              <b-icon icon="arrow-right" class="icon" alt="icon"></b-icon>
            </b-button>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div class="location">
            <p class="location-title">Chile</p>
            <p class="name">First Name</p>
            <b-button class="contact-button">
              <p class="contact-text">Contactar</p>
              <b-icon icon="arrow-right" class="icon" alt="icon"></b-icon>
            </b-button>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div class="location">
            <p class="location-title">Uruguay</p>
            <p class="name">First Name</p>
            <b-button class="contact-button">
              <p class="contact-text">Contactar</p>
              <b-icon icon="arrow-right" class="icon" alt="icon"></b-icon>
            </b-button>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div class="location">
            <p class="location-title">Brasil</p>
            <p class="name">First Name</p>
            <b-button class="contact-button">
              <p class="contact-text">Contactar</p>
              <b-icon icon="arrow-right" class="icon" alt="icon"></b-icon>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
      },
      show: 1,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    showNext() {
      if (this.show < 4) {
        ++this.show
      }
      if (this.show === 4) {
        // alert(JSON.stringify(this.form))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
.contact-background {
  background-color: $background-black;
}
.contact-container {
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1.6rem 6rem 1.6rem;
  .subtitle {
    font-weight: 700;
    color: white;
    letter-spacing: 0.02rem;
    line-height: 1.2rem;
  }
  @media (min-width: 1440px) {
    .subtitle {
      font-size: 1rem;
    }
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
  .form-contact {
    margin-top: 2rem;
    margin-bottom: 3.5rem;
    height: 10rem;
    .label-contact {
      font-size: 2.1rem;
      color: white;
      font-weight: 700;
      transition: transform 0.4s;
      &.one {
        animation: slide-top 0.5s ease-in-out forwards;
      }
      &.two {
        animation: slide-top2 0.5s ease-in-out forwards;
      }
      &.three {
        animation: slide-top3 0.5s ease-in-out forwards;
      }
    }
    @keyframes slide-top {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
    @keyframes slide-top2 {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
    @keyframes slide-top3 {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
    .input-container {
      position: relative;
      z-index: 5;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 4.5rem;
      background-color: #2e2e2f;
      border-radius: 1rem;
      padding: 1rem;
      .input {
        background-color: transparent;
        border: initial;
        color: white;
        font-size: 1.8rem;
        &:focus {
          border: initial;
          box-shadow: initial;
        }
      }
      .icon-input {
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        color: $third;
        animation: slide-icon 0.5s ease-in-out forwards;
        transition: transform 0.4s;
      }
      @keyframes slide-icon {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
    }
    .email-success {
      font-size: 2.1rem;
      color: white;
      font-weight: 700;
    }
    .number {
      text-align: right;
      color: white;
    }
    .load-container {
      margin-left: auto;
      margin-right: auto;
      margin-top: 0.4rem;
      width: 98%;
      height: 0.3rem;
      background-color: #2e2e2f;
      .load-bar {
        background-color: $third;
        height: 100%;
        &.one {
          width: 0%;
        }
        &.two {
          width: 50%;
          transition: width 1s;
        }
        &.three {
          width: 75%;
          transition: width 1s;
        }
      }
    }
  }

  @media (min-width: 660px) {
    .title {
      display: none;
    }
    .email {
      text-decoration-line: initial;
    }
  }
  @media (min-width: 1440px) {
    .email {
      font-size: 6rem;
    }
  }
  .locations-container {
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
  @media (min-width: 1440px) {
    .locations-container {
      margin-top: 3rem;
      .location {
        .location-title {
          font-size: 2.5rem;
        }
        .name {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>

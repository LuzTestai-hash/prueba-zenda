<template>
  <header>
    <div class="wrap">
      <div id="hamburger" @click="display_menu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src="../assets/icons/zenda-logo.svg" alt="logo" class="logo" />

      <nav id="menu">
        <div class="section">
          <div class="arrow-container">
            <img
              src="../assets/icons/arrow-green.svg"
              alt="arrow"
              class="arrow"
            />
            <p>Somos <span class="zenda-text">Zenda</span></p>
          </div>
        </div>
        <div class="section">
          <div class="arrow-container">
            <img
              src="../assets/icons/arrow-green.svg"
              alt="arrow"
              class="arrow"
            />
            <p>Qué hacemos</p>
          </div>
        </div>
        <div class="section">
          <div class="arrow-container">
            <img
              src="../assets/icons/arrow-green.svg"
              alt="arrow"
              class="arrow"
            />
            <p>Clientes</p>
          </div>
        </div>
        <div class="section">
          <div class="arrow-container">
            <img
              src="../assets/icons/arrow-green.svg"
              alt="arrow"
              class="arrow"
            />
            <p>Casos de éxito</p>
          </div>
        </div>
        <div class="section">
          <div class="arrow-container">
            <img
              src="../assets/icons/arrow-green.svg"
              alt="arrow"
              class="arrow"
            />
            <p>Metodología</p>
          </div>
        </div>
        <div class="section">
          <div class="arrow-container">
            <img
              src="../assets/icons/arrow-green.svg"
              alt="arrow"
              class="arrow"
            />
            <p>Herramientas y medios</p>
          </div>
        </div>
        <div class="section">
          <div class="arrow-container">
            <img
              src="../assets/icons/arrow-green.svg"
              alt="arrow"
              class="arrow"
            />
            <p>Servicios</p>
          </div>
        </div>
        <div class="section">
          <div class="arrow-container">
            <img
              src="../assets/icons/arrow-green.svg"
              alt="arrow"
              class="arrow"
            />
            <p>Contacto</p>
          </div>
        </div>
      </nav>
  </header>
</template>

<script>
export default {
  methods: {
    display_menu() {
      const body = document.getElementsByTagName('body')[0]
      !body.classList.contains('display_menu')
        ? body.classList.add('display_menu')
        : body.classList.remove('display_menu')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';
header {
  display: flex;
  z-index: 3;
  padding: 1rem 5rem;
  position: absolute;
  width: 100%;
  top: 0;
  transition: 0.33s;
  .wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .logo {
      width: 4rem;
    }
    #menu {
      width: 100%;
      display: flex;
      flex-direction: column;
      .section {
        .arrow-container {
          cursor: pointer;
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 2rem;
          .arrow {
            width: 2rem;
            margin-right: 1rem;
          }
          p {
            margin-bottom: initial;
            color: #3e3a37;
            font-size: 1.4rem;
            transition: 0.15s;
          }
          .zenda-text {
            color: $primary;
            text-decoration: underline;
          }
        }
      }
    }
  }
}

#hamburger {
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 5%;
  top: 3rem;
  display: none;
  transform: translateY(-50%);
  span {
    height: 2px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #3e3a37;
    display: block;
    transition: 0.33s;
    &:nth-child(1) {
      width: 24px;
    }
    &:nth-child(2) {
      width: 12px;
    }
    &:nth-child(3) {
      width: 24px;
    }
  }
}

.display_menu {
  header {
    .logo {
      display: none;
    }
    #hamburger {
      span:nth-child(1) {
        transform: rotate(45deg) translate(4px, 5px);
      }
      span:nth-child(2) {
        width: 24px;
        transform: rotate(-45deg);
      }
      span:nth-child(3) {
        transform: rotate(45deg) translate(-4px, -5px);
      }
    }
  }
}
@media screen and (min-width: 660px) {
  header {
    .wrap {
      #menu {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 660px) {
  header {
    padding: 0;
    background-color: #fff;
    position: fixed;
    .wrap {
      padding: 1rem;
      .logo {
        width: 4rem;
      }
      #menu {
        width: 100%;
        display: flex;
        height: 0;
        transform-origin: 50% 0;
        transition: 0.33s ease;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .section {
          display: none;
          transition: 0.25s ease;
          p {
            color: #3e3a37;
          }
        }
      }
    }
  }

  header #hamburger {
    display: block;
  }

  .display_menu header #menu {
    height: 100vh;
    .section {
      transition: 0.25s ease;
      opacity: 1;
      display: block;
      margin-left: 2rem;
    }
  }
}
@media screen and(max-width: 660px) and(max-height: 500px) {
  .display_menu header {
    max-height: 100vh;
    overflow-y: scroll;
  }
  header #menu .section {
    height: 2rem;
    p {
      line-height: 1rem;
    }
  }
  .display_menu header #menu {
    .section {
      height: 2rem;
    }
  }
}
</style>

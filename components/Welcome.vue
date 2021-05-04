<template>
  <div id="welcome" class="welcome-background">
    <div id="cursor" class="cursor" />
    <b-container class="welcome-container">
      <div class="container-title">
        <h1 class="title">{{ $t('hero.title') }}</h1>
        <p class="subtitle">
          {{ $t('hero.description') }}
        </p>
      </div>
      <div v-rellax="rellax">
        <div class="container-cards">
          <div class="tariffCards">
            <div class="inovation">
              <p>Inovación</p>
              <img
                src="../assets/icons/zenda-icon-pink.svg"
                alt="iconPink"
                class="icon"
                loading="lazy"
              />
            </div>
            <div class="data">
              <p>Data</p>
              <img
                src="../assets/icons/zenda-icon-analysis.svg"
                alt="iconanalysis"
                class="icon"
                loading="lazy"
              />
            </div>
            <div class="performance">
              <p>Performance</p>
              <img
                src="../assets/icons/zenda-icon-green.svg"
                alt="icongreen"
                class="icon"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rellax: {
        speed: -2.2,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      },
      title: 'Hacemos Performance & Growth en serio.',
      subtitle:
        'Somos un equipo de especialistas en performance y crecimiento con una simple creencia: Conectar a las marcas con sus clientes en los momentos que importan.',
    }
  },
  mounted() {
    const w = window.innerWidth
    if (w < 600) {
      this.rellax = false
    } else {
      this.rellax = {
        speed: -2.2,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/colors';

.welcome-background {
  background-color: $background-white;
  background-image: url(../assets/icons/zenda-fondo-hero-mobile.svg);
  background-repeat: no-repeat;
  background-position: 0 5rem;
  .welcome-container {
    //padding: 0 1.6rem 0 1.6rem;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-around;
    .container-title {
      .title {
        font-weight: bold;
        font-size: 2.2rem;
        line-height: 1.99rem;
        text-align: flex-start;
        letter-spacing: -0.1rem;
        color: $typography;
        margin-bottom: 1rem;
      }
      .subtitle {
        margin-top: 1.5rem;
        font-size: 1.3rem;
        letter-spacing: -0.07rem;
        font-weight: 300;
      }
    }
    .container-cards {
      position: relative;
      .tariffCards {
        margin-top: 2.5rem;
        user-select: none;
        transform: translate3d(0, 0, 0);
        transform-style: preserve-3d;
        &::after {
          position: absolute;
          bottom: -27px;
          left: 5%;
          content: '';
          width: 65%;
          height: 10px;
          border-radius: 100%;
          background-image: radial-gradient(
            rgba(#223254, 0.04),
            rgba(#223254, 0)
          );
        }
        div {
          position: relative;
          width: 280px;
          height: 140px;
          border-radius: 12px;
          color: white;
          transform: rotateX(45deg) rotateY(-15deg) rotate(45deg);
          transition: all 0.4s ease;
          overflow: hidden;
          cursor: pointer;
          &::after {
            position: absolute;
            top: -70px;
            left: 0;
            content: '';
            width: 200%;
            height: 200%;
            background-image: linear-gradient(
              60deg,
              rgba(white, 0) 20%,
              rgba(white, 0.1),
              rgba(white, 0) 80%
            );
            transform: translateX(-100%);
          }
          p {
            position: absolute;
            bottom: 15px;
            left: 15px;
            font-size: 18px;
            font-weight: 800;
          }
          .icon {
            position: absolute;
            width: 3rem;
            height: auto;
            top: 15px;
            right: 15px;
            transform: rotate(-35deg);
          }
          &.inovation {
            margin-top: 0;
            z-index: 3;
            background-color: #f957c2;
            background-image: linear-gradient(
              269.09deg,
              #f957c2 -3.14%,
              #f532b3 128.58%
            );
            box-shadow: 20px 20px 60px rgba(#542243, 0.5), 1px 1px 0 1px #f532b3;
          }
          &.data {
            margin-top: -70px;
            z-index: 2;
            background-color: #3f58e3;
            background-image: linear-gradient(
              269.09deg,
              #95d6ea -3.14%,
              #b1ecff 128.58%
            );
            box-shadow: 20px 20px 60px rgba(#284755, 0.5), 1px 1px 0 1px #b1ecff;
          }
          &.performance {
            margin-top: -70px;
            z-index: 1;
            background-color: #2c6fd1;
            background-image: linear-gradient(
              269.09deg,
              #59d7a2 -3.14%,
              #60dea9 59.97%,
              #76f7c1 128.58%
            );
            box-shadow: 20px 20px 60px rgba(#1e4943, 0.5), 1px 1px 0 1px #60dea9;
          }
          &:hover {
            transform: rotateX(30deg) rotateY(-15deg) rotate(30deg)
              translate(-25px, 50px);
            &::after {
              transform: translateX(100%);
              transition: all 1.2s ease-in-out;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 600px) {
  .welcome-background {
    background-image: url(../assets/icons/zenda-fondo-hero.svg);
    background-repeat: no-repeat;
    background-position: 100% 0;
    .welcome-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      .container-title {
        .title {
          font-size: 3.5rem;
          line-height: 3.5rem;
          letter-spacing: -0.1rem;
          padding-right: 27%;
        }
        .subtitle {
          padding-right: 30%;
        }
      }
      .container-cards {
        .tariffCards {
          div {
            width: 330px;
            height: 190px;
            &.inovation {
              margin-top: 0;
            }
            &.data {
              margin-top: -90px;
            }
            &.performance {
              margin-top: -90px;
            }
          }
        }
      }
    }
  }
}
</style>

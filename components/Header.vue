<template>
  <header>
    <div class="wrap">
      <div id="hamburger" @click="display_menu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img
        src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/104/thumb_bigger_formation-vue-js.png"
        alt="logo"
      />
      <nav id="menu">
        <li><a>Menu 1</a></li>
        <li class="drop">
          <a @click="display_drop_menu()"
            >Menu 2 dropdown <i class="icon-arrow"></i
          ></a>
          <ul class="drop_menu">
            <a>Sub menu 1</a>
            <a>Sub menu 2</a>
            <a>Sub menu 3</a>
          </ul>
        </li>
        <li class="drop">
          <a @click="display_drop_menu()"
            >Menu 3 dropdown <i class="icon-arrow"></i
          ></a>
          <ul class="drop_menu">
            <a>Sub menu 1</a>
            <a>Sub menu 2</a>
            <a>Sub menu 3</a>
          </ul>
        </li>
        <li><a>Menu 4</a></li>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('resize', function (event) {
      closeAllMenu()
      document.getElementsByTagName('body')[0].classList.remove('display_menu')
    })
    let lastScroll = 0
    window.onscroll = function () {
      if (!document.getElementById('loader')) {
        closeAllMenu()
        const header = document.getElementsByTagName('header')[0]
        if (Math.abs(lastScroll - this.scrollY) <= 5) return
        this.scrollY < lastScroll
          ? (header.style.top = '0')
          : (header.style.top = '-' + header.clientHeight + 'px')
        lastScroll = this.scrollY
      }
    }
    function closeAllMenu() {
      const lis = document.getElementById('menu').getElementsByTagName('li')
      Array.from(lis).forEach(function (e) {
        e.style.marginTop = 0
      })
      const dropMenus = document.getElementsByClassName('drop_menu')
      Array.from(dropMenus).forEach(function (e) {
        e.classList.remove('display')
      })
    }
  },
  methods: {
    display_menu() {
      const body = document.getElementsByTagName('body')[0]
      !body.classList.contains('display_menu')
        ? body.classList.add('display_menu')
        : body.classList.remove('display_menu')
    },
    display_drop_menu() {
      const dropMmenu = event.target.parentElement.getElementsByClassName(
        'drop_menu'
      )[0]
      const dropMenus = document.getElementsByClassName('drop_menu')

      Array.from(dropMenus).forEach(function (e) {
        if (e !== dropMmenu) {
          e.classList.remove('display')
        }
      })
      const lis = document.getElementById('menu').getElementsByTagName('li')
      Array.from(lis).forEach(function (e) {
        e.style.marginTop = 0
      })
      !dropMmenu.classList.contains('display')
        ? dropMmenu.classList.add('display')
        : dropMmenu.classList.remove('display')
      if (window.innerWidth < 660 && dropMmenu.classList.contains('display')) {
        event.target.parentElement.nextSibling.nextSibling.style.marginTop =
          dropMmenu.clientHeight + 'px'
      }
    },
    loaded() {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
      this.load = true
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-arrow {
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.929 284.929'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
}
i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.wrap {
  max-width: 1024px;
  min-width: 320px;
}
.header {
  display: flex;
  z-index: 1;
  padding: 10px 0;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: 0.33s;
}
header .wrap {
  padding: 0 2%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
header img {
  width: 100px;
}
header #menu {
  display: flex;
  flex-direction: row;
}
header .drop_menu {
  position: absolute;
  display: block;
  top: 149%;
  transform: scaleY(0);
  width: auto;
  transform-origin: top;
  background-color: #fff;
  transition: 0.25s;
  padding-bottom: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  a {
    margin-left: 20px;
    display: block;
    transition: 0.45s;
    opacity: 0;
    margin-right: 20px;
    padding: 10px 0 0 0;
  }
}
header .drop_menu.display {
  transform: scaleY(1);
  a {
    opacity: 1;
  }
}
#background {
  content: '';
  display: block;
  width: 100vw;
  height: 200vh;
  padding: 5%;
  background-color: #41b883;
  h3 {
    margin: 0;
    margin-bottom: 1%;
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    i {
      width: 13px;
      height: 20px;
      background-color: #fff;
    }
  }
  button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    padding: 5px 10px;
    font-size: 1.3em;
    border: none;
    background-color: #435466;
    color: #fff;
  }
}

header #menu li {
  position: relative;
  user-select: none;
  margin-left: 20px;
  i {
    width: 12px;
    height: 12px;
    background-color: #3e3a37;
  }
  a {
    color: #3e3a37;
    cursor: pointer;
    font-size: 1.15em;
    border: none;
    border-bottom: 2px solid #fff;
    transition: 0.15s;
    background: none;
    &:hover {
      border-bottom-color: #41b883;
      color: #41b883;
      i {
        background-color: #41b883;
      }
    }
  }
}

header #hamburger span {
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #3e3a37;
  display: block;
  transition: 0.33s;
  &:nth-child(1) {
    width: 12px;
  }
  &:nth-child(2) {
    width: 24px;
  }
  &:nth-child(3) {
    width: 12px;
  }
}

header #hamburger {
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: 3%;
  top: 30px;
  display: none;
  transform: translateY(-50%);
}

.display_menu header #hamburger {
  span:nth-child(1) {
    transform: rotate(45deg) translate(2px, 1px);
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
  }
  span:nth-child(3) {
    transform: rotate(45deg) translate(6px, -9px);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
#overlay {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #3e3a37;
  opacity: 0.5;
}
@media screen and (max-width: 660px) {
  body {
    padding-top: 70px;
  }
  header .wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
  header img {
    width: 50px;
  }
  header #hamburger {
    display: block;
  }
  header #menu {
    width: 100%;
    display: block;
    height: 0;
    transform-origin: 50% 0;
    transition: 0.33s ease;
    flex-direction: column;
  }
  header .drop_menu {
    top: calc((100vh - 113px) / 8);
    box-shadow: none;
    left: 0;
    padding-bottom: 0;
    width: 100%;
    a {
      width: 100%;
      padding: 0 !important;
      padding-left: 40px !important;
      margin: 0;
      border-bottom: 1px solid #dad9d7 !important;
    }
  }
  header #menu li {
    height: 0;
    opacity: 0;
    margin-left: 0;
    transition: 0.25s ease;
    i {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #3e3a37;
    }
    a {
      left: 0;
      line-height: calc((100vh - 113px) / 8);
      padding-left: 20px;
      border: none;
      height: 100%;
      width: 100%;
      display: block;
      &:hover {
        color: #fff;
        background-color: #41b883;
        i {
          background-color: #fff;
        }
      }
    }
  }
  .display_menu header #menu {
    height: calc(100vh - 64px);
    li {
      height: calc((100vh - 113px) / 8);
      border-bottom: 1px solid #dad9d7;
      transition: 0.25s ease;
      opacity: 1;
      display: block;
    }
  }
}
@media screen and(max-width: 660px) and(max-height: 500px) {
  .display_menu header {
    max-height: 100vh;
    overflow-y: scroll;
  }
  i {
    vertical-align: middle;
    display: inline-block;
    background-repeat: no-repeat;
  }
  header #menu li {
    a {
      line-height: calc((100vh - 113px) / 4);
    }
  }
  .display_menu header #menu {
    li {
      height: calc((100vh - 113px) / 4);
    }
  }
  header .drop_menu {
    top: calc((100vh - 113px) / 4);
  }
}
</style>

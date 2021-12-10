<template>
  <div id="header">
    <div class="flex flex-col">
      <div>
          <button @click="updatePath('/')"
               class="logo mt-3.5 ml-5 cursor-pointer" v-if="activePage !== '/'">
            <img alt="" :src="'/pictures/icon2.png'" width="75">

          </button>
          <figure
               class="logo mt-3.5 ml-5" v-else>
            <img alt="" :src="'/pictures/icon2.png'" width="75">

          </figure>

          <nav id="nav"
               class="float-left flex ml-40 justify-end hidden sm:px-0 sm:flex-row sm:justify-end py-4 sm:py-4 font-semibold">

            <button v-if="this.state.loggedUser !== null"
                 @click="updatePath('/teams')"
                 class="button-40 mx-1.5 hidden sm:block"
                 v-bind:class="{active: activePage === '/teams'}"
            >
              <i class="fas fa-users mr-2"></i>
              Teams
            </button>
            <button v-if="this.state.loggedUser !== null"
                 @click="updatePath('/events')"
                 class="button-40 mx-1.5 hidden sm:block"
                 v-bind:class="{active: activePage === '/events'}"
            >
              <i class="far fa-calendar-alt mr-2"></i>
              Events
            </button>

          </nav>

          <div class="float-right flex flex-row justify-end mr-1 sm:mr-5 sm:px-0 sm:flex-row sm:justify-end py-4 sm:py-4 font-semibold">
            <button v-if="this.state.loggedUser === null"
                  @click="updatePath('/login')"
                  class="button-40 mx-1.5 userbutton"
                  v-bind:class="{active: activePage === '/login'}"
            >
                      Login
            </button>
                  <button  v-if="this.state.loggedUser === null"
                        @click="updatePath('/register')"
                        class="sign-up-button-40 mx-1.5 userbutton"
                        v-bind:class="{active: activePage === '/register'}"
                  >
                    Register
                  </button>
            <button v-if="this.state.loggedUser !== null"
                 @click="updatePath('/profile')"
                 class="button-40 ml-10 mx-1.5 userbutton"
                 v-bind:class="{active: activePage === '/profile'}"
            >
              <i class="fas fa-user-alt md:mr-2"></i>
              <span class="hidden md:inline-block">Profile</span>
            </button>
            <button  v-if="this.state.loggedUser !== null"
                  @click="this.logout()"
                  class="logout-button-40 mx-1.5 userbutton"
            >
              <i class="fas fa-sign-out-alt md:mr-2"></i>
              <span class="hidden md:inline-block">Logout</span>
            </button>
          </div>
        </div>

    <nav class="bottom-navbar self-end flex flex-row sm:hidden fixed bottom-0 z-10">
      <button v-if="this.state.loggedUser !== null"
           @click="updatePath('/')"
           class="mobile-button-40"
           v-bind:class="{mobileactive: this.state.currentPath === '/'}"
      >
        <i class="fas fa-home mr-2"></i>
        <p>Home</p>
      </button>

      <button v-if="this.state.loggedUser !== null"
           @click="updatePath('/teams')"
           class="mobile-button-40"
           v-bind:class="{mobileactive: this.state.currentPath === '/teams'}"
      >
        <i class="fas fa-users mr-2"></i>
        <p>Teams</p>
      </button>
      
      <button v-if="this.state.loggedUser !== null"
           @click="updatePath('/events')"
           class="mobile-button-40"
           v-bind:class="{mobileactive: this.state.currentPath === '/events'}"
      >
        <i class="far fa-calendar-alt mr-2"></i>
        <p>Events</p>
      </button>
    </nav>
    </div>

  </div>
</template>

<script>
import LoginController from "../controllers/LoginController";
import router from "../router";
import store from "../store";



export default {
  name: "NavBarComponent",
  data() {
    return {
      router: router,
      state: store.state,
      // logout: LoginController.logout,
      showMenu: false,
    }
  },

  computed: {
    activePage(){return store.state.currentPath}
  },

  methods: {
    async updatePath(target) {
      this.showMenu = false;
      await router.push(target);
      store.commit('setCurrentPath',target);
    },

    logout() {
      LoginController.logout();
    }
  }
}
</script>

<style scoped>

@media screen and (min-width: 385px) {
  .logo {
    margin-top: 0;
    margin-left: 2rem;
  }

  .logo>img {
    width: 91px;
  }

  #nav {
    display: flex;
  }

}

.logo {
  position: absolute;
}

.logo>img {
  position: relative;
  bottom: 0;
}

#header {
  box-sizing: border-box;
  background-image: url("header3.png");
  background-color: black;
  background-repeat: no-repeat;
  background-origin: content-box;
  overflow: auto;
}

.button-40 {
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.000rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .40rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}

.button-40:hover {
  background-color: orange;
}

.button-40:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.mobile-button-40 {
  background-color: #111827;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.000rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .45rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 33.333333%;
}

.mobile-button-40:hover {
  background-color: orange;
  color: black;
}

.mobile-button-40:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.logout-button-40 {
  background-color: #6f0f16;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.000rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .40rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}

.logout-button-40:hover {
  background-color: #d21b1b;
}

.logout-button-40:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.sign-up-button-40 {
  background-color: #0e521c;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.000rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .40rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}

.sign-up-button-40:hover {
  background-color: #589d25;
}

.sign-up-button-40:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

#nav {
  color: white;
}

.active {
  background-color: white;
  color: black;
}

.mobileactive {
  color: orange;
}

.bottom-navbar {
  background-color: #333;
  width: 100%;
}

@media screen and (max-width: 300px) {
  .userbutton {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    margin-left: 0.15rem;
    margin-right: 0.15rem;
  }
}

</style>
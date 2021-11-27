<template>
  <div id="header">
    <div @click="updatePath('/')"
         class="mx-10 float-left cursor-pointer" v-if="activePage !== '/'">
      <img alt="" :src="'/pictures/icon2.png'" width="100">

    </div>
    <div
         class="mx-10 float-left" v-else>
      <img alt="" :src="'/pictures/icon2.png'" width="100">

    </div>

    <nav id="nav"
         class="float-left flex justify-end sm:px-0 sm:flex-row sm:justify-end py-4 sm:py-4 font-semibold">
<!--      <div @click="updatePath('/')"-->
<!--           class="button-40 mx-1.5 hidden sm:block"-->
<!--           v-bind:class="{active: activePage === '/'}"-->
<!--      >-->
<!--        Home-->
<!--      </div>-->
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/teams')"
           class="button-40 mx-1.5 hidden sm:block"
           v-bind:class="{active: activePage === '/teams'}"
      >
        <i class="fas fa-users" style="font-size:16px; margin-right: 5px"></i>
        Teams
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/events')"
           class="button-40 mx-1.5 hidden sm:block"
           v-bind:class="{active: activePage === '/events'}"
      >
        <i class="far fa-calendar-alt" style="font-size:16px; margin-right: 5px"></i>
        Events
      </div>

      <div
          class="mx-4 border-2 py-2 px-7 text-center cursor-pointer hover:bg-orange flex-shrink sm:hidden font-bold select-none"
          @click="toggleNav"
      >
        =
      </div>
      <div class="burgir absolute top-16 py-4 flex flex-grow w-full flex-col sm:hidden bg-white border-2"
           v-if="this.showMenu"
      >
        <div @click="updatePath('/')"
             class="mx-4 border-2 py-2 px-5 text-center cursor-pointer bg-white hover:bg-orange relative"
             v-bind:class="{active2: activePage === '/'}"
        >
          Home
        </div>
        <div v-if="this.state.loggedUser !== null"
             @click="updatePath('/profile')"
             class="mx-4 border-2 py-2 px-5 text-center cursor-pointer bg-white hover:bg-orange relative"
             v-bind:class="{active2: activePage === '/profile'}"
        >
          Profile
        </div>
        <div v-if="this.state.loggedUser !== null"
             @click="updatePath('/teams')"
             class="mx-4 border-2 py-2 px-5 text-center cursor-pointer bg-white hover:bg-orange"
             v-bind:class="{active2: activePage === '/teams'}"
        >
          Teams
        </div>
        <div v-if="this.state.loggedUser !== null"
             @click="updatePath('/events')"
             class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange "
             v-bind:class="{active2: activePage === '/events'}"
        >
          Events
        </div>
        <div  v-if="this.state.loggedUser === null"
              @click="updatePath('/login')"
              class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange"
              v-bind:class="{active2: activePage === '/login'}"
        >
          Login
        </div>
        <div  v-if="this.state.loggedUser === null"
              @click="updatePath('/register')"
              class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange"
              v-bind:class="{active2: activePage === '/register'}"
        >
          Register
        </div>
        <div  v-if="this.state.loggedUser !== null"
              @click="this.logout()"
              class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange"
        >
          Logout
        </div>
      </div>
    </nav>

    <div class="float-right flex justify-end mr-5 sm:px-0 sm:flex-row sm:justify-end py-4 sm:py-4 font-semibold">
      <div  v-if="this.state.loggedUser === null"
            @click="updatePath('/login')"
            class="button-40 mx-1.5 hidden sm:block"
            v-bind:class="{active: activePage === '/login'}"
      >
<!--        <i class="fas fa-sign-in-alt" style="font-size:16px"></i>-->
                Login
      </div>
            <div  v-if="this.state.loggedUser === null"
                  @click="updatePath('/register')"
                  class="sign-up-button-40 mx-1.5 hidden  sm:block"
                  v-bind:class="{active: activePage === '/register'}"
            >
              Register
            </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/profile')"
           class="button-40 ml-10 mx-1.5 hidden sm:block"
           v-bind:class="{active: activePage === '/profile'}"
      >
        <i class="fas fa-user-alt" style="font-size:16px"></i>
<!--                Profile-->
      </div>
      <div  v-if="this.state.loggedUser !== null"
            @click="this.logout()"
            class="logout-button-40 mx-1.5 hidden sm:block"
      >
        <i class="fas fa-sign-out-alt" style="font-size:16px"></i>
<!--                Logout-->
      </div>
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
      activePage: null,
    }
  },
  methods: {
    async updatePath(target) {
      this.showMenu = false;
      console.log('logged user:', this.state.loggedUser);
      await router.push(target);
      console.log('path:', router.currentRoute);
      store.commit('setCurrentPath',target);
      //TODO problem po login -> nezobrazi ako aktivnu stranku Upcoming events
      this.activePage = target;
    },
    toggleNav() {
      this.showMenu = !this.showMenu;
    },
    logout() {
      LoginController.logout();
      this.activePage = '/';
    }
  },

  mounted() {
    this.activePage = store.state.currentPath;
  }
}
</script>

<style scoped>
.burgir {
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.80);
  color: black;
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
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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

.logout-button-40 {
  background-color: #6f0f16;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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

#nav :hover {
  color: black;
}

.active {
  background-color: white;
  color: black;
}

.active2 {
  background-color: black;
  color: white;
}

</style>
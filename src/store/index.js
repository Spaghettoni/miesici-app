import {reactive} from "vue";
import LocalStorageController from "../controllers/LocalStorageController";
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import {User, Team, TeamUser, Event, EventUser, initModels} from './Models';
import VuexPersistence from 'vuex-persist';

LocalStorageController.constructor();


const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


const database = new VuexORM.Database();

// Register Models.
database.register(User);
database.register(Team);
database.register(TeamUser);
database.register(Event);
database.register(EventUser);

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  // state: reactive({
  //   currentPath: '/',
  //   loggedUser:  JSON.parse(localStorage.getItem("db")).loggedUser,
  // }),

  // setCurrentPathAction(newPath) {
  //   this.state.currentPath = newPath;
  // },

  // setLoggedUserAction(user) {
  //     this.state.loggedUser = user;
  // },

  // clearCurrentPathAction() {
  //     this.state.currentPath = '/';
  // },

  // clearLoggedUserAction() {
  //     this.state.loggedUser = null;
  // },

  plugins: [VuexORM.install(database), new VuexPersistence().plugin]
});


initModels();

export default store;
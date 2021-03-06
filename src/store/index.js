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
  state: {
    currentPath: '/',
    loggedUser:  JSON.parse(localStorage.getItem("loggedUser"))
  },

  mutations:{
    setCurrentPath(state, newPath) {
        state.currentPath = newPath;
    },
  
    setLoggedUser(state, user) {
        state.loggedUser = user;
    },
  
    clearCurrentPath(state) {
        state.currentPath = '/';
    },
  
    clearLoggedUser(state) {
        state.loggedUser = null;
    }
  },

  plugins: [VuexORM.install(database), new VuexPersistence().plugin]
});


initModels();

export default store;
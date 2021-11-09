import {reactive} from "vue";
import LocalStorageController from "../controllers/LocalStorageController";
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import {User, Team, TeamUser, Event, EventUser, initModels} from './Models';

LocalStorageController.constructor();

const database = new VuexORM.Database();

// Register Models.
database.register(User);
database.register(Team);
database.register(TeamUser);
database.register(Event);
database.register(EventUser);

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
});

initModels();

export default store;
import {reactive} from "vue";
import LocalStorageController from "../controllers/LocalStorageController";
LocalStorageController.constructor();

const store = {
    state: reactive({
        currentPath: '/',
        loggedUser:  JSON.parse(localStorage.getItem("db")).loggedUser,
    }),

    setCurrentPathAction(newPath) {
       this.state.currentPath = newPath;
    },

    setLoggedUserAction(user) {
        this.state.loggedUser = user;
    },

    clearCurrentPathAction() {
        this.state.currentPath = '/';
    },

    clearLoggedUserAction() {
        this.state.loggedUser = null;
    }
}

export default store;
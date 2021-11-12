import router from "../router";
import store from "../store";
import LocalStorageController from "./LocalStorageController";
import { User } from "../store/Models";
import UsersController from "./UsersController";

const LoginController = (() => {

    function constructor() {
        if(LoginController._instance){
            return LoginController._instance
        }
        LoginController._instance = this;

    }

    async function login(username, password, targetPath) {
        let foundUsers = UsersController.findByUsernameAndPassword(username, password);

        if(foundUsers.length === 0){
            await router.push(targetPath); 
            return;
        }

        let foundUser = foundUsers[0];
        store.commit('setLoggedUser', foundUser);
        await localStorage.setItem('loggedUser', JSON.stringify(foundUser));
        store.commit('setCurrentPath', targetPath);
        await router.push(targetPath);
    }

    async function logout() {
        await localStorage.setItem('loggedUser', null);
        store.commit('setLoggedUser', null);
        store.commit('setCurrentPath', '/');
        console.log("successfully logged out!");
        await router.push('/');
    }

    function getLoggedUser() {
        return JSON.parse(localStorage.getItem("loggedUser"));
    }

    return {
        login,
        logout,
        getLoggedUser,
    }
})()

export default LoginController;
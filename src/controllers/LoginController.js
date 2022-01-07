import router from "../router";
import store from "../store";
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
            return;
        }

        let foundUser = foundUsers[0];
        store.commit('clearGuestUser');
        await localStorage.setItem('guestUser', JSON.stringify(null));

        store.commit('setLoggedUser', foundUser);
        await localStorage.setItem('loggedUser', JSON.stringify(foundUser));
        store.commit('setCurrentPath', targetPath);
        await router.push(targetPath);
    }

    async function loginGuest(guest) {
        store.commit('setGuestUser', guest);
        await localStorage.setItem('guestUser', JSON.stringify(guest));
    }

    async function logout() {
        await router.push('/');
        await localStorage.setItem('loggedUser', null);
        store.commit('setLoggedUser', null);
        store.commit('setCurrentPath', '/');
    }

    function getLoggedUser() {
        return store.state.loggedUser;
    }

    function getGuestUser() {
        return store.state.guestUser;
    }

    function getCurrentUser() {
        if (getLoggedUser() !== null) {
            return getLoggedUser();
        }
        return getGuestUser();
    }


    return {
        login,
        loginGuest,
        logout,
        getLoggedUser,
        getGuestUser,
        getCurrentUser,
    }
})()

export default LoginController;
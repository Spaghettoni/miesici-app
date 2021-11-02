import router from "../router";
import store from "../store";
import LocalStorageController from "./LocalStorageController";
import UsersController from "./UsersController";

const LoginController = (() => {
    let users = JSON.parse(localStorage.getItem("db")).users;

    function constructor() {
        if(LoginController._instance){
            return LoginController._instance
        }
        LoginController._instance = this;

    }

    async function login(username, password, targetPath) {
        users = LocalStorageController.get("users");

        for (const user of users) {
            if (user.username === username && user.password === password) {
                await store.setLoggedUserAction(username);
                await store.setCurrentPathAction(targetPath);
                await LocalStorageController.save('loggedUser', username);
                await router.push(targetPath);
            }
        }
        await router.push('/events');
    }

    async function logout() {
        await LocalStorageController.save('loggedUser', null);
        await store.setLoggedUserAction(null);
        await store.setCurrentPathAction('/');
        console.log("successfully logged out!");
        await router.push('/');
    }

    function getLoggedUser() {
        return JSON.parse(localStorage.getItem("db")).loggedUser;
    }

    return {
        login,
        logout,
        getLoggedUser,
    }
})()

export default LoginController;
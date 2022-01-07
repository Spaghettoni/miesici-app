import router from "../router";
import store from "../store";
import UsersController from "./UsersController";
import { User } from "../store/Models";

const RegistrationController = (() => {

    function constructor() {
        if(RegistrationController._instance){
            return RegistrationController._instance
        }
        RegistrationController._instance = this;

    }

    // async function createUser(username, password, email)
    async function register(username, password, confirmPassword, email, targetPath) {
        if(username === "" || password === "" || email === ""){
            window.alert("please fill out all fields");
            return;
        }
        if(password !== confirmPassword){
            window.alert("passwords do not match");
            return;
        }

        if(UsersController.doesUsernameExist(username)){
            window.alert("username is already taken");
            return;
        }

        store.commit('setCurrentPath', targetPath);
        await router.push(targetPath);

        User.insert({
            data: {
                username: username,
                password: password,
                email: email
            }
        })
    }


    return {
        register
    }
})()

export default RegistrationController;
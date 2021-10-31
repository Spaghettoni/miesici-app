import router from "../router";
import store from "../store";
import LocalStorageController from "./LocalStorageController";
import UsersController from "./UsersController";

const RegistrationController = (() => {
    let users = JSON.parse(localStorage.getItem("db")).users;

    function constructor() {
        if(RegistrationController._instance){
            return RegistrationController._instance
        }
        RegistrationController._instance = this;

    }

    async function register(username, password, confirmPassword, email, targetPath) {
        console.log("sme v metode register");
        if(username === "" || password === "" || email === ""){
            return;
        }
        if(password !== confirmPassword){
            return;
        }

        if(UsersController.doesUserExist(username)){
            console.log("meno uz existuje");
            window.alert("username is already taken");
            return;
        }

        await store.setCurrentPathAction(targetPath);
        await router.push(targetPath);  

        await UsersController.insertUser(username, password, email);
    }


    return {
        register
    }
})()

export default RegistrationController;
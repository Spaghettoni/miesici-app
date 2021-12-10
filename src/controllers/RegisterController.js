import storage from "@/assets/InitialValues";

export class RegisterController {

    constructor() {
        this.users = JSON.parse(localStorage.getItem("db")).users;
    }

    reloadUsers(){
        this.users = JSON.parse(localStorage.getItem("db")).users;
    }

    insert(){
        //vlozi do localstorage
        this.reloadUsers();
    }

    check

}
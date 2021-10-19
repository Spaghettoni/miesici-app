import storage from "@/assets/LocalStorage";

export class UsersController {

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

    checkLogin(username, password){
        var arrayLength = this.users.length;
        for (let i = 0; i < arrayLength; i++) {
            let user = this.users[i];
            if(user.name == username && user.password == password){
                return true;
            }
        }
        return false;
    }

    printAllUsers(){
        var arrayLength = this.users.length;
        for (let i = 0; i < arrayLength; i++) {
            console.log(this.users[i]);
        }
    }



}
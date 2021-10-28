import storage from "@/assets/LocalStorage";

const UsersController = (() => {
    let users = JSON.parse(localStorage.getItem("db")).users;

    function constructor() {

        if(UsersController._instance){
            return UsersController._instance
        }
        UsersController._instance = this;

    }

    function reloadUsers() {
        users = JSON.parse(localStorage.getItem("db")).users;
    }

    function insert() {
        //vlozi do localstorage
        reloadUsers();
    }

    function getUsers() {
        return users;
    }

    function printAllUsers() {
        let arrayLength = users.length;
        for (let i = 0; i < arrayLength; i++) {
            console.log(users[i]);
        }
    }
    return {
        getUsers,
    }
})();

export default UsersController;
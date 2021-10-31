import storage from "@/assets/LocalStorage";
import LocalStorageController from "./LocalStorageController";

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

    function insertUser(username, password, email) {
        let db = LocalStorageController.getDB();
        const newUser = {
            "username": username,
            "password": password,
            "mail": email
        };
        db.users.push(newUser);
        LocalStorageController.saveDB(db);
        reloadUsers();
    }

    function getUsers() {
        return users;
    }

    function doesUserExist(username){
        for (const user of users){
            if(user.username === username){
                return true;
            }
        }
        return false;
    }

    function printAllUsers() {
        let arrayLength = users.length;
        for (let i = 0; i < arrayLength; i++) {
            console.log(users[i]);
        }
    }
    return {
        getUsers,
        doesUserExist,
        insertUser,
        printAllUsers
    }
})();

export default UsersController;
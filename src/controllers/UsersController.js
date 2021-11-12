import { User } from "../store/Models";


const UsersController = (() => {

    function constructor() {

        if(UsersController._instance){
            return UsersController._instance
        }
        UsersController._instance = this;

    }

    function doesUsernameExist(username){
        return User.query().where((user) => {
            return user.username === username 
        }).exists();
    }

    function findByUsernameAndPassword(username, password){
        return User.query().where((user) => {
            return user.username === username && user.password === password
        }).get();
    }

    function findByUsername(username){
        return User.query().where((user) => {
            return user.username === username
        }).get();
    }

    return {
        doesUsernameExist,
        findByUsernameAndPassword,
        findByUsername
    }
})();

export default UsersController;
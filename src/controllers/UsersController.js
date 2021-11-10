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

    return {
        doesUsernameExist,
        findByUsernameAndPassword
    }
})();

export default UsersController;
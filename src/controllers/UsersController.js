import { User } from "../store/Models";


const UsersController = (() => {

    function constructor() {

        if(UsersController._instance){
            return UsersController._instance
        }
        UsersController._instance = this;

    }

    function doesUsernameExist(username){
        let usersWithUsername = User.query().where((user) => {
            return user.username === username 
        }).get();
        return usersWithUsername.length > 0;
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
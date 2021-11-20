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

    function updateUserInformation(user){
        User.update({
            where: user.id,
            data: {
                username: user.username,
                email: user.email,
                bio: user.bio
        }
        });
    }

    return {
        doesUsernameExist,
        findByUsernameAndPassword,
        findByUsername,
        updateUserInformation
    }
})();

export default UsersController;
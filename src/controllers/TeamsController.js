import store from "../store";
import LocalStorageController from "./LocalStorageController";

const TeamsController = (() => {
    function constructor() {

        if(TeamsController._instance){
            return TeamsController._instance
        }
        TeamsController._instance = this;

    }

    function getTeams() {

        const loggedUser = store.state.loggedUser;
        const teams = LocalStorageController.get('teams');
        return Object.values(teams).filter((element) => element.members.includes(loggedUser));

    }

    return {
        getTeams,
    }
})();

export default TeamsController;
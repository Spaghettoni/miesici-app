import store from "../store";
import LocalStorageController from "./LocalStorageController";
import UsersController from "./UsersController";

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

    function createTeam(name) {
        const loggedUser = store.state.loggedUser;
        const newTeam = {
            name: name,
            members: [loggedUser],
        }
        console.log('creating team with name:', name);
        let db = LocalStorageController.getDB();
        db.teams.push(newTeam);
        LocalStorageController.saveDB(db);
    }

    function addMember(team, member) {
        console.log('adding', member, ' to team', team);
        let db = LocalStorageController.getDB();
        db.teams.forEach((element) => {
            if (element.name === team) {
                let members = element.members;

                if(members.includes(member)){
                    window.alert("User is already a member of the team");
                    return;
                }
                if(!UsersController.doesUserExist(member)){
                    window.alert("User '" + member + "' doesn't exist");
                    return;
                }

                element.members.push(member);
            }
        });
        LocalStorageController.saveDB(db);
    }

    return {
        getTeams,
        createTeam,
        addMember,
    }
})();

export default TeamsController;
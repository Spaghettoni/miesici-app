import store from "../store";
import LocalStorageController from "./LocalStorageController";
import UsersController from "./UsersController";
import { Team, TeamUser } from "../store/Models";

const TeamsController = (() => {
    function constructor() {

        if(TeamsController._instance){
            return TeamsController._instance
        }
        TeamsController._instance = this;

    }

    function getUsersTeams() {
        const loggedUser = store.state.loggedUser;
        return Team.query().withAllRecursive()  //with('events.attendees').with('members') 
        .where((team) => TeamUser.query()
            .where((tu) => tu.team_id === team.id && tu.user_id === loggedUser.id).exists())
        .get();
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
        getUsersTeams,
        createTeam,
        addMember,
    }
})();

export default TeamsController;
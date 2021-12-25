import store from "../store";
import UsersController from "./UsersController";
import LoginController from "./LoginController";
import { Team, TeamUser, Request } from "../store/Models";

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

    function getAllTeams(){
        return Team.query().withAllRecursive().get();
    }

    function createTeam(name) {
        const loggedUser = store.state.loggedUser;
        Team.insert({
            data: {
              name: name,
              members: [loggedUser]
            }
        })
    }

    function addMember(teamId, username) {
        const users = UsersController.findByUsername(username);
        if(users.length === 0){
            window.alert("user doesn't exist");
            return;
        }

        const user = users[0];
        const isMemberAlready = TeamUser.query().whereId([teamId, user.id]).exists();
        if(isMemberAlready){
            window.alert("user is already a member of the team");
            return;
        }

        TeamUser.insert({
            data: {
                team_id: teamId,
                user_id: user.id
            }
        });
    }

    function createJoinRequest(teamId){
        const loggedUser = LoginController.getLoggedUser();
        if(!loggedUser){
            return;
        }
        if(!teamId){
            throw new Error('Please choose a team');
        }
        if(Request.query().whereId([teamId, loggedUser.id]).exists()){
            throw new Error('Request already sent');
        }
        Request.insert({
            data: {
                team_id: teamId,
                user_id: loggedUser.id
            }
        });
    }

    return {
        getUsersTeams,
        createTeam,
        addMember,
        getAllTeams,
        createJoinRequest
    }
})();

export default TeamsController;
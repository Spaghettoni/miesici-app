import store from "../store";
import UsersController from "./UsersController";
import LoginController from "./LoginController";
import {Team, TeamUser, Request, User, Event} from "../store/Models";

const TeamsController = (() => {
    function constructor() {

        if(TeamsController._instance){
            return TeamsController._instance
        }
        TeamsController._instance = this;

    }

    function getUsersTeams() {
        const loggedUser = LoginController.getLoggedUser();
        return Team.query().withAllRecursive()  //with('events.attendees').with('members') 
        .where((team) => TeamUser.query()
            .where((tu) => tu.team_id === team.id && tu.user_id === loggedUser.id).exists())
        .get();
    }

    function getAllTeams(){
        return Team.query().withAllRecursive().get();
    }

    function getTeamsToJoin(){
        const loggedUser = LoginController.getLoggedUser();
        return Team.query().withAllRecursive()   
        .where((team) => !TeamUser.query()      //je tam vykricnik !
            .where((tu) => tu.team_id === team.id && tu.user_id === loggedUser.id).exists())
        .get();
    }

    function getJoinRequesters(teamId){
        const joinRequests = Request.query().where((req) => req.team_id === teamId).get();
        const userIds = [];
        for(let request of joinRequests){
            userIds.push(request.user_id);
        }
        return User.query().whereIdIn(userIds).get();
    }

    function createTeam(name) {
        const loggedUser = LoginController.getLoggedUser();
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

    function acceptJoinRequest(teamId, userId){
        //nechce sa mi kontroly robit 
        Request.delete([teamId, userId]);
        TeamUser.insert({
            data: {
                team_id: teamId,
                user_id: userId
            }
        });
    }

    function rejectJoinRequest(teamId, userId){
        Request.delete([teamId, userId]);
    }

    function deleteTeam(teamId){
        Team.delete(teamId);
    }

    return {
        getUsersTeams,
        createTeam,
        addMember,
        getAllTeams,
        createJoinRequest,
        getTeamsToJoin,
        getJoinRequesters,
        acceptJoinRequest,
        rejectJoinRequest,
        deleteTeam
    }
})();

export default TeamsController;
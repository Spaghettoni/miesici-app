import store from "../store";
import LocalStorageController from "./LocalStorageController";
import LoginController from "@/controllers/LoginController";
import TeamsController from "./TeamsController";
import { EventUser } from "../store/Models";

const EventsController = (() => {
    function constructor() {

        if (EventsController._instance) {
            return EventsController._instance
        }
        EventsController._instance = this;

    }

    /*
        returns events of users teams
    */
    function getUsersEvents() {
        const usersTeams = TeamsController.getUsersTeams();

        let events = [];
        for(let team of usersTeams){
            events.push(...team.events);
        }
        return events;
    }

    function joinEvent(eventId) {
        const loggedUser = store.state.loggedUser;

        EventUser.insert({
            data: {
                event_id: eventId,
                user_id: loggedUser.id
            }
        });
    }

    function leaveEvent(eventId) {
        const loggedUser = store.state.loggedUser;
        EventUser.delete([eventId, loggedUser.id]);
    }

    function didUserJoinEvent(eventId){
        const loggedUser = store.state.loggedUser;
        return EventUser.query().whereId([eventId, loggedUser.id]).exists();
    }

    

    return {
        getUsersEvents,
        joinEvent,
        leaveEvent,
        didUserJoinEvent
    }
})();

export default EventsController
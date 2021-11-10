import store from "../store";
import LocalStorageController from "./LocalStorageController";
import LoginController from "@/controllers/LoginController";
import { Team } from "../store/Models";

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
        const loggedUser = store.state.loggedUser;
        const usersTeams = Team.query().with('events.attendees').with('members').get()  //withAllRecursive
        .filter((team) => team.members.some((u) => u.id === loggedUser.id));

        let events = [];
        for(let team of usersTeams){
            events.push(...team.events);
        }
        
        return events;
    }

    function joinEvent(eventName) {
        let db = LocalStorageController.getDB();
        let events = db.events;
        let loggedUser = LoginController.getLoggedUser();


        for (const event of events) {
            if (event.name === eventName) {
                event.attendees.push(loggedUser)
            }
        }
        LocalStorageController.saveDB(db);
    }

    function leaveEvent(eventName) {
        let db = LocalStorageController.getDB();
        let events = db.events;
        let loggedUser = LoginController.getLoggedUser();


        for (const event of events) {
            if (event.name === eventName) {

                var filtered = event.attendees.filter(function(value, index, arr){
                    return value !== loggedUser;
                });
                event.attendees = filtered;

            }
        }
        LocalStorageController.saveDB(db);
    }

    function doesEventExist(eventName) {
        let events = LocalStorageController.get("events");
        for (const event of events) {
            if (event.name === eventName) {
                return true;
            }
        }
        return false;
    }

    function insertEvent(name, sport, place, datetime, team) {
        let db = LocalStorageController.getDB();
        let loggedUser = LoginController.getLoggedUser();

        if (doesEventExist(name) === true) {
            return;
        }

        const newEvent = {
            "name": name,
            "place": place,
            "sport": sport,
            "team": team,
            "datetime": datetime,
            "attendees": [loggedUser],
        }
        db.events.push(newEvent);
        LocalStorageController.saveDB(db);
    }

    return {
        getUsersEvents,
        insertEvent,
        joinEvent,
        leaveEvent
    }
})();

export default EventsController
import store from "../store";
import LocalStorageController from "./LocalStorageController";
import LoginController from "@/controllers/LoginController";
import TeamsController from "./TeamsController";
import {EventUser, Event} from "../store/Models";

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
        for (let team of usersTeams) {
            events.push(...team.events);
        }
        events = events.filter((e) => this.isUpToDate(e));
        sortEventsByDatetime(events);
        return events;
    }

    function getPublicEvents() {
        let events = Event.query().where((event) => event.team_id === null).get();
        sortEventsByDatetime(events);
        return events;
    }

    function sortEventsByDatetime(events) {
        events.sort((x, y) => {
            if (x.datetime > y.datetime) {
                return 1
            }
            if (x.datetime === y.datetime) {
                return 0
            }
            return -1;
        });
    }

    function joinEvent(eventId, userId) {
        EventUser.insert({
            data: {
                event_id: eventId,
                user_id: userId
            }
        });
    }

    function leaveEvent(eventId) {
        const loggedUser = store.state.loggedUser;
        EventUser.delete([eventId, loggedUser.id]);
    }

    function didUserJoinEvent(eventId) {
        const loggedUser = store.state.loggedUser;
        if (loggedUser === null) {
            return false;
        }
        return EventUser.query().whereId([eventId, loggedUser.id]).exists();
    }

    function isUpToDate(event) {

        if (Date.parse(event.datetime).compareTo(Date.today()) >= 0) {
            return true;
        }
        return false;

    }

    function deleteEvent(eventId) {
        Event.delete(eventId);
    }

    return {
        getUsersEvents,
        joinEvent,
        leaveEvent,
        didUserJoinEvent,
        isUpToDate,
        getPublicEvents,
        deleteEvent
    }
})();

export default EventsController

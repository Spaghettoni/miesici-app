import store from "../store";
import LocalStorageController from "./LocalStorageController";

const EventsController = (() => {
        function constructor() {

            if(EventsController._instance){
                return EventsController._instance
            }
            EventsController._instance = this;

        }

        function getEvents() {
            const loggedUser = store.state.loggedUser;
            const teams = LocalStorageController.get('teams');
            const userTeams = Object.values(teams).filter((element) => element.members.includes(loggedUser));
            const events = LocalStorageController.get('events');
            console.log('user teams:', userTeams.map(team => team.name));
            return Object.values(events).filter((event) => userTeams.map(team => team.name).includes(event.team));
        }

        return {
            getEvents,
        }
})();

export default EventsController
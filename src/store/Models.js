import { Model } from '@vuex-orm/core'
import storage from '../assets/InitialValues.js'

class User extends Model {
    static entity = 'users'

    static fields () {
        return {
            id: this.uid(),
            username: this.attr(''),
            password: this.attr(''),
            email: this.attr('')
        }
    }
}
    

class Team extends Model {
    static entity = 'teams'
  
    static fields () {
        return {
            id: this.uid(),
            name: this.attr(''),
            members: this.belongsToMany(User, TeamUser, 'team_id', 'user_id'),
            events: this.hasMany(Event, 'team_id')
        }
    }
}


class TeamUser extends Model {
    static entity = 'teamUser'

    static primaryKey = ['team_id', 'user_id']

    static fields () {
        return {
            team_id: this.attr(null),
            user_id: this.attr(null)
        }
    }
}


class Request extends Model {
    static entity = 'requests'

    static primaryKey = ['team_id', 'user_id']

    static fields () {
        return {
            team_id: this.attr(null),
            user_id: this.attr(null)
        }
    }
}


class Event extends Model {
    static entity = 'events'
  
    static fields () {
        return {
            id: this.uid(),
            name: this.attr(''),
            place: this.attr(''),
            sport: this.attr(''),
            team_id: this.attr(null),
            datetime: this.attr(null),
            attendees: this.belongsToMany(User, EventUser, 'event_id', 'user_id')
        }
    }
}


class EventUser extends Model {
    static entity = 'eventUser'

    static primaryKey = ['event_id', 'user_id']

    static fields () {
        return {
            event_id: this.attr(null),
            user_id: this.attr(null)
        }
    }
}


/*
    Loads data from an object into Models.
    Assumes that names (team names, usernames) are used as foreign keys
    in the object.
*/
function initModels(){
    initUsers();
    initTeams();
    initEvents();
    initRequests();
}


function initUsers(){
    const users = storage["users"];
    User.insert({
        data: users
    })
}


function initTeams(){
    const teams = storage["teams"];
    for(let team of teams){
        let users = usersFromUsernames(team.members);
        Team.insert({
            data: {
              name: team.name,
              members: users
            }
        })
    }
}


function initEvents(){
    const events = storage["events"];
    for(let event of events){
        let users = usersFromUsernames(event.attendees);
        let foundTeams = Team.query().where('name', event.team).limit(1).get();
        let foundTeam = foundTeams[0];

        Event.insert({
            data: {
              name: event.name,
              place: event.place,
              sport: event.sport,
              team_id: foundTeam.id,
              datetime: event.datetime,
              attendees: users
            }
        })
    }
}

function initRequests(){
    const requests = storage["requests"];
    for(let request of requests){
        let team = Team.query().where('name', request.team).first();
        let users = usersFromUsernames(request.requesters);
        for(let user of users){
            Request.insert({
                data: {
                    team_id: team.id,
                    user_id: user.id
                }
            });
        }
    }
}


function usersFromUsernames(usernames){
    return User.query().where('username', u => usernames.includes(u)).get();
}


export {User, Team, TeamUser, Event, EventUser, Request, initModels};
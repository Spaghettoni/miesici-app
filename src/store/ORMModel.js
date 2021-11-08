import { Model } from '@vuex-orm/core'

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
            events: this.hasMany(Event, team_id)
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


class Event extends Model {
    static entity = 'teams'
  
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
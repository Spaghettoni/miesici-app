const storage = {
    "users": [
        {
            "username": "Janko",
            "password": "Janko",
            "email": "janko@gmail.com",
            "bio" : ""
        },

        {
            "username": "Peter",
            "password": "Peter",
            "email": "peter@gmail.com",
            "bio" : ""
        },

        {
            "username": "Ondrej",
            "password": "Ondrej",
            "email": "ondrej@gmail.com",
            "bio" : ""
        },

        {
            "username": "Slavo",
            "password": "Slavo",
            "email": "slavo@gmail.com",
            "bio" : "I like beer. I like beer. I like beer. I like beer. I like beer. I like beer. I like beer. I like beer. I like beer."
        },

        {
            "username": "Hrusky",
            "password": "Hrusky",
            "email": "hrusky@gmail.com",
            "bio" : ""
        },

        {
            "username": "Dynamo",
            "password": "Dynamo",
            "email": "dynamo@gmail.com",
            "bio" : ""
        },

        {
            "username": "Andrej",
            "password": "Andrej",
            "email": "andrej@gmail.com",
            "bio" : ""
        },

        {
            "username": "Lukas",
            "password": "Lukas",
            "email": "lukas@gmail.com",
            "bio" : ""
        },

        {
            "username": "Rene",
            "password": "Rene",
            "email": "rene@gmail.com",
            "bio" : ""
        },

        {
            "username": "Sebastian",
            "password": "Sebastian",
            "email": "sebastian@gmail.com",
            "bio" : ""
        },

        {
            "username": "Nikita",
            "password": "Nikita",
            "email": "nikita@gmail.com",
            "bio" : ""
        },

        {
            "username": "Livia",
            "password": "Livia",
            "email": "livia@gmail.com",
            "bio" : ""
        },

        {
            "username": "Julia",
            "password": "Julia",
            "email": "julia@gmail.com",
            "bio" : ""
        }
    ],

    "loggedUser": null,

    "teams": [
        {
            "name": "Kolegovci",
            "members": ["Janko", "Ondrej", "Slavo", "Livia"]
        },

        {
            "name": "Miesici",
            "members": ["Janko", "Sebastian", "Nikita"]
        },

        {
            "name": "Futbalisti",
            "members": ["Peter", "Ondrej", "Sebastian", "Nikita", "Livia", "Julia", "Slavo", "Dynamo", "Hrusky", "Andrej"]
        },

        {
            "name": "Experti",
            "members": ["Andrej", "Dynamo", "Slavo", "Janko", "Peter", "Julia", "Hrusky", "Rene"]
        },

        {
            "name": "Sportovci",
            "members": ["Slavo", "Janko", "Hrusky", "Nikita", "Sebastian", "Peter", "Dynamo", "Andrej"]
        },

        {
            "name": "Stara skola",
            "members": ["Peter", "Janko", "Hrusky", "Dynamo"]
        },

        {
            "name": "Barcelona",
            "members": ["Peter", "Slavo", "Ondrej","Sebastian", "Nikita", "Livia", "Julia", "Rene"]
        },

        {
            "name": "Odbornici",
            "members": ["Janko"]
        },

        {
            "name": "Vagosi",
            "members": ["Peter", "Ondrej"]
        }
    ],

    "events": [
        {
            "name": "Veľký šampionát v Bernolákove",
            "place": "Bernolakovo",
            "sport": "Tenis",
            "team": "Miesici",
            "datetime": "2021-11-05 12:00",
            "attendees": ["Ondrej", "Slavo", "Livia"],
        },

        {
            "name": "DL Boyz derby",
            "place": "Bratislava",
            "sport": "Futbal",
            "team": "Miesici",
            "datetime": "2021-11-06 20:00",
            "attendees": ["Ondrej", "Slavo", "Livia"],
        },
        
        {
            "name": "Račiansky playoff",
            "place": "Bratislava",
            "sport": "Futbal",
            "team": "Futbalisti",
            "datetime": "2021-11-07 15:00",
            "attendees": ["Sebastian", "Nikita", "Livia", "Julia"],
        },

        {
            "name": "Vrakunske miesenie",
            "place": "Vrakuna",
            "sport": "Petang",
            "team": "Barcelona",
            "datetime": "2021-11-07 15:00",
            "attendees": ["Slavo", "Ondrej","Sebastian", "Nikita"],
        },

        {
            "name": "Hokejbalek",
            "place": "Bratislava",
            "sport": "Hokejbal",
            "team": "Barcelona",
            "datetime": "2021-11-10 15:00",
            "attendees": ["Slavo", "Ondrej","Sebastian", "Nikita", "Livia", "Julia", "Rene"],
        },

        {
            "name": "Trosku hroty",
            "place": "Bratislava",
            "sport": "Curling",
            "team": "Sportovci",
            "datetime": "2021-11-10 15:00",
            "attendees": [],
        },

        {
            "name": "Grandslam",
            "place": "Bratislava",
            "sport": "Tenis",
            "team": "Sportovci",
            "datetime": "2021-11-22 16:00",
            "attendees": [],
        },

        {
            "name": "Olympiada",
            "place": "Tokyo",
            "sport": "Hod ostepom",
            "team": "Experti",
            "datetime": "2021-12-08 12:21",
            "attendees": [],
        },

        {
            "name": "Turnaj v lolku",
            "place": "Unispace",
            "sport": "Esport",
            "team": "Experti",
            "datetime": "2021-12-06 14:40",
            "attendees": [],
        }
    ],

}

export default storage;

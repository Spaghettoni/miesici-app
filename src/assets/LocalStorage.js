const storage = {
    "users": [
        {
            "username": "Janko",
            "password": "Janko",
            "mail": "janko@gmail.com"
        },

        {
            "username": "Peter",
            "password": "Peter",
            "mail": "peter@gmail.com"
        },

        {
            "username": "Ondrej",
            "password": "Ondrej",
            "mail": "ondrej@gmail.com"
        },

        {
            "username": "Slavo",
            "password": "Slavo",
            "mail": "slavo@gmail.com"
        },

        {
            "username": "Hrusky",
            "password": "Hrusky",
            "mail": "hrusky@gmail.com"
        },

        {
            "username": "Dynamo",
            "password": "Dynamo",
            "mail": "dynamo@gmail.com"
        },

        {
            "username": "Andrej",
            "password": "Andrej",
            "mail": "andrej@gmail.com"
        },

        {
            "username": "Lukas",
            "password": "Lukas",
            "mail": "lukas@gmail.com"
        },

        {
            "username": "Rene",
            "password": "Rene",
            "mail": "rene@gmail.com"
        },

        {
            "username": "Sebastian",
            "password": "Sebastian",
            "mail": "sebastian@gmail.com"
        },

        {
            "username": "Nikita",
            "password": "Nikita",
            "mail": "nikita@gmail.com"
        },

        {
            "username": "Livia",
            "password": "Livia",
            "mail": "livia@gmail.com"
        },

        {
            "username": "Julia",
            "password": "Julia",
            "mail": "julia@gmail.com"
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

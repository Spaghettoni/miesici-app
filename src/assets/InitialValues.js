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

    "guestUser": null,

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
            "members": ["Andrej", "Dynamo", "Janko", "Peter", "Julia", "Hrusky", "Rene"]
        },

        {
            "name": "Sportovci",
            "members": ["Janko", "Hrusky", "Nikita", "Sebastian", "Peter", "Dynamo", "Andrej"]
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
            "sport": "Tennis",
            "note": "Poďme si zmerať sily v tenise, Miesiči! Víťaz dostane aj malú odmenu.",
            "team": "Miesici",
            "datetime": "2022-05-05 12:00",
            "attendees": ["Ondrej", "Slavo", "Livia"],
        },

        {
            "name": "DL Boyz derby",
            "place": "Bratislava",
            "sport": "Football",
            "note": "",
            "team": "Miesici",
            "datetime": "2022-07-06 20:00",
            "attendees": ["Ondrej", "Slavo", "Livia"],
        },
        
        {
            "name": "Račiansky playoff",
            "place": "Bratislava",
            "sport": "Football",
            "note": "",
            "team": "Futbalisti",
            "datetime": "2022-02-07 15:00",
            "attendees": ["Sebastian", "Nikita", "Livia", "Julia"],
        },

        {
            "name": "Vrakunske miesenie",
            "place": "Vrakuna",
            "sport": "Petang",
            "note": "",
            "team": "Barcelona",
            "datetime": "2022-04-07 15:00",
            "attendees": ["Slavo", "Ondrej","Sebastian", "Nikita"],
        },

        {
            "name": "Hokejbalek",
            "place": "Bratislava",
            "sport": "Street hockey",
            "note": "",
            "team": "Barcelona",
            "datetime": "2022-02-10 15:00",
            "attendees": ["Slavo", "Ondrej","Sebastian", "Nikita", "Livia", "Julia", "Rene"],
        },

        {
            "name": "Trosku hroty",
            "place": "Bratislava",
            "sport": "Curling",
            "note": "",
            "team": "Sportovci",
            "datetime": "2022-11-10 15:00",
            "attendees": [],
        },

        {
            "name": "Grandslam",
            "place": "Bratislava",
            "sport": "Tennis",
            "note": "",
            "team": "Sportovci",
            "datetime": "2022-03-22 16:00",
            "attendees": [],
        },

        {
            "name": "Olympiada",
            "place": "Tokyo",
            "sport": "Javelin throw",
            "note": "",
            "team": "Experti",
            "datetime": "2022-02-08 12:21",
            "attendees": [],
        },

        {
            "name": "Turnaj v lolku",
            "place": "Unispace",
            "sport": "E-sport",
            "note": "",
            "team": "Experti",
            "datetime": "2022-02-06 14:40",
            "attendees": [],
        },

        {
            "name": "Tenisova exhibicia",
            "place": "Areal Jana Popluhara",
            "sport": "Tennis",
            "note": "",
            "team": null,
            "datetime": "2022-04-06 12:00",
            "attendees": [],
        },

        {
            "name": "Basket pre kazdeho",
            "place": "FMFI sports hall",
            "sport": "Basketball",
            "note": "Každý je vítaný! Príď si s nami trochu zahrať. Bude aj občerstvenie a naučíme ťa nejaké triky :) !",
            "team": null,
            "datetime": "2022-03-10 11:00",
            "attendees": [],
        },

        {
            "name": "Prisny volejbal",
            "place": "Areal Jana Popluhara",
            "sport": "Volleyball",
            "note": "Hľadáme skúsenejších hráčov volejbalu, ktorí by si s nami trochu zahádzali a zabavili sa.",
            "team": null,
            "datetime": "2022-02-05 8:00",
            "attendees": [],
        },

        {
            "name": "Asterix a olympijske hry",
            "place": "Tehelne pole",
            "sport": "Javelin throw",
            "note": "Vieš dobre hádzať? Zapoj sa! Nevieš dobre hádzať? Nevadí, zapoj sa a príď sa s nami zabaviť tiež. Všetci sú vítaní.",
            "team": null,
            "datetime": "2022-02-05 8:00",
            "attendees": [],
        },
    ],

    "requests": [
        {
            "team": "Kolegovci",
            "requesters": ["Sebastian", "Nikita"]
        },

        {
            "team": "Futbalisti",
            "requesters": ["Janko"]
        },

        {
            "team": "Barcelona",
            "requesters": ["Janko", "Hrusky", "Dynamo", "Adnrej"]
        },
    ],
}

export default storage;

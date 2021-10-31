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
        }
    ],

    "loggedUser": null,

    "teams": [
        {
            "name": "Kolegovci",
            "members": ["Janko"]
        },
        {
            "name": "Miesici",
            "members": ["Janko"]
        },
        {
            "name": "Futbalisti",
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
            "attendees": ["Janko", "Milan", "Tomino"],
        },
        {
            "name": "DL Boyz derby",
            "place": "Bratislava",
            "sport": "Futbal",
            "team": "Miesici",
            "datetime": "2021-11-06 20:00",
            "attendees": ["Lukáš", "Matej", "Filip"],
        },
        {
            "name": "Račiansky playoff",
            "place": "Bratislava",
            "sport": "Futbal",
            "team": "Futbalisti",
            "datetime": "2021-11-07 15:00",
            "attendees": [],
        },
    ],

}

export default storage;

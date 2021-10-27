const storage = {
  "users": [
    {"username": "Janko", "password": "Janko", "mail":"janko@gmail.com", "teams": ["Kolegovci", "Miesici"]},

    {"username": "Peter", "password": "Peter", "mail":"peter@gmail.com", "teams": ["Futbalisti"]},

    {"username": "Ondrej", "password": "Ondrej", "mail":"ondrej@gmail.com", "teams": ["Futbalisti"]}
  ],

  "loggedUser": null,

  "teams": [

    {"name": "Kolegovci", "members": ["Janko"]},
    {"name": "Miesici", "members": ["Janko"]},
    {"name": "Futbalisti", "members": ["Peter", "Ondrej"]}
  ],


}

export default storage;

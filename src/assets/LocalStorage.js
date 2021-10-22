const storage = {
  "users": [
    {"username": "Janko", "password": "Janko", "mail":"janko@gmail.com"},

    {"username": "Peter", "password": "Peter", "mail":"peter@gmail.com"},

    {"username": "Ondrej", "password": "Ondrej", "mail":"ondrej@gmail.com"}
  ],

  "loggedUser": null,

  "teams": [
    {"name": "Kolegovci", "members": ["Janko"]},
    {"name": "Miesici", "members": ["Janko"]},
    {"name": "Futbalisti", "members": ["Peter", "Ondrej"]}
  ],


}

export default storage;

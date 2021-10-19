export class LoginController {
    constructor() {
        this.users = JSON.parse(localStorage.getItem("db")).users;
    }

    login(email, password) {
        for (const user of this.users) {
            if (user.mail === email && user.password === password) {
                let db = JSON.parse(localStorage.getItem("db"));
                db.loggedUser = email;
                localStorage.setItem("db", JSON.stringify(db));
            }
        }
    }
}
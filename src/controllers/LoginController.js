import router from "../router";
export class LoginController {
    constructor() {
        this.users = JSON.parse(localStorage.getItem("db")).users;
    }

    login(username, password, targetPath) {
        for (const user of this.users) {
            if (user.username === username && user.password === password) {
                let db = JSON.parse(localStorage.getItem("db"));
                db.loggedUser = username;
                localStorage.setItem("db", JSON.stringify(db));
                console.log("successfully logged in!");
                router.push(targetPath);
            }
        }
    }
}
import storage from "@/assets/LocalStorage";

const LocalStorageController = {
    constructor: () => {
        if(LocalStorageController._instance){
            return LocalStorageController._instance
        }
        LocalStorageController._instance = this;
        if (!localStorage.getItem('db')) {
            localStorage.setItem("db", JSON.stringify(storage));
        }
    },

    save: async (key, value) => {
        let db = JSON.parse(localStorage.getItem("db"));
        db[key] = value;
        await localStorage.setItem("db", JSON.stringify(db));
        console.log("successfully changed key " + key + " to value " + value);
    },

    get: (key) => {
        return JSON.parse(localStorage.getItem("db"))[key];
    }
}

export default LocalStorageController;





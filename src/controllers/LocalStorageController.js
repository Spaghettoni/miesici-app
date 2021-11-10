import storage from "@/assets/LocalStorage";

const LocalStorageController = {
    constructor: () => {
        if(LocalStorageController._instance){
            return LocalStorageController._instance
        }
        LocalStorageController._instance = this;
        if (!localStorage.getItem('loggedUser')) {
            localStorage.setItem('loggedUser', null);
        }
    }
}

export default LocalStorageController;





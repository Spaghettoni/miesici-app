import storage from "@/assets/LocalStorage";
import {UsersController} from "@/controllers/UsersController";

export class LocalStorageController {

    constructor() {

        localStorage.setItem("db", JSON.stringify(storage));


    }








}





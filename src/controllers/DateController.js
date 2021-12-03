import TeamsController from "@/controllers/TeamsController";
import store from "@/store";
import {EventUser} from "@/store/Models";
import ZellersCongruence from "zeller";

const DateController = (() => {
    function constructor() {

        if (DateController._instance) {
            return DateController._instance
        }
        DateController._instance = this;

    }

    function getDateTimeString(datetime) {
        let arr = datetime.split(" ");
        let date = arr[0].split("-");
        let year = date[0];
        let month = date[1];
        let day = date[2];


        let timeString = arr[1];

        let ZellersCongruence = require("zeller");

        let weekDayString = ZellersCongruence(Number.parseInt(day), Number.parseInt(month), Number.parseInt(year), 'en')
        let dateString = formatDate(year, month, day);
        return timeString + ', ' + dateString + ' (' + weekDayString + ')';
    }

    function formatDate(year, month, day) {
        let yearString = ("" + year).slice(2);
        return day + "/" + month + "/" + yearString;
    }


    return {
        getDateTimeString
    }
})();

export default DateController
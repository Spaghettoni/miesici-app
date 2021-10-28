import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import router from './router'
import LocalStorageController from "./controllers/LocalStorageController";
import LoginController from "./controllers/LoginController";
import TeamsController from "./controllers/TeamsController";

console.log('main called');
LocalStorageController.constructor();
LoginController.constructor();
TeamsController.constructor();

const app = createApp(App);
app.use(router);

const requireComponent = require.context(
    // The relative path of the components folder
    './components',
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)

    // Get PascalCase name of component
    const componentName =

            // Gets the file name regardless of folder depth
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')

    app.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
    )
});

app.mount('#app');




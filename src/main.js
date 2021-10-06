import { createApp, h } from 'vue'
import Home from './App.vue'
import HelloWorld from "@/components/HelloWorld";
import NotFoundComponent from "@/components/NotFoundComponent";
import './assets/styles.css'

// const AboutComponent = { template: '<p>About page</p>' }
const routes = {
    '/': Home,
    '/about': HelloWorld
}

const App = {
    data: () => ({
        currentRoute: window.location.pathname
    }),

    computed: {
        CurrentComponent() {
            return routes[this.currentRoute] || NotFoundComponent
        }
    },

    render() {
        return h(this.CurrentComponent)
    }
}


createApp(App).mount('#app')

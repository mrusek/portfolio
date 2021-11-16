import { createRouter, createWebHashHistory } from 'vue-router';
// import Contact from '../components/contact';
//import Home from '../pages/Home';
// import Cv from '../components/cv';
// import Description from '../components/description';
//import App from '../App'
const routes = [
    // {
    //     path: '/', component: App, children: {
    //         path: '/', component: Home

    //     }
    // },

    // { path: '/contact', component: Contact },
    // { path: '/cv', component: Cv },
    // { path: '/description', component: Description },
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: routes
    }
)

export default router;
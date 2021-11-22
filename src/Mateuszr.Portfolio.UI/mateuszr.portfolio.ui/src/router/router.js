import { createRouter, createWebHashHistory } from 'vue-router';
import Contact from '../pages/Contact';
import Cv from '../pages/Cv';
import Description from '../pages/Description';
import Skills from '../pages/Skills';
import Home from '../pages/Home';
//import App from '../App'
const routes = [
    { path: '/', component: Home},
    { path: '/contact', component: Contact },
    { path: '/cv', component: Cv },
    { path: '/description', component: Description },
    { path: '/skills', component: Skills }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: routes
    }
)

export default router;
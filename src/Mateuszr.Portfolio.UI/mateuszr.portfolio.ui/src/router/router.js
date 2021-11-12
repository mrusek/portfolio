import VueRouter from 'vue-router';
import Contact from '../components/contact';
import Home from '../components/home';
import Cv from '../components/cv';
import Description from '../components/description';

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/cv', component: Cv },
    { path: '/description', component: Description },
]

const router = VueRouter.createRouter(
    {
        history: VueRouter.createWebHashHistory(),
        routes: routes
    }
)

export default router;
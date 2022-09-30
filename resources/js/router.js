import VueRouter from 'vue-router';

// Import single page
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import SinglePostPage from './pages/SinglePostPage';
import TagsIndexPage from './pages/Tags/TagsIndexPage';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/posts/:id',
            name: 'singlePost',
            component: SinglePostPage
        },
        {
            path: '/tags',
            name: 'tagsIndex',
            component: TagsIndexPage
        }
    ]
});

export default router
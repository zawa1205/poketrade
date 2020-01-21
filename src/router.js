import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import Post from './components/Post.vue';
import Mypage from './components/Mypage.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top },
    { path: '/post/:post_id', name:'post', component: Post },
    { path: '/mypage', component: Mypage }
    // { path: '/hage', component: Hage },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;

/**
 * Created by leo on 11/01/2017.
 */

import Vue from 'vue'
import VueRouer from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'

Vue.use(VueRouer);



// 配置路由
const router = new VueRouer();

router.map(routerConfig);

router.redirect({
    '/': '/home'
});

router.start(App, app);

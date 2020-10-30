import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const app = createApp(App);

import VeeUI from './packages';

app.use(VeeUI);

app.use(store).mount('#app');

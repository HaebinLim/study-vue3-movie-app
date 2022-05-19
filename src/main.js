import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import loadImage from './plugins/loadImage';


createApp(App)
	.use(router)		// $route, $router
	.use(store)			// $store
	.use(loadImage) // $loadImage로 사용
	.mount('#app')
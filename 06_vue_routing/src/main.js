import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import about from "@/pages/about.vue";
import home from "@/pages/home.vue";
import profile from "@/pages/profile.vue";

const routes = [
	{ path: "/", component: home },
	{ path: "/about", component: about },
	{ path: "/profile", component: profile },
	{ path: "/anagha", component: profile },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import about from "@/pages/about.vue";
import home from "@/pages/home.vue";
import profile from "@/pages/profile.vue";
import taskDetails from "@/pages/taskDetails.vue";

const routes = [
	{ path: "/", component: home },
	{ path: "/about", component: about },
	{ path: "/profile", component: profile },
	{ path: "/anagha", component: profile },
	{ path: "/tdetails/:any", name: "Task Details", component: taskDetails },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");

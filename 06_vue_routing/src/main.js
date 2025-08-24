import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import about from "@/pages/about.vue";
import home from "@/pages/home.vue";
import profile from "@/pages/profile.vue";
import taskDetails from "@/pages/taskDetails.vue";
import login from "@/pages/login.vue";

const routes = [
	{ path: "/", component: home },
	{ path: "/about", component: about },
	{ path: "/profile", component: profile },
	{ path: "/anagha", component: profile },
	{ path: "/tdetails/:any", name: "Task Details", component: taskDetails },
	{ path: "/login", name: "Login", component: login },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, from) => {
	// this code will run before every route change
	const user = localStorage.getItem("mytask_app_user");

	// if user is not logged in allow to go to home route
	if (!user && to.path === "/") return true;
	// if user is logged in don't allow to go to login route
	if (user && to.name === "Login") return from.path;
	// if user is logged in allow all routes
	if (user) return true;
	// if user is not logged in allow only login route
	if (!user && to.name === "Login") return true;
	// if user is not logged in don't allow other routes
	if (!user) return { name: "Login" };
});

createApp(App).use(router).mount("#app");

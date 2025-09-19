import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import home from "./pages/home.vue";
import productDetails from "./pages/productDetails.vue";

const routes = [
	{ path: "/", component: home },
	{ path: "/product-details", component: productDetails },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");

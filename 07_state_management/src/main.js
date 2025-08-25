import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import router from "./router.js";

const store = createStore({
	state() {
		return {
			count: 0,
			message: "Hello from Vuex Store!",
			studentName: "John Doe",
		};
	},
	getters: {
		greetMessage(state) {
			return `Welcome to our system, ${state.studentName}!`;
		},
	},
	mutations: {
		increment(state, payload = 0) {
			console.log(payload, "payload");
			if (payload && typeof payload === "number") {
				state.count = payload;
			} else {
				state.count++;
			}
		},
		updateStudentName(state, newName) {
			state.studentName = newName;
		},
	},
});

createApp(App).use(router).use(store).mount("#app");

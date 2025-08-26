import { createApp } from "vue";
import App from "./App.vue";

import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			counter: 5,
			studentName: "John Doe",
			employeeList: [],
		};
	},
	actions: {
		storeEmployee(contenxt, payload) {
			// Simulating an API call with setTimeout
			setTimeout(() => {
				contenxt.commit("updateEmployeeList", payload);
			}, 1000);
		},
	},
	getters: {
		greetMsg(state) {
			return `Hello, ${state.studentName}! Welcome to Vuex Store.`;
		},
	},
	mutations: {
		increment(state) {
			state.counter++;
		},
		setCounter(state, payload) {
			state.counter = payload;
		},
		setStudentName(state, payload) {
			state.studentName = payload;
		},
		updateEmployeeList(state, payload) {
			state.employeeList.push(payload);
		},
	},
});

createApp(App).use(store).mount("#app");

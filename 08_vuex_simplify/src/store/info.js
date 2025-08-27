export default {
	namespaced: true,
	state: () => ({
		studentName: "John Doe",
		employeeList: [],
	}),
	mutations: {
		setStudentName(state, payload) {
			state.studentName = payload;
		},
		updateEmployeeList(state, payload) {
			state.employeeList.push(payload);
		},
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
};

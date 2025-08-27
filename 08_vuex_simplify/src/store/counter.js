export default {
	namespaced: true,
	state() {
		return {
			counter: 5,
		};
	},
	actions: {},
	getters: {},
	mutations: {
		increment(state) {
			state.counter++;
		},
		setCounter(state, payload) {
			state.counter = payload;
		},
	},
};

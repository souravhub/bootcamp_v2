import { createStore } from "vuex";
import info from "@/store/info.js";
import counter from "@/store/counter.js";

const store = createStore({
	modules: {
		info: info,
		counterStore: counter,
	},
});

export default store;

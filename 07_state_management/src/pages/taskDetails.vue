<template>
	<div style="display: block">
		<div class="top">
			<button @click="$router.push('/')">Back</button>
			<h2>Task Details Page</h2>
		</div>
		<br />
		<hr />
		<div class="task">
			<p v-if="loading">task loading...</p>
			<div v-else-if="!loading && taskData">
				<h2>{{ taskData.title }}</h2>
				<p>{{ taskData.desc }}</p>
				<h4>{{ taskData.status ? "Completed" : "Pending" }}</h4>
			</div>
			<h4 v-else>Task not found</h4>
		</div>
	</div>
	<br />
	<hr />
	<section>
		<h2>{{ count }}</h2>
		<h2>{{ message }}</h2>
		<button @click="UpdateCounter">Update Me</button>
	</section>
</template>

<script>
import localData from "@/data/tasks.json";
import { mapState } from "vuex";
export default {
	data() {
		return {
			taskData: null,
			loading: false,
		};
	},
	computed: {
		...mapState({
			count: (state) => state.count,
			message: (state) => state.message,
		}),
	},
	methods: {
		fakeApiCall(taskId) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					// array find method to find task by matching id
					const task = localData.find((t) => t.id == taskId);
					if (task) {
						resolve(task);
					} else {
						reject(new Error(`Task with id ${taskId} not found`));
					}
				}, 1000); // simulate 500ms network delay
			});
		},
		UpdateCounter() {
			this.$store.commit("increment", 10);
		},
	},
	async mounted() {
		// this.$route.params.any  , we can call backend api to fetch and render data
		// if (this.$route.query.check == "no") return;
		this.loading = true;
		try {
			this.taskData = await this.fakeApiCall(this.$route.params.any);
		} catch (error) {
			console.log(error);
		} finally {
			this.loading = false;
		}
	},
};
</script>

<style scoped>
.task {
	/* border: 1px solid black; */
	padding: 8px;
	height: 300px;
	width: 200px;
	display: flex;
	flex-direction: column;
	cursor: pointer;
}
.top {
	display: flex;
	gap: 100px;
	align-items: center;
}
button {
	padding: 10px 20px;
	border: none;
	background-color: saddlebrown;
	color: white;
	font-size: 16px;
	border-radius: 5px;
	cursor: pointer;
}
h4 {
	color: red;
	text-align: center;
}
</style>

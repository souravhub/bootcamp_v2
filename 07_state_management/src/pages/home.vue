<template>
	<div>
		<Task
			v-for="task in tasks"
			:key="task.id"
			:title="task.title"
			:desc="task.desc"
			:status="task.status"
			@click="openTaskDetails(task)"
		/>
	</div>
	<br />
	<hr />
	<section>
		<h2>{{ count }}</h2>
		<h2>{{ message }}</h2>
		<button @click="UpdateCounter">Click Me</button>
		<br />
		<hr />
		<h3>{{ greetMessage }}</h3>
		<input type="text" name="" id="" v-model="student" />
		<button @click="saveInfo">Save Student</button>
	</section>
</template>

<script>
import Task from "@/components/Task.vue";
import localData from "@/data/tasks.json";
import { mapState, mapGetters } from "vuex";
export default {
	components: {
		Task,
	},
	data() {
		return {
			tasks: localData,
			student: "",
		};
	},
	computed: {
		...mapState({
			count: (state) => state.count,
			message: (state) => state.message,
		}),
		...mapGetters(["greetMessage"]),
	},
	methods: {
		// this.$router
		// this.$route
		openTaskDetails(task) {
			// console.log(task);
			// by url
			// this.$router.push("/tdetails");

			// by route name
			// this.$router.push({ name: "Task Details" });

			// dynamic path or route
			// this.$router.push(`/tdetails/gopal`);
			// this.$router.push(`/tdetails/${task.id}`);

			// matching dynamic pathe with route name
			this.$router.push({
				name: "Task Details",
				params: {
					any: task.id,
				},
				// query: {
				// 	check: "no",
				// },
			});
		},
		UpdateCounter() {
			this.$store.commit("increment");
		},
		saveInfo() {
			this.$store.commit("updateStudentName", this.student);
			this.student = "";
		},
	},
	mounted() {},
};
</script>

<style scoped>
div {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
button {
	padding: 10px 20px;
	border: none;
	background-color: royalblue;
	color: white;
	font-size: 16px;
	border-radius: 5px;
	cursor: pointer;
}
</style>

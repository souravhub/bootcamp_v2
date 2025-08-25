<template>
	<div v-if="!showTaskDetails">
		<Task
			v-for="task in tasks"
			:key="task.id"
			:title="task.title"
			:desc="task.desc"
			:status="task.status"
			@click="openTaskDetails(task)"
		/>
	</div>
	<TaskDetails
		v-else
		@onBack="showTaskDetails = false"
		:title="selectedTask.title"
		:desc="selectedTask.desc"
		:status="selectedTask.status"
	/>
</template>

<script>
import Task from "./components/Task.vue";
import TaskDetails from "./components/TaskDetails.vue";

export default {
	components: {
		Task,
		TaskDetails,
	},
	data() {
		return {
			tasks: [
				{
					id: 1,
					title: "Design login screen",
					desc: "Polish UI and add form validation",
					status: true,
				},
				{
					id: 2,
					title: "Wire up Google login",
					desc: "Use Firebase Auth; handle error states",
					status: false,
				},
				{
					id: 3,
					title: "Create redirect page",
					desc: "Centered loader + accessible message",
					status: true,
				},
				{
					id: 4,
					title: "Invoice API hookup",
					desc: "Fetch invoice list & map to store",
					status: false,
				},
				{
					id: 5,
					title: "Payment history view",
					desc: "Table + pagination + empty states",
					status: false,
				},
				{
					id: 6,
					title: "Add icon plugin",
					desc: "Configure unplugin-icons in Vite",
					status: true,
				},
				{
					id: 7,
					title: "Hero image full-width",
					desc: "Make section image responsive",
					status: true,
				},
				{
					id: 8,
					title: "Button styles",
					desc: "Primary + outline + glass variants",
					status: true,
				},
				{
					id: 9,
					title: "Fix Vue flags warning",
					desc: "Define __VUE_* flags in vue.config.js",
					status: true,
				},
				{
					id: 10,
					title: "Computed reactivity check",
					desc: "Audit updates and fix array/object sets",
					status: false,
				},
			],
			selectedTask: {},
			showTaskDetails: false,
		};
	},
	methods: {
		openTaskDetails(task) {
			this.selectedTask = task;
			this.showTaskDetails = true;
		},
	},
};
</script>

<style scoped>
div {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
</style>

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
</template>

<script>
import Task from "@/components/Task.vue";
import localData from "@/data/tasks.json";
export default {
	components: {
		Task,
	},
	data() {
		return {
			tasks: localData,
		};
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

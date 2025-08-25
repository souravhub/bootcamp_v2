<template>
	<div>
		<h2>{{ title }}</h2>
		<p>{{ desc }}</p>
		<h4>{{ status ? "Completed" : "Pending" }}</h4>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		},
		desc: {
			type: String,
		},
		status: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped>
div {
	border: 1px solid black;
	padding: 8px;
	height: 300px;
	width: 200px;
	display: flex;
	flex-direction: column;
	cursor: pointer;
}
</style>

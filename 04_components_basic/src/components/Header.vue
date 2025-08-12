<template>
	<div>
		<h1>This my header section</h1>
		<h2>This is our first component</h2>
		<h3>Cart ({{ itemCount }})</h3>
	</div>
</template>

<script>
export default {
	name: "Header",
	props: {
		itemCount: {
			type: Number,
			default: 0,
		},
	},
};
</script>

<style scoped>
h3 {
	text-align: right;
	margin-right: 20px;
}
</style>

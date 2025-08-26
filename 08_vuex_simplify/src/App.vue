<template>
	<h1>State Management</h1>
	<br />
	<hr />
	<section>
		<BlueComponent />
		<RedComponent />
	</section>
</template>

<script>
import BlueComponent from "./components/BlueComponent.vue";
import RedComponent from "./components/RedComponent.vue";
export default {
	name: "App",
	components: {
		BlueComponent,
		RedComponent,
	},
};
</script>

<style scoped>
section {
	width: 100vw;
	display: flex;
}
</style>

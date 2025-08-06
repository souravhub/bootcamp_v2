<template>
	<h1>You did it!</h1>
	<p>
		Visit
		<a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to
		read the documentation
	</p>
	<h2>{{ check }}</h2>
	<input type="text" name="" id="" v-model="name" />
	<h3>{{ name }}</h3>
	<!-- <h2>{{ check2 }}</h2> -->
</template>

<script>
export default {
	data() {
		return {
			check: "test",
			name: "",
		};
	},
	computed: {},
	methods: {},
	beforeCreate() {
		console.log("before create hook");
	},
	created() {
		console.log("created hook");
	},
	beforeMount() {
		console.log("before mount hook");
	},
	// remmber this hook is responsible for inserting vue component into the dom
	mounted() {
		// we write logic of functionlities that supposed to happen when a page open
		console.log("mounted hook");
		this.name = "sourav";
	},
	beforeUpdate() {
		console.log("before update");
	},
	updated() {
		console.log("update hook");
	},
	beforeUnmount() {
		//
	},
	unmounted() {
		//
	},
};
</script>

<!-- <script setup>
const check2 = "test2";
</script> -->

<style></style>

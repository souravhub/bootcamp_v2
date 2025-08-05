<template>
	<h1>Today we are discussing how vue works</h1>
	<h2 class="msg-class">{{ message }}</h2>
	<input type="text" v-model="name" />
	<br />
	<select name="select" id="" v-model="count">
		<option :value="100">100</option>
		<option :value="50">50</option>
		<option :value="10">10</option>
	</select>
	<h4>{{ fruitText }}</h4>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			message: "Hello Vue!",
			name: "",
			count: 10,
		};
	},
	computed: {
		fruitText() {
			const favrtFrtObj = {
				gopal: "Mango",
				anuradha: "Orange",
				anagha: "Apple",
			};

			const hasValue = favrtFrtObj[this.name.toLowerCase()];

			if (hasValue) {
				return `${this.name}'s favorite fruit is ${hasValue}, can eat ${this.count} ${hasValue}`;
			} else {
				return "Unknown Name";
			}
		},

		// this.[[variables name or computed property or methods name]]  to access or call
	},
	mounted() {},
};
</script>

<style scoped>
.msg-class {
	color: blue;
}
h1 {
	color: green;
}
hr {
	color: yellowgreen;
}
</style>

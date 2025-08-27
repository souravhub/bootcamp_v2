<template>
	<div class="red">
		<h2>Red Component</h2>
		<h3>Counter Value : {{ counter }}</h3>
		<section>
			<button @click="handleCounter2">Call Me</button>
			<button @click="handleCounterValue2">Set Count 10</button>
		</section>

		<h3>{{ greetMsg }}</h3>
		<section>
			<input type="text" name="" id="" v-model="student" />
			<button @click="updateStudent2">Save Student</button>
		</section>

		<section>
			<input
				type="text"
				name=""
				id=""
				v-model="employee"
				placeholder="Employee Name"
			/>
			<button @click="saveEmployee">Save Empolyee</button>
		</section>

		<section>
			<ul>
				<li v-for="(emp, ind) in employeeList" :key="ind">
					{{ emp }}
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	name: "RedComponent",
	data() {
		return {
			colorName: "red",
			student: "",
			employee: "",
		};
	},
	computed: {
		...mapState({
			counter: (state) => state.counterStore.counter,
			employeeList: (state) => state.info.employeeList,
		}),
		...mapGetters({ greetMsg: "info/greetMsg" }),
	},
	methods: {
		handleCounter2() {
			this.$store.commit("counterStore/increment");
		},
		handleCounterValue2() {
			this.$store.commit("counterStore/setCounter", 10);
		},
		updateStudent2() {
			this.$store.commit("info/setStudentName", this.student);
			this.student = "";
		},
		saveEmployee() {
			this.$store.dispatch("info/storeEmployee", this.employee);
			this.employee = "";
		},
	},
};
</script>

<style scoped>
.red {
	border: 2px solid red;
	padding: 10px;
	width: 49vw;
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
section {
	display: flex;
	gap: 10px;
	margin: 10px 0;
}
</style>

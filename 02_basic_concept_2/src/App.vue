<template>
	<h1>You did it!</h1>
	<!-- <button v-on:click="increaseNum">Click</button> -->

	<!-- <h4>{{ num }}</h4> -->
	<br />
	<!-- <div v-on:mouseover="increaseNum"></div> -->
	<!-- <div @mouseover="increaseNum"></div> -->
	<br />
	<!-- <input type="text" name="" id="" @input="increaseNum" /> -->

	<button class="login" @click="handleLogin" v-if="!isLoggedIn">Login</button>
	<button class="logout" @click="handleLogout" v-else>Logout</button>
	<br />
	<!-- <pre>Actual value:{{ isLoggedIn }}</pre> -->
	<p v-if="authLoading">Processing...</p>
	<p v-else-if="isLoggedIn">User Logged In</p>
	<p v-else>User Logged Out</p>

	<br />
	<div class="condition">
		<h4 v-if="isLoggedIn">Auth Text(if)</h4>
	</div>
	<h4 v-show="isLoggedIn">Auth Text(show)</h4>
</template>

<script>
export default {
	data() {
		return {
			num: 2,
			isLoggedIn: false,
			authLoading: false,
		};
	},
	computed: {
		logText() {
			if (this.authLoading) {
				return `User ${this.isLoggedIn ? "Logging Out" : "Logging In"}...`;
			} else {
				return `User ${this.isLoggedIn ? "Logged In" : "Logged Out"}!!!`;
			}
		},
	},
	methods: {
		increaseNum() {
			this.num = this.num + 2;
			this.secondMethod();
		},
		secondMethod() {
			console.log("second Method called");
		},
		handleLogin() {
			this.authLoading = true;
			setTimeout(() => {
				this.isLoggedIn = true;
				this.authLoading = false;
			}, 2000);
		},
		handleLogout() {
			this.authLoading = true;
			setTimeout(() => {
				this.isLoggedIn = false;
				this.authLoading = false;
			}, 2000);
		},
	},
};
</script>

<style scoped>
/* div {
	width: 100px;
	height: 100px;
	background: brown;
} */
.login {
	background: rgb(0, 128, 179);
}
.logout {
	background: red;
}
button {
	margin: 10px 0px;
}
</style>

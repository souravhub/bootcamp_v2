<template>
	<div class="login-page">
		<h2>Login</h2>

		<div class="form-group">
			<label for="email">Email</label>
			<input
				id="email"
				type="email"
				placeholder="Enter your email"
				v-model="email"
			/>
		</div>

		<div class="form-group">
			<label for="password">Password</label>
			<input
				id="password"
				type="password"
				placeholder="Enter your password"
				v-model="password"
			/>
		</div>

		<button class="login-btn" @click="handleLogin">
			{{ isAuthenticating ? "Authenticating..." : "Login" }}
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: "",
			password: "",
			isAuthenticating: false,
		};
	},
	methods: {
		handleLogin() {
			this.isAuthenticating = true;
			const userData = {
				email: this.email,
				password: this.password,
			};

			setTimeout(() => {
				localStorage.setItem("mytask_app_user", JSON.stringify(userData));
				this.$router.push("/");
				this.isAuthenticating = false;
			}, 1000);
		},
	},
};
</script>

<style scoped>
.login-page {
	max-width: 400px;
	margin: 50px auto;
	padding: 20px;
	border: 1px solid #ddd;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
}

h2 {
	text-align: center;
	margin-bottom: 20px;
}

.form-group {
	margin-bottom: 15px;
}

label {
	display: block;
	margin-bottom: 6px;
	font-weight: 600;
}

input {
	width: 100%;
	padding: 8px;
	border: 1px solid #bbb;
	border-radius: 4px;
	outline: none;
}

input:focus {
	border-color: #42b983;
	box-shadow: 0 0 4px rgba(66, 185, 131, 0.4);
}

.login-btn {
	width: 200px;
	padding: 10px;
	background: #42b983;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 600;
}

.login-btn:hover {
	background: #369f6b;
}
</style>

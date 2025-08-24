<template>
	<div>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink to="/profile">Profile</RouterLink>
		<div class="btn-group">
			<button
				class="btn login-btn"
				@click="$router.push('/login')"
				v-if="!isAuthenticated"
			>
				Login
			</button>
			<button class="btn logout-btn" v-else @click="handleLogout">
				Logout
			</button>
		</div>
	</div>
	<br />
	<hr />
	<RouterView />
</template>

<script>
export default {
	data() {
		return {
			isAuthenticated: false,
		};
	},
	methods: {
		handleLogout() {
			localStorage.removeItem("mytask_app_user");
			this.isAuthenticated = false;
			this.$router.push("/login");
		},
	},
	mounted() {
		setInterval(() => {
			const user = localStorage.getItem("mytask_app_user");
			if (user) {
				this.isAuthenticated = true;
			}
		}, 200);
	},
};
</script>

<style scoped>
div {
	display: flex;
	gap: 25px;
}

div a {
	text-decoration: none;
	font-size: 20px;
	font-weight: 500;
	padding: 5px 8px;
	color: black;
}
.router-link-active {
	border: 1px solid royalblue;
	font-weight: 600;
}

.btn-group {
	display: flex;
	gap: 12px;
	justify-content: center;
	margin-top: 20px;
}

.btn {
	padding: 10px 20px;
	border: none;
	border-radius: 6px;
	font-weight: 600;
	cursor: pointer;
	transition: 0.3s ease;
}

/* Login button */
.login-btn {
	background: #42b983;
	color: white;
}

.login-btn:hover {
	background: #369f6b;
}

/* Logout button */
.logout-btn {
	background: #ff4d4f;
	color: white;
}

.logout-btn:hover {
	background: #d9363e;
}
</style>

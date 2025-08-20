<template>
	<div>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink to="/profile">Profile</RouterLink>
	</div>
	<br />
	<hr />
	<RouterView />
</template>

<script></script>

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
</style>

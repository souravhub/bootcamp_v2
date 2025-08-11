<template>
	<div class="layout">
		<div class="header">
			<Header></Header>
		</div>
		<div class="left">Left content</div>
		<div class="right">Right content</div>
		<!-- Create, Import and use Footer component -->
		<div class="footer">Footer</div>
	</div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
	components: {
		Header,
	},
	data() {
		return {};
	},
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
}
.layout {
	/* fit the viewport exactly */
	height: 100dvh; /* best on mobile */
	min-height: 100vh; /* fallback */
	display: grid;
	grid-template-columns: 1fr 1fr; /* left | right */
	grid-template-rows: auto 1fr auto; /* header | content | footer */
	gap: 16px;
}
.header {
	grid-column: 1 / -1;
	background-color: red;
	color: white;
}
.left {
	grid-column: 1;
	overflow: auto;
	background-color: blue;
}
.right {
	grid-column: 2;
	overflow: auto;
	background-color: green;
}
.footer {
	grid-column: 1 / -1;
	background-color: yellow;
}

/* Optional: stack on small screens */
@media (max-width: 768px) {
	.layout {
		grid-template-columns: 1fr;
	}
	.left,
	.right {
		grid-column: 1;
	}
}
</style>

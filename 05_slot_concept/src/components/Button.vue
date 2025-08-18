<template>
	<!-- <button class="btn-primary">{{ label }}</button> -->

	<!-- <button class="btn-primary">
		<slot> </slot>
	</button> -->

	<!-- fallback content -->
	<!-- <button class="btn-primary">
		<slot>
			<h1>{{ label }}</h1>
		</slot>
	</button> -->

	<!-- named <slot></slot> -->
	<!-- <button class="btn-primary">
		<slot name="prefix"></slot>
		<span>{{ label }}</span>
		<slot name="suffix"></slot>
	</button> -->

	<!-- named and by default slot -->
	<!-- element inside slot tag used as fallback content -->
	<button class="btn-primary">
		<slot name="prefix"></slot>
		<slot><span>My fallback content</span></slot>
		<slot name="suffix"></slot>
	</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		label: {
			type: String,
			default: "Submit",
		},
	},
	data() {
		return {};
	},
};
</script>

<style>
.btn-primary {
	background: linear-gradient(135deg, #6366f1, #3b82f6);
	color: #fff;
	padding: 0.6rem 1.4rem;
	border-radius: 8px;
	border: none;
	font-weight: 600;
	cursor: pointer;
	transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
	transform: translateY(-2px);
	box-shadow: 0 6px 12px rgba(99, 102, 241, 0.3);
}
</style>

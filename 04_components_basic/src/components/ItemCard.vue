<template>
	<div class="card">
		<img :src="imgSrc" alt="title" />
		<h3>{{ itemName }}</h3>
		<p>{{ currency }} {{ price }}</p>
		<button @click="addToCart">Add to Cart</button>
		<!-- directly triggering custom event/emit -->
		<!-- <button @click="$emit('onAddToCart')">Add to Cart</button> -->
	</div>
</template>

<script>
export default {
	name: "ItemCard",
	// props: {
	// 	itemName,
	// },
	// props data can not be changed locally
	props: {
		itemName: String,
		price: {
			type: [Number, String],
			default: 0,
		},
		currency: {
			type: String,
			default: "$",
		},
		imgSrc: {
			type: String,
		},
	},
	// custom event
	emits: ["onAddToCart"],
	methods: {
		addToCart() {
			// triggering custom event
			this.$emit("onAddToCart", { name: this.itemName, price: this.price });
		},
	},
};
</script>

<style scoped>
.card {
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 8px;
	width: 160px;
	height: 300px;
}
img {
	height: 200px;
	width: 150px;
	display: block;
}
h3 {
	margin: 8px 0;
	font-size: 16px;
}
button {
	padding: 6px 10px;
	cursor: pointer;
}
</style>

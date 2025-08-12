<template>
	<div class="layout">
		<div class="header">
			<Header :itemCount="cartItems.length"></Header>
		</div>
		<div class="left">
			<!-- <div class="card" v-for="product in productList" :key="product.id">
				<img :src="product.imgSrc" alt="title" />
				<h3>{{ product.name }}</h3>
				<p>{{ product.currency }} {{ product.price }}</p>
				<button>Add to Cart</button>
			</div> -->
			<!-- <ItemCard
				itemName="Apple"
				price="35"
				currency="₹"
				imgSrc="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80&auto=format&fit=crop"
			/> -->
			<ItemCard
				v-for="product in productList"
				:key="product.id"
				:itemName="product.name"
				:price="product.price"
				:currency="product.currency"
				:imgSrc="product.imgSrc"
				@onAddToCart="handleAddToCart"
			/>
		</div>
		<div class="right">
			<!-- <input type="text" name="" id="" @input="onInput" /> -->
		</div>
		<!-- Create, Import and use Footer component -->
		<div class="footer">Footer</div>
	</div>
</template>
<script>
import Header from "@/components/Header.vue";
import ItemCard from "@/components/ItemCard.vue";
export default {
	components: {
		Header,
		ItemCard,
	},
	data() {
		return {
			productList: [
				{
					id: 1,
					name: "Apple (Royal Gala) — 1 kg",
					imgSrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80&auto=format&fit=crop",
					price: 149,
					currency: "₹",
				},
				{
					id: 2,
					name: "Banana — 1 dozen",
					imgSrc: "https://images.unsplash.com/photo-1571772805064-207c8435df79?w=800&q=80&auto=format&fit=crop",
					price: 59,
					currency: "₹",
				},
				{
					id: 3,
					name: "Whole Milk — 1 L",
					imgSrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80&auto=format&fit=crop",
					price: 65,
					currency: "₹",
				},
				{
					id: 4,
					name: "Bread — 400 g",
					imgSrc: "https://images.unsplash.com/photo-1571772805064-207c8435df79?w=800&q=80&auto=format&fit=crop",
					price: 45,
					currency: "₹",
				},
				{
					id: 5,
					name: "Eggs — 12 pcs",
					imgSrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80&auto=format&fit=crop",
					price: 85,
					currency: "₹",
				},
				{
					id: 6,
					name: "Basmati Rice — 5 kg",
					imgSrc: "https://images.unsplash.com/photo-1571772805064-207c8435df79?w=800&q=80&auto=format&fit=crop",
					price: 499,
					currency: "₹",
				},
				{
					id: 7,
					name: "Tomato — 1 kg",
					imgSrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80&auto=format&fit=crop",
					price: 39,
					currency: "₹",
				},
				{
					id: 8,
					name: "Onion — 1 kg",
					imgSrc: "https://images.unsplash.com/photo-1571772805064-207c8435df79?w=800&q=80&auto=format&fit=crop",
					price: 45,
					currency: "₹",
				},
				{
					id: 9,
					name: "Potato — 1 kg",
					imgSrc: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80&auto=format&fit=crop",
					price: 35,
					currency: "₹",
				},
				{
					id: 10,
					name: "Cooking Oil — 1 L",
					imgSrc: "https://images.unsplash.com/photo-1571772805064-207c8435df79?w=800&q=80&auto=format&fit=crop",
					price: 155,
					currency: "₹",
				},
			],
			cartItems: [],
		};
	},
	methods: {
		handleAddToCart(data) {
			this.cartItems.push(data);
		},
		// onInput(sourav) {
		// 	console.log(sourav.target.value, "chek");
		// },
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
	/*	background-color: blue;*/
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
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

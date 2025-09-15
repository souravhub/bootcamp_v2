<template>
	<h1>Pinia State Management</h1>
	<h3>{{ store.name }}</h3>
	<h3>Count: {{ store.count }}</h3>
	<h3>Double Count: {{ store.doubleCount }}</h3>

	<button @click="handleIncrement">Click Me</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();

const handleIncrement = () => {
	// store.increment();

	// direactly updating store from vue file/component
	store.$patch({
		count: store.count + 1,
	});
};
</script>

<style scoped></style>

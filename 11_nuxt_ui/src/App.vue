<template>
	<UApp>
		<div class="p-6">
			<h1>Hello World !!</h1>
			<UButton
				:icon="mode === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
				color="neutral"
				variant="ghost"
				@click="mode = mode === 'dark' ? 'light' : 'dark'"
			/>
			<UDrawer
				:ui="{ content: 'h-full', overlay: 'bg-inverted/30' }"
				:open="isDrawerOpen"
				@close="isDrawerOpen = false"
				direction="right"
				@drag="onDrag"
			>
				<template #content>
					<h1>This is my drawer</h1>
				</template>
			</UDrawer>
			<UButton @click="isDrawerOpen = !isDrawerOpen">Toggle Drawer</UButton>
		</div>
	</UApp>
</template>

<script>
import { useColorMode } from "@vueuse/core";
export default {
	data() {
		return {
			mode: useColorMode(),
			isDrawerOpen: false,
		};
	},
	methods: {
		onDrag() {
			console.log("dragging");
		},
	},
};
</script>

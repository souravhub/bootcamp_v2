<template>
	<h2>Slots Concept</h2>
	<Button>
		<h2>Click Me</h2>
		<h4>Save</h4>
	</Button>
	<br />
	<hr />
	<Button></Button>
	<br />
	<hr />
	<Button>
		<template v-slot:prefix>
			<IconHeroiconsOutlineHome style="font-size: 24px" />
		</template>
	</Button>
	<br />
	<hr />
	<Button>
		<template #suffix>
			<IconHeroiconsSolidArrowPath style="font-size: 24px" />
		</template>
	</Button>
	<br />
	<hr />
	<Button>
		<h4>Save it</h4>
		<template #suffix>
			<IconHeroiconsSolidArrowPath style="font-size: 24px" />
		</template>
	</Button>
</template>

<script>
import Button from "./components/Button.vue";

export default {
	components: {
		Button,
	},
};
</script>

<style scoped></style>

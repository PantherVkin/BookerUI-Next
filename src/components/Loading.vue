<template>
	<div
		class="text-center loading"
		:class="{
			fullscreen: fullscreen,
		}"
		:style="{
			backgroundColor: background,
			color: color,
		}"
	>
		<i
			class="loading-icon iconfont"
			:class="{
				['icon-' + icon]: icon,
			}"
		>
		</i>
		<span class="px-3"> {{ text }}</span>
	</div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Loading',
	props: {
		text: {
			type: String,
			default: '拼命加载中',
		},
		icon: {
			type: String,
			default: 'loading',
		},
		background: {
			type: String,
			default: 'rgba(0, 0, 0, 0.8)',
		},
		color: {
			type: String,
			default: '#1989fa',
		},
		fullscreen: {
			type: Boolean,
			default: false,
		},
	},
})
</script>

<style lang="scss" scoped>
.loading {
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;

	&.fullscreen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}

	.loading-icon {
		margin-right: 15px;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>
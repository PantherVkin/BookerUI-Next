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

@font-face {
	font-family: 'iconfont';
	src: url('//at.alicdn.com/t/font_2463620_tp01owhtm7.eot?t=1617417432475'); /* IE9 */
	src: url('//at.alicdn.com/t/font_2463620_tp01owhtm7.eot?t=1617417432475#iefix')
			format('embedded-opentype'),
		/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,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')
			format('woff2'),
		url('//at.alicdn.com/t/font_2463620_tp01owhtm7.woff?t=1617417432475')
			format('woff'),
		url('//at.alicdn.com/t/font_2463620_tp01owhtm7.ttf?t=1617417432475')
			format('truetype'),
		/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('//at.alicdn.com/t/font_2463620_tp01owhtm7.svg?t=1617417432475#iconfont')
			format('svg'); /* iOS 4.1- */
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 32px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-loading:before {
	content: '\e62b';
}

.icon-loading1:before {
	content: '\e61d';
}

.icon-loading2:before {
	content: '\e8fd';
}

.icon-loading3:before {
	content: '\e663';
}

.icon-loading4:before {
	content: '\e6cd';
}

.icon-Loading:before {
	content: '\e62c';
}

.icon-loading5:before {
	content: '\e891';
}

.icon-loading6:before {
	content: '\e782';
}
</style>
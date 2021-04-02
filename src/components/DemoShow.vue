<template>
	<div class="title">
		<h2>{{ title }}</h2>
		<p>{{ description }}</p>
	</div>
	<div class="wrap">
		<div class="components">
			<slot></slot>
		</div>

		<div
			:class="{
				container: true,
				autoShow: isActive,
			}"
		>
			<pre>
				<code class="language-xml line-numbers">     
					{{ codeStr }}  
				</code>
			</pre>
		</div>

		<div @click="handleClick" :class="{ show: isActive, button: true }">
			{{ isActive ? '隐藏代码' : '显示代码' }}
		</div>
	</div>
</template>
<script >
import { defineComponent, ref } from 'vue'
import Prismjs from 'prismjs'
import 'prismjs/themes/prism.css'


export default defineComponent({
	props: {
		title: String,
		description: String,
		code: String,
	},
	setup(props) {
		const isActive = ref(false)
		const handleClick = () => {
			isActive.value = !isActive.value
		}
		setTimeout(() => {
			Prismjs.highlightAll()
		}, 10)

		const codeStr = '' + props.code
		return {
			isActive,
			handleClick,
			codeStr,
		}
	},
})
</script>


<style lang="scss" scoped>
.title {
	color: #1f2f3d;

	h2 {
		font-size: 22px;
		margin: 55px 0 20px;
	}
}
.wrap {
	box-shadow: 0 0 1px 0 #ccc;
	border: 1px solid #dedede;

	.components {
		border-bottom: 1px solid #ccc;
		padding: 10px;
		display: flex;
	}

	.container {
		overflow: hidden;
		height: 0;
		transition: height 0.2s linear;

		&.autoShow {
			height: 200px;
			overflow: scroll;
		}

		pre {
			margin: 0;
			border-radius: 0;
		}

		.language-html {
			padding: 0;
		}
	}

	.button {
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		border: none;
		cursor: pointer;
		text-align: center;
		color: #1989fa;
		width: 100%;

		&:hover {
			background-color: #fafafa;
			opacity: 0.5;
		}
		&:hover i {
			color: #409eff;
		}
	}

	.show {
		border-top: 1px solid #ccc;
	}
}
</style>

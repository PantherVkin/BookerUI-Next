<template>
	<div class="changelog">
		<div>
			<h1>快速上手</h1>
			<p>本节将介绍如何在项目中使用 BookerUI-Next。</p>
		</div>

		<div>
			<h2>使用 vue-cli@4.5</h2>
			<p>使用新版的 vue-cli 快速构建vue3 的项目。</p>
		</div>
		<div>
			<h2>局部引入</h2>
			<pre>
				<code class="language-javascript line-numbers">     
import { DropDown, DropDownItem, AttrTable } from 'bookerui-next'
				</code></pre>
		</div>
		<div>
			<demo-show
				title="开始使用"
				description="各个组件的使用方法请参阅它们各自的文档。"
				:code="demo1"
			>
				<drop-down trigger="mouseenter">
					<template v-slot:title> 基础下拉 </template>
					<drop-down-item> 新建文章 </drop-down-item>
					<drop-down-item> 新建文章 </drop-down-item>
					<drop-down-item> 新建文章 </drop-down-item>
					<drop-down-item> 新建文章 </drop-down-item>
				</drop-down>
			</demo-show>
		</div>
	</div>
</template>
<script>
import { defineComponent } from 'vue'
import Prismjs from 'prismjs'
import 'prismjs/themes/prism.css'
import DropDown from '@/components/DropDown.vue'
import DropDownItem from '@/components/DropDownItem.vue'
import DemoShow from '@/components/DemoShow.vue'

export default defineComponent({
	components: {
		DemoShow,
		DropDown,
		DropDownItem,
	},
	setup() {
		setTimeout(() => {
			Prismjs.highlightAll()
		}, 10)

        const demo1 = `
		<drop-down trigger="mouseenter">
			<template v-slot:title> 基础下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
		`
		return {
            demo1
        }
	},
})
</script>

<style lang="scss" scoped>
.changelog {
	a {
		color: #409eff;
		text-decoration: none;
		font-size: 14px;

		&:hover {
			color: #1989fa;
		}
	}

	.comp-item {
		p {
			padding: 5px 10px;
			font-size: 14px;
		}
	}
}
</style>
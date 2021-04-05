<template>
	<div class="changelog">
		<div>
			<h1>安装</h1>
			<p>
				BookerUI-Next 是一个基于 Vue3 的 UI 组件库。
			</p>
		</div>

		<div>
			<h2>安装</h2>
            <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
			<pre><code class="language-javascript line-numbers"> 
npm i -D bookerui-next # 或 yarn i -D bookerui-next
</code>
</pre>
		</div>
		<div>
			<h2>局部引入</h2>
			<pre>
				<code class="language-javascript line-numbers">     
import { DropDown, DropDownItem, AttrTable } from 'bookerui-next'
				</code></pre>
		</div>
		<div>
			<h2>组件列表</h2>
            <p>完整组件列表和引入方式。</p>
			<pre>
				<code class="language-javascript line-numbers">     
import { 
  DropDown, 
  DropDownItem, 
  AttrTable, 
  Loading, 
  Message, 
  Modal, 
  ValidateInput,
  ValidateForm, 
  Uploading
  } from 'bookerui-next'
				</code></pre>
		</div>
	</div>
</template>
<script>
import { defineComponent } from 'vue'
import Prismjs from 'prismjs'
import 'prismjs/themes/prism.css'

export default defineComponent({
	setup() {
		setTimeout(() => {
			Prismjs.highlightAll()
		}, 10)

		return {}
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
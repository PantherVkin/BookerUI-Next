<template>
	<div>
		<h4>基础用法</h4>
		移动到下拉菜单上，展开更多操作。
		<drop-down trigger="mouseenter">
			<template v-slot:title> 基础下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
	</div>

	<div>
		<h4>触发方式</h4>
		可以配置 click 激活或者 hover 激活。
		<drop-down trigger="click">
			<template v-slot:title> click下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>

		<drop-down trigger="mouseenter">
			<template v-slot:title> hover下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
	</div>

	<div>
		<h4>触发方式</h4>
		Dropdown 组件提供 用户自定义函数。
		<drop-down trigger="click" :command="command">
			<template v-slot:title> click下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
	</div>


</template>
<script>
import { defineComponent } from 'vue'
import DropDown from '@/components/DropDown.vue'
import DropDownItem from '@/components/DropDownItem.vue'

export default defineComponent({
	components: {
		DropDown,
		DropDownItem,
	},
	setup() {
		const command = () => {
			console.log('CallBack...')
		}
		return {
			command,
		}
	},
})
</script>
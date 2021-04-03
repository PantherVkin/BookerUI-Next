<template>
	<div>
		<h2>Dropdown 下拉菜单</h2>
		<p>将动作或菜单折叠到下拉菜单中。</p>
	</div>
	<demo-show
		title="基础用法"
		description="DropDown的基础用法。"
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
	<demo-show
		title="触发方式"
		description="可以配置 click 激活或者 mouseenter 激活。"
		:code="demo2"
	>
		<drop-down trigger="click" class="drop-down">
			<template v-slot:title> click下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
		<drop-down trigger="mouseenter" class="drop-down">
			<template v-slot:title> mouseenter下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
	</demo-show>

	<attr-table :data="DropDownData" title="DropDown Attributes"></attr-table>
	<attr-table :data="DropDownItemData" title="Slots Attributes"></attr-table>
</template>
<script>
import { defineComponent } from 'vue'
import DropDown from '@/components/DropDown.vue'
import DropDownItem from '@/components/DropDownItem.vue'
import DemoShow from '@/components/DemoShow.vue'
import AttrTable from '@/components/AttrTable.vue'

export default defineComponent({
	components: {
		DemoShow,
		DropDown,
		DropDownItem,
		AttrTable,
	},
	setup() {
		const command = () => {
			console.log('CallBack...')
		}
		const demo1 = `
		<drop-down trigger="mouseenter">
			<template v-slot:title> 基础下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
		`
		const demo2 = `
		<drop-down trigger="click" class="drop-down">
			<template v-slot:title> click下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
		<drop-down trigger="mouseenter" class="drop-down">
			<template v-slot:title> mouseenter下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
		`
		const DropDownData = [
			{
				params: 'trigger',
				desc: '触发下拉的行为',
				type: 'string',
				select: 'click, mouseenter',
				default: 'click',
			},
			{
				params: 'command',
				desc: '点击菜单项触发的事件回调',
				type: 'function',
				select: 'command',
				default: '/',
			},
			{
				params: 'timeout',
				desc: '下拉菜单的延时',
				type: 'number',
				select: '/',
				default: '200',
			},
		]

		const DropDownItemData = [
			{
				params: 'DropDown',
				desc: '下拉列表，通常是 <drop-down-item> 组件',
				type: 'Component',
				select: 'DropDownItem',
				default: '/',
			},
			{
				params: 'DropDownItem',
				desc: '触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件',
				type: 'Component',
				select: '*',
				default: '/',
			},
		]
		return {
			command,
			demo1,
			demo2,
			DropDownData,
			DropDownItemData
		}
	},
})
</script>

<style lang="scss" scoped>
.drop-down {
	margin-right: 20px;
}
</style>
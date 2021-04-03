<template>
	<div>
		<h2>Table 表格</h2>
		<p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
	</div>
	<demo-show
		title="基础用法"
		description="基础的表格展示用法。"
		:code="DemoCode"
	>
		<attr-table  :data="TableData" title="基础Table"></attr-table>
	</demo-show>

	<demo-show
		title="带边框表格"
		description="带边框的表格用法。"
		:code="Demo1Code"
	>
		<attr-table :border="true" :data="TableData" title="Border Table"></attr-table>
	</demo-show>

    <demo-show
		title="可定制的Column"
		description="可定制表格的Column。"
		:code="Demo2Code"
	>
		<attr-table :columns="Demo2Columns" :data="Demo2Data" title="自定义Column"></attr-table>
	</demo-show>

	<attr-table :data="TableData" title="Table Attributes"></attr-table>
</template>
<script>
import { defineComponent } from 'vue'
import DemoShow from '@/components/DemoShow.vue'
import AttrTable from '@/components/AttrTable.vue'

export default defineComponent({
	components: {
		DemoShow,
		AttrTable,
	},
	setup() {
        const DemoCode = `
        <attr-table  :data="TableData" title="基础Table"></attr-table>
        
        const TableData = [
			{
				params: 'title',
				desc: '表格标题',
				type: 'string',
				select: '/',
				default: 'Attributes',
			},
			{
				params: 'data',
				desc: '定义表格数据',
				type: 'Object',
				select: '/',
				default: '/',
            },
            {
				params: 'columns',
				desc: '定义表格Column',
				type: 'Array',
				select: '/',
				default: '/',
            },
		]
        `
        const Demo1Code = `
        <attr-table :border="true" :data="TableData" title="Border Table"></attr-table>`

        const Demo2Columns = [
			{
				title: '参数',
				dataIndex: 'params',
				key: 'age',
			},
			{
				title: '说明',
				dataIndex: 'desc',
				key: 'age',
			},
			{
				title: '类型',
				dataIndex: 'type',
				key: 'age',
			}
        ]
        const Demo2Data = [
			{
				params: 'DropDown',
				desc: '下拉列表，通常是 <drop-down-item> 组件',
				type: 'component',
			},
			{
				params: 'DropDownItem',
				desc: '触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件',
				type: 'component',
			},
		]


        const Demo2Code = `
        <attr-table :columns="Demo1Columns" :data="Demo1Data" title="自定义Column"></attr-table>
        
        const Demo1Data = [
			{
				params: 'DropDown',
				desc: '下拉列表，通常是 <drop-down-item> 组件',
				type: 'component',
			},
			{
				params: 'DropDownItem',
				desc: '触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件',
				type: 'component',
			},
		]
        `


		const TableData = [
			{
				params: 'title',
				desc: '表格标题',
				type: 'String',
				select: '/',
				default: 'Attributes',
            },
            {
				params: 'border',
				desc: '表格边框',
				type: 'Boolean',
				select: 'true , false',
				default: 'false',
            },
            {
				params: 'columns',
				desc: '定义表格Column',
				type: 'Array',
				select: '/',
				default: '/',
            },
			{
				params: 'data',
				desc: '定义表格数据',
				type: 'Object',
				select: '/',
				default: '/',
            },
		]

		return {
            DemoCode,
            Demo1Code,
            Demo2Code,
            TableData,
            Demo2Columns,
			Demo2Data
		}
	},
})
</script>

<style lang="scss" scoped>
.drop-down {
	margin-right: 20px;
}
</style>
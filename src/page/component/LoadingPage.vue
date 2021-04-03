<template>
	<div>
		<h2>Loading 加载</h2>
		<p>加载数据时显示动效。</p>
	</div>
	<demo-show
		title="区域加载"
		description="在容器中加载数据时显示。"
		:code="DemoCode"
	>
		<loading></loading>
	</demo-show>

	<demo-show
		title="自定义"
		description="可自定义加载文案、图标和背景色。"
		:code="Demo1Code"
	>
		<loading text="Loading..." icon="loading6" background="#f90"> </loading>
	</demo-show>

	<demo-show
		title="整页加载"
		description="页面数据加载时显示。"
		:code="Demo2Code"
	>
		<loading :fullscreen="fullscreen"> </loading>
		<button class="click-button" @click="handleClick">点击整页加载</button>
	</demo-show>

	<attr-table :data="TableData" title="Table Attributes"></attr-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
import DemoShow from '@/components/DemoShow.vue'
import AttrTable from '@/components/AttrTable.vue'
import Loading from '@/components/Loading.vue'

export default defineComponent({
	components: {
		DemoShow,
		AttrTable,
		Loading,
	},
	setup() {
		const DemoCode = `
        <loading></loading>`

		const Demo1Code = `
        <loading text="Loading..." icon="loading6" background="#f90"> </loading>
        `

        const Demo2Code = `
		<loading :fullscreen="fullscreen"> </loading>
        `
        const fullscreen = ref(false)
        const handleClick = () => {
            fullscreen.value = true
            setTimeout(() => {
            fullscreen.value = false
            }, 2000)
        }

		const TableData = [
			{
				params: 'text',
				desc: '加载时的文本',
				type: 'String',
				select: '/',
				default: '拼命加载中',
			},
			{
				params: 'icon',
				desc: '加载图标',
				type: 'String',
				select: 'loading , loading1 , loading2 , loading3 , loading4 ...',
				default: 'loading',
			},
			{
				params: 'background',
				desc: '遮罩背景色',
				type: 'String',
				select: '/',
				default: 'rgba(0, 0, 0, 0.8)',
			},
			{
				params: 'color',
				desc: '图标和文字颜色',
				type: 'String',
				select: '/',
				default: '#1989fa',
            },
            {
				params: 'fullscreen',
				desc: '是否全屏加载',
				type: 'Boolean',
				select: 'true , false',
				default: 'false',
			},
		]

		return {
			DemoCode,
            Demo1Code,
            Demo2Code,
            TableData,
            handleClick,
            fullscreen
		}
	},
})
</script>

<style lang="scss" scoped>
.drop-down {
	margin-right: 20px;
}
.click-button {
	width: 100px;
	height: 40px;
	margin-top: 20px;
	outline: none;
	background-color: #fff;
	border: 1px solid #ccc;
	cursor: pointer;
	color: #1989fa;
}
</style>
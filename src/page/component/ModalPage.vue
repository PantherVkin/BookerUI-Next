<template>
	<div>
		<h2>Modal 对话框</h2>
		<p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
	</div>

	<demo-show
		title="基础用法"
		description="弹出一个对话框，适合需要定制性更大的场景。"
		code="<modal ></modal>"
	>
		<modal
			v-if="modalDemo1"
			v-on="{
				clickEnsure: handleClick,
				clickCancel: handleClick,
				clickClose: handleClick,
			}"
		></modal>
		<button class="click-button" @click="handleClick('modalDemo1')">
			点击打开
		</button>
	</demo-show>

	<demo-show
		title="自定义内容"
		description="Modal 组件的内容可以是任意的。"
		:code="DemoCode2"
	>
		<modal
			v-if="modalDemo2"
			v-on="{
				clickEnsure: handleClick,
				clickCancel: handleClick,
				clickClose: handleClick,
			}"
		>
			<h3>这是一个自定义内容</h3>
            <div :style="{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#00f'}"></div>
		</modal>

		<button class="click-button" @click="handleClick('modalDemo2')">
			点击打开
		</button>
	</demo-show>

	<attr-table :data="AttrTable" title="Modal Attributes"></attr-table>
    <attr-table :data="EventsTable" title="Modal Events"></attr-table>
</template>
<script>
import { defineComponent, ref, Ref } from 'vue'
import DemoShow from '@/components/DemoShow.vue'
import AttrTable from '@/components/AttrTable.vue'
import Modal from '@/components/Modal.vue'

export default defineComponent({
	components: {
		DemoShow,
		AttrTable,
		Modal,
	},
	setup() {
		const modalDemo1 = ref(false)
		const modalDemo2 = ref(false)
		const handleClick = (val) => {
			if (val == 'modalDemo1') {
				modalDemo1.value = !modalDemo1.value
			} else if (val == 'modalDemo2') {
				modalDemo2.value = !modalDemo2.value
            } else{
				modalDemo1.value = false
				modalDemo2.value = false
			}
		}

        const DemoCode2 = `
        <modal>
			<h3>这是一个自定义内容</h3>
            <div :style="{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#00f'}"></div>
		</modal>`
		const AttrTable = [
			{
				params: 'title',
				desc: 'Modal标题',
				type: 'String',
				select: '/',
				default: '提示',
			},
			{
				params: 'modal',
				desc: '是否需要遮罩层',
				type: 'Boolean',
				select: 'true , false',
				default: 'true',
            },
            {
				params: 'slot',
				desc: 'Modal 的内容',
				type: '*',
				select: '/',
				default: '这是一段提示文字。',
            },
        ]
        
        const EventsTable = [
			{
				params: 'click-cancel',
				desc: '取消的回调。',
				type: 'Function',
				select: '/',
				default: '/',
			},
			{
				params: 'click-ensure',
				desc: '确认的回调。',
				type: 'Function',
				select: '/',
				default: '/',
            },
            {
				params: 'click-close',
				desc: '关闭的回调。',
				type: 'Function',
				select: '/',
				default: '/',
            },
		]

		return {
			modalDemo1,
			modalDemo2,
            handleClick,
            DemoCode2,
            AttrTable,
            EventsTable
		}
	},
})
</script>

<style lang="scss" scoped>
.click-button {
	width: 100px;
	height: 40px;
	margin-top: 20px;
	margin-right: 20px;
	outline: none;
	background-color: #fff;
	border: 1px solid #ccc;
	cursor: pointer;
	color: #1989fa;
}
</style>



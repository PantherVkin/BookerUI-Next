<template>
	<div>
		<h2>Message 消息提示</h2>
		<p>常用于主动操作后的反馈提示。</p>
	</div>
	<demo-show
		title="基础用法"
		description="顶部出现，3 秒后自动消失。"
		code="<message></message>"
	>
		<message></message>
	</demo-show>


	<attr-table :data="TableData" title="Table Attributes"></attr-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
import DemoShow from '@/components/DemoShow.vue'
import AttrTable from '@/components/AttrTable.vue'
import Message from '@/components/Message.vue'

export default defineComponent({
	components: {
		DemoShow,
		AttrTable,
		Message,
	},
	setup() {
		const messageSuccess = {
			type: 'success',
			message: '这是一条成功的消息',
            status: true,
            timeout: 0,
		}
        const messageError = {
			type: 'error',
			message: '这是一条失败的消息',
            status: true,
            timeout: 0
        }
        const messageWarning = {
			type: 'warning',
			message: '这是一条警告的消息',
            status: true,
            timeout: 0
        }
        const messageInfo = {
			type: 'info',
			message: '这是一条提示的消息',
            status: true,
            timeout: 0
        }

        const handleClick = (tag) => {
            if (tag ) {
                messageSuccess.timeout = 3000
            }

            return 
        }

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
            messageSuccess,
            messageError,
            messageWarning,
            messageInfo,
            TableData,
            handleClick,
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
    &:hover {
        opacity: 0.5;
    }
}
</style>

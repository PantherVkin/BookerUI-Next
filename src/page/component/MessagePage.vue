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
    <demo-show
        title="全局createMessage用法"
        description="自定义创建Message组件的全局方法。"
        code="createMessage('这是一条成功的消息', 'success', 2000)"
    >
        <button class="click-button" @click="handleClick(messageSuccess)">成功</button>
    </demo-show>

    <demo-show
        title="不同状态"
        description="用来显示「成功、警告、消息、错误」类的操作反馈。"
        code="<message></message>"
    >
        <button class="click-button" @click="handleClick(messageSuccess)">成功</button>
        <button class="click-button" @click="handleClick(messageError)">失败</button>
        <button class="click-button" @click="handleClick(messageWarning)">警告</button>
        <button class="click-button" @click="handleClick(messageInfo)">提示</button>
    </demo-show>

    <demo-show
        title="使用 HTML 片段"
        description="将useHtml属性设置为 true，message 就会被当作 HTML 片段处理。"
        code="createMessage('<h3>这是一条警告的消息</h3>', 'warning', 2000, true)"
    >
        <button class="click-button" @click="handleClick(messageUseHtml)">HTML片段</button>
    </demo-show>
    
	<attr-table :data="TableData" title="Table Attributes"></attr-table>
</template>
<script>
import { defineComponent, ref } from 'vue'
import DemoShow from '@/components/DemoShow.vue'
import AttrTable from '@/components/AttrTable.vue'
import Message from '@/components/Message.vue'
import createMessage from '@/hooks/useMessage'

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
            timeout: 2000
		}
        const messageError = {
			type: 'error',
			message: '这是一条失败的消息',
            timeout: 2000
        }
        const messageWarning = {
			type: 'warning',
			message: '这是一条警告的消息',
            timeout: 2000
        }
        const messageInfo = {
			type: 'info',
			message: '这是一条提示的消息',
            timeout: 2000
        }

        const messageUseHtml = {
			type: 'warning',
			message: '<h3>这是一条警告的消息</h3>',
            timeout: 2000,
            useHtml: true
		}
        const handleClick = (tag) => {
            createMessage(tag.message, tag.type, tag.timeout, tag.useHtml)
            return 
        }

		const TableData = [
			{
				params: 'message',
				desc: '消息文字',
				type: 'String',
				select: '/',
				default: '这是一条成功的消息',
			},
			{
				params: 'type',
				desc: '提示类型',
				type: 'String',
				select: 'success , error , info , warning',
				default: 'success',
			},
			{
				params: 'timeout',
				desc: '显示时间, 毫秒。设为 0 则不会自动关闭。',
				type: 'Number',
				select: '/',
				default: '3000',
			},
			{
				params: 'onClose',
				desc: '关闭时的回调函数。',
				type: 'Function',
				select: '/',
				default: '/',
            },
            {
				params: 'useHtml',
				desc: '是否将 message 属性作为 HTML 片段处理',
				type: 'boolean',
				select: '/',
				default: 'false',
			},
		]

		return {
            messageSuccess,
            messageError,
            messageWarning,
            messageInfo,
            messageUseHtml,
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

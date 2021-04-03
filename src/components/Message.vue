<template>
	<div
		v-if="messageData.status"
		class="message"
		:class="{
			['message-' + messageData.type]: messageData.status,
		}"
	>
		<i
			class="iconfont"
			:class="{
				['icon-' + messageData.type]: messageData.status,
			}"
		></i>
		<div class="content">{{ messageData.message }}</div>
		<i class="iconfont icon-close" @click="handleClick"></i>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue'

interface MessageProps {
	type: 'success' | 'error' | 'info' | 'warning'
	message: string
	status: boolean
	timeout?: number
}

export default defineComponent({
	props: {
		message: {
			type: Object as PropType<MessageProps>,
			default: {
				type: 'success',
				message: '这是一条成功的消息',
				status: true,
				timeout: 3000
			}
		},
	},
	setup(props) {
		const messageData = reactive(props.message)

		onMounted(() => {
			setTimeout(() => {
				messageData.status = false
			}, messageData.timeout)
		})

		const handleClick = () => {
			messageData.status = false
		}

		return {
			messageData,
			handleClick
		}
	},
})
</script>
<style lang="scss" scoped>
.message {
	position: fixed;
	border-radius: 2px;
	z-index: 10;
	top: 50px;
	left: 50%;
	width: 400px;
	height: 50px;
	transform: translate(-50%, 0);
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 0 1px 0 #ccc;

	.iconfont {
		margin: 0 10px;
	}

	.content {
		flex-grow: 1;
	}
	.icon-close {
		font-size: 16px;
		font-weight: 800;
		cursor: pointer;
		padding: 0 10px;

		&:hover {
			color: #409EFF;
		}
	}
}

.message-success {
	color: #67c23a;
	background: rgb(225, 243, 216);
}

.message-error {
	color: #f56c6c;
	background: rgb(253, 226, 226);
}

.message-info {
	color: #909399;
	background: rgb(233, 233, 235);
}

.message-warning {
	color: #E6A23C;
	background: rgb(250, 236, 216);
}
</style>
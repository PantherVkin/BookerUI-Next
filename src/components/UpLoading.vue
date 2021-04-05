<template>
	<div class="up-loading">
		<div v-if="uploadStatus == 'beforeUpload'">
			<slot name="beforeUpload" v-bind:handleClick="handleClick">
				<button class="click-button" @click="handleClick">
					点击上传
				</button>
			</slot>
		</div>
		<div v-else-if="uploadStatus == 'upLoading'">
			<slot name="upLoading">
				<div class="" role="status"></div>
				<span>正在上传中...</span>
			</slot>
		</div>
		<a v-else-if="uploadStatus == 'fileUploaded'" @click="handleClick">
			<slot name="fileUploaded">
				<img :src="avatar" alt="" class="avatar" />
			</slot>
		</a>

		<input
			type="file"
			class="d-none"
			ref="fileInput"
			@change="fileChange"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import axios from 'axios'

type UploadingStatus = 'beforeUpload' | 'upLoading' | 'fileUploaded'
const instance = axios.create({
	baseURL: 'http://pand.club:3000/api/',
	timeout: 5000,
})

export default defineComponent({
	props: {
		action: {
			type: String,
			required: true,
		},
		beforeUpload: {
			type: Function,
			required: true,
		},
		status: {
			type: String as PropType<UploadingStatus>,
		},
	},
	emits: ['uploading', 'fileUploaded', 'fileUploaderror'],
	setup(props, ctx) {
		const fileInput = ref()
		let uploadStatus = ref<UploadingStatus>('beforeUpload')
		const avatar = ref('')
		const handleClick = () => {
			fileInput.value.click()
		}
		const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYwNTFmZDU2OWM3YWIxMjYzYmFiYjIwZCIsImVtYWlsIjoiYXNwaXJlQHFxLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJHA1WE92Nm5BRktXbDZxdmcxZmJJS09UOW1hTC40OE9xcjJRSEhyeEVyTzdJUjQ0cFZoL3UuIiwibmlja05hbWUiOiIzNDM5OTkxMSIsInJvbGUiOnsiX2lkIjoiNWU2MDY5OGJkYjYwZjY0YjU3ZTM2MTMzIiwibmFtZSI6Im5vcm1hbFVzZXIiLCJfX3YiOjAsImNyZWF0ZWRBdCI6IjIwMjAtMDMtMDVUMDI6NTI6NTkuODA4WiIsImFjY2VzcyI6InVzZXIifSwiX192IjowLCJjb2x1bW4iOiI2MDUxZmQ1NjljN2FiMTI2M2JhYmIyMGUiLCJkZXNjcmlwdGlvbiI6InNh6Zi_5pav6aG_5Y-R5Y-R5p-T5Y-RIiwiYXZhdGFyIjoiNjA1OWNmMDg5YzdhYjEyNjNiYWJiMzkzIiwiY3JlYXRlZEF0IjoiMjAyMS0wMy0xN1QxMzowMDowNi40ODJaIn0sImV4cCI6MTYxODE5OTY3MywiaWF0IjoxNjE3NTk0ODczfQ.Dv8pSMCXvAfj7BwpjcVssBR0BBwkde5nB1hJJDdlab0`
		instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

		props.status && (uploadStatus = ref<UploadingStatus>(props.status))
		const fileChange = (e: Event) => {
			const files = (e.target as HTMLInputElement).files

			if (files) {
				const fileName = files[0]
				const fileStatus = props.beforeUpload(fileName)
				if (!fileStatus) {
					console.log(fileName.name + '是不支持的类型。')
					return
				}

				const formData = new FormData()
				formData.append('file', fileName)

				instance
					.post(props.action, formData, {
						headers: {
							'Content-Type': 'multipart/form-data',
						},
						onUploadProgress: function (progressEvent) {
							uploadStatus.value = 'upLoading'
							ctx.emit('uploading', progressEvent)
						},
					})
					.then(
						(res) => {
							uploadStatus.value = 'fileUploaded'
							const data = JSON.parse(res.data)
							avatar.value = data.url
							ctx.emit('fileUploaded', data)
						},
						(err) => {
							console.log('上传失败' + err)
							ctx.emit('fileUploaderror', err)
						}
					)
			}
		}

		return {
			handleClick,
			fileInput,
			fileChange,
			uploadStatus,
			avatar,
		}
	},
})
</script>
<style lang="scss" scoped>
.up-loading {
	width: 100%;
	height: 200px;

	.avatar {
		height: 200px;
		width: 100%;
		object-fit: cover;

		&:hover {
			cursor: pointer;
			box-shadow: 0 0 1px 0 #333;
		}
	}
}

.d-none {
	display: none;
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
	&:hover {
		background: #1989fa;
		border-color: #1989fa;
		color: #fff;
	}
}
</style>
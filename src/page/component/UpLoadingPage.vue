<template>
	<div>
		<h2>Upload 上传</h2>
		<p>通过点击或者拖拽上传文件。</p>
	</div>

	<demo-show
		title="点击上传"
		description="只能上传 jpg/png 文件。"
		:code="DemoCode"
	>
		<up-loading
			:beforeUpload="beforeUploadCheck"
			action="/upload"
			v-on="uploadEvent"
			class="uploading"
		>
			<template v-slot:beforeUpload="upLoadProps">
				<div class="uploading-item">
					<button
						class="click-button"
						@click="upLoadProps.handleClick"
					>
						点击上传
					</button>
				</div>
			</template>

			<template v-slot:upLoading>
				<loading text="拼命上传中" icon="loading6"> </loading>
			</template>

			<template v-slot:fileUploaded="upLoadedProps">
				<div class="uploading-item">
					<button
						class="click-button"
						@click="upLoadedProps.handleClick"
					>
						点击重新上传
					</button>
					<img :src="uploadedImg" alt="" />
				</div>
			</template>
		</up-loading>
	</demo-show>

	<demo-show
		title="自定义文件校验"
		description="使用 beforeUpload 限制用户上传的图片格式和大小。"
		:code="DemoCode1"
	>
		<up-loading
			:beforeUpload="beforeUploadCheck1"
			action="/upload"
			v-on="uploadEvent"
			class="uploading"
		>
			<template v-slot:beforeUpload="upLoadProps">
				<div class="uploading-item">
					<button
						class="click-button"
						@click="upLoadProps.handleClick"
					>
						点击上传
					</button>
				</div>
			</template>

			<template v-slot:upLoading>
				<loading text="拼命上传中" icon="loading6"> </loading>
			</template>

			<template v-slot:fileUploaded="upLoadedProps">
				<div class="uploading-item">
					<button
						class="click-button"
						@click="upLoadedProps.handleClick"
					>
						点击重新上传
					</button>
					<img :src="uploadedImg" alt="" />
				</div>
			</template>
		</up-loading>
	</demo-show>

	<attr-table :data="AttrTable" title="UpLoading Attributes"></attr-table>
	<attr-table :data="SlotsTable" title="UpLoading Slots"></attr-table>
	<attr-table :data="EventsTable" title="UpLoading Events"></attr-table>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import DemoShow from '@/components/DemoShow.vue'
import AttrTable from '@/components/AttrTable.vue'
import UpLoading from '@/components/UpLoading.vue'
import Loading from '@/components/Loading.vue'
import uploadCheck from '@/hooks/useUploadCheck'
import createMessage from '@/hooks/useMessage'

export default defineComponent({
	components: {
		DemoShow,
		AttrTable,
		UpLoading,
		Loading,
	},
	setup() {
		const uploadedImg = ref()
		const DemoCode = `
        <up-loading
			:beforeUpload="beforeUploadCheck"
			action="/upload"
			v-on="uploadEvent"
			class="uploading"
		>
			<template v-slot:beforeUpload="upLoadProps">
				<div class="uploading-item">
					<button
						class="click-button"
						@click="upLoadProps.handleClick"
					>
						点击上传
					</button>
				</div>
			</template>

			<template v-slot:upLoading>
				<loading text="拼命上传中" icon="loading6"> </loading>
			</template>

			<template v-slot:fileUploaded="upLoadedProps">
				<div
					class="uploading-item"
				>
					<button
						class="click-button"
						@click="upLoadedProps.handleClick"
					>
						点击重新上传
					</button>
                    <img :src="uploadedImg" alt="">
				</div>
			</template>
        </up-loading>`

		// 文件校验
		const beforeUploadCheck = (file: File) => {
			if (!uploadCheck(file)) {
				createMessage(
					file.name + '是不支持的类型',
					'error',
					2000,
					false
				)
				return false
			}
			return true
		}
		// 文件校验
		const beforeUploadCheck1 = (file: File) => {
			const option = {
				type: ['image/png', 'image/jpeg'],
				length: 2,
			}

			if (!option.type.includes(file.type)) {
				createMessage(
					file.name + '是不支持的类型',
					'error',
					2000,
					false
				)
				return false
			}
			if (file.size >= option.length * 1024 * 1024) {
				createMessage(
					file.name + '文件大小大于' + option.length + 'MB',
					'error',
					2000,
					false
				)
				return false
			}

			return true
        }
        
        const DemoCode1 = `
        <up-loading
			:beforeUpload="beforeUploadCheck1"
			action="/upload"
			v-on="uploadEvent"
			class="uploading"
		>
			<template v-slot:beforeUpload="upLoadProps">
				<div class="uploading-item">
					<button
						class="click-button"
						@click="upLoadProps.handleClick"
					>
						点击上传
					</button>
				</div>
			</template>

			<template v-slot:upLoading>
				<loading text="拼命上传中" icon="loading6"> </loading>
			</template>

			<template v-slot:fileUploaded="upLoadedProps">
				<div class="uploading-item">
					<button
						class="click-button"
						@click="upLoadedProps.handleClick"
					>
						点击重新上传
					</button>
					<img :src="uploadedImg" alt="" />
				</div>
			</template>
		</up-loading>

        // 文件校验
		const beforeUploadCheck1 = (file: File) => {
			const option = {
				type: ['image/png', 'image/jpeg'],
				length: 2,
			}

			if (!option.type.includes(file.type)) {
				createMessage(
					file.name + '是不支持的类型',
					'error',
					2000,
					false
				)
				return false
			}
			if (file.size >= option.length * 1024 * 1024) {
				createMessage(
					file.name + '文件大小大于' + option.length + 'MB',
					'error',
					2000,
					false
				)
				return false
			}

			return true
        }
        `

		// uploading 事件
		const uploadEvent = {
			uploading(data: any) {
				console.log('uploading', data)
			},
			fileUploaded(data: any) {
				console.log('fileUploaded', data)
				uploadedImg.value = data.data.url
			},
			fileUploaderror(data: any) {
				console.log('fileUploaderror', data)
			},
		}

		const AttrTable = [
			{
				params: 'action',
				desc: '必选参数，上传的地址',
				type: 'String',
				select: '/',
				default: '/',
            },
            {
				params: 'headers',
				desc: '设置上传的请求头部',
				type: 'Object',
				select: '/',
				default: '/',
            },
            {
				params: 'data',
				desc: '上传时附带的额外参数	',
				type: 'Object',
				select: '/',
				default: '/',
            },
            {
				params: 'name',
				desc: '上传的文件字段名	',
				type: 'String',
				select: '/',
				default: '/',
            },
			{
				params: 'beforeUpload',
				desc: '上传文件之前的钩子，文件校验',
				type: 'Function(file)',
				select: '/',
				default: 'uploadCheck',
			},
			{
				params: 'status',
				desc: '当前上传的状态，显示对应状态的UI',
				type: 'String',
				select: 'beforeUpload ， upLoading， fileUploaded',
				default: 'beforeUpload',
			},
        ]
        
		const SlotsTable = [
			{
				params: 'beforeUpload',
				desc: '上传之前，显示的UI',
				type: 'Slot',
				select: '/',
				default: '/',
			},
			{
				params: 'upLoading',
				desc: '上传中，显示的UI',
				type: 'Slot',
				select: '/',
				default: '/',
			},
			{
				params: 'fileUploaded',
				desc: '上传完成，显示的UI',
				type: 'Slot',
				select: '/',
				default: '/',
			},
        ]
        
		const EventsTable = [
			{
				params: 'uploading',
				desc: '上传中，触发的钩子函数',
				type: 'Function',
				select: '/',
				default: '/',
			},
			{
				params: 'fileUploaded',
				desc: '上传完成，触发的钩子函数',
				type: 'Function',
				select: '/',
				default: '/',
			},
			{
				params: 'fileUploaderror',
				desc: '上传错误，触发的钩子函数',
				type: 'Function',
				select: '/',
				default: '/',
			},
        ]

		return {
            DemoCode,
            DemoCode1,
			AttrTable,
			beforeUploadCheck,
			beforeUploadCheck1,
			uploadEvent,
            uploadedImg,
            SlotsTable,
            EventsTable
		}
	},
})
</script>

<style lang="scss" scoped>
.up-loading {
	.uploading-item {
		height: 200px;
		width: 100%;
		display: flex;

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
				background: #1989fa;
				border-color: #1989fa;
				color: #fff;
			}
		}
	}
}
</style>
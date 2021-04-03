<template>
	<div class="modal" :class="{ 'modal-bg': modal }">
		<div class="modal-dialog">
			<div class="title">
				<span class="tips">{{ title }}</span>
				<i class="iconfont icon-close" @click="handleClose"></i>
			</div>
			<div class="content">
				<slot>
					<div>这是一段提示文字。</div>
				</slot>
			</div>
			<div class="footer">
				<button class="cancel" @click="handleCancel">取消</button>
				<button class="ensure" @click="handleEnsure">确定</button>
			</div>
		</div>
	</div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		title: {
			type: String,
			default: '提示',
		},
		modal: {
			type: Boolean,
			default: true,
		},
	},
	emits: ['click-cancel', 'click-ensure', 'click-close'],
	setup(props, ctx) {
		const handleCancel = () => {
			ctx.emit('click-cancel')
		}
		const handleEnsure = () => {
			ctx.emit('click-ensure')
		}
		const handleClose = () => {
			ctx.emit('click-close')
		}
		return {
			handleCancel,
			handleEnsure,
			handleClose,
		}
	},
})
</script>
<style lang="scss" scoped>
.modal {
	&.modal-bg {
		top: 0;
		left: 0;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.7);
	}
	.modal-dialog {
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		top: 100px;
		left: 50%;
		transform: translateX(-50%);
		padding: 20px;
		width: 400px;
		min-height: 200px;
		background-color: #fff;
		box-shadow: 0 0 1px 0 #666;
		border-radius: 2px;

		.title {
			display: flex;
			justify-content: space-between;
			width: 100%;

			.tips {
				color: #444;
				font-weight: 800;
			}

			.icon-close {
				color: #666;
				font-size: 20px;
				cursor: pointer;
				font-weight: 800;

				&:hover {
					color: #409eff;
				}
			}
		}

		.content {
			padding: 20px 0;
			color: #666;
			width: 100%;
		}

		.footer {
			display: flex;
			align-items: flex-end;
			width: 100%;
			justify-content: flex-end;

			button {
				width: 60px;
				height: 30px;
				margin-top: 0px;
				margin-right: 10px;
				outline: none;
				background-color: #fff;
				border: 1px solid #ccc;
				cursor: pointer;
				color: #1989fa;

				&:hover {
					background-color: #1989fa;
					border: 1px solid #1989fa;
					color: #fff;
				}
			}
		}
	}
}
</style>
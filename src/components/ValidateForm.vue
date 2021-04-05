<template>
	<form class="validate-form"
        :class="{inline: inline}"
    >
		<div class="validate-input" :class="{inline: inline}">
			<slot name="default"></slot>
		</div>
		<div class="validate-button" @click.prevent="submitForm">
			<slot name="submit">
				<button class="click-button">确定</button>
			</slot>
		</div>
	</form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
type validateFunc = () => boolean
export default defineComponent({
    props: {
        inline: {
            type: Boolean,
            default: false
        }
    },
	setup(props, context) {
		let funcArr: validateFunc[] = []
		const callback = (func: validateFunc) => {
			funcArr.push(func)
		}
		emitter.on('item-created', callback as validateFunc)
		onUnmounted(() => {
			// 删除监听
			emitter.off('item-created', callback as validateFunc)
			funcArr = []
		})
		const submitForm = () => {
			const result: boolean = funcArr
				.map((func) => func())
				.every((result) => result)
			context.emit('form-submit', result)
		}
		return {
			submitForm,
		}
	},
})
</script>
<style lang="scss" scoped>
.validate-form {

	.validate-button {
		display: inline-block;
        margin-left: 10px;
		.click-button {
			width: 100px;
			height: 40px;
            outline: none;
			background-color: #fff;
			border: 1px solid #ccc;
			cursor: pointer;
			color: #1989fa;

			&:hover {
				opacity: 0.6;
			}
		}
	}
}

.inline {
    display: flex;
}
</style>
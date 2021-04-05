<template>
	<div class="validate-wrap">
		<div class="validate-input">
			<div>
				<slot name="prepend"> </slot>
			</div>
			<textarea
				v-if="type === 'textarea'"
				class="form-control shadow-none"
				:class="{ 'is-invalid': ruleState.error }"
				aria-describedby="validationServer03Feedback"
				required
				rows="5"
				@blur="onValidate"
				@input="updateValue"
				:value="inputRef"
				v-bind="$attrs"
			/>
			<input
				v-else
				:type="type"
				class="form-input"
				:class="{
					'is-invalid': ruleState.error,
					'is-disabled': disabled,
				}"
				required
				@blur="onValidate"
				@input="updateValue"
				:value="inputRef"
				v-bind="$attrs"
				:placeholder="placeholder"
				:disabled="disabled"
			/>
			<div>
				<slot name="append"> </slot>
			</div>
		</div>

		<div class="is-invalid invalid-message" v-if="ruleState.error">
			{{ ruleState.message }}
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, reactive, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'

interface RuleProp {
	type: 'required' | 'email' | 'password' | 'custom'
	message: string
	validate?: () => any
}

export type RulesProp = RuleProp[]

export default defineComponent({
	props: {
		placeholder: {
			type: String,
			default: '请输入内容',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		rules: {
			type: Array as PropType<RuleProp[]>,
		},
		modelValue: String,
		type: {
			type: String,
			default: 'input',
		},
	},
	inheritAttrs: false,
	setup(props, ctx) {
		const mailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		const inputRef = ref(props.modelValue || '')

		// Validate
		const ruleState = reactive({
			error: false,
			message: '',
		})

		let allPassed = false
		const onValidate = () => {
			if (!props.rules) {
				return true
			}
			props.rules.every((rule) => {
				switch (rule.type) {
					case 'required':
						allPassed = !(inputRef.value.trim() == '')
						break
					case 'email':
						allPassed = mailReg.test(inputRef.value)

						break
					case 'password':
						allPassed = inputRef.value.length >= 6
						break
					case 'custom':
						allPassed = rule.validate && rule.validate()
						break
				}

				ruleState.message = rule.message
				return allPassed
			})
			ruleState.error = !allPassed
			return allPassed
		}

		onMounted(() => {
			emitter.emit('item-created', onValidate)
		})

		// v-model
		const updateValue = (e: KeyboardEvent) => {
			inputRef.value = (e.target as HTMLInputElement).value
			ctx.emit('update:modelValue', inputRef.value)
		}
		return {
			inputRef,
			onValidate,
			ruleState,
			updateValue,
		}
	},
})
</script>
<style lang="scss" scoped>
.validate-wrap {
	margin-bottom: 10px;

	.validate-input {
		color: #5e6d82;
		display: flex;
		align-items: center;

		.title {
			font-size: 14px;
			font-weight: 800;
			color: #333;
		}

		.form-input {
			outline: none;
			margin: 0 10px;
			padding: 0 20px;
			height: 40px;
			min-width: 200px;
			font-size: 14px;
			border: 1px solid #dcdfe6;
			border-radius: 2px;
			color: #333;

			&:focus {
				border-color: #409eff;
			}

			&.is-invalid {
				border-color: #f56c6c;
			}

			&.is-disabled {
				cursor: not-allowed;
			}
		}
	}

	.invalid-message {
		padding: 10px;
		font-size: 14px;
		color: #f56c6c;

		&.is-invalid {
			border-color: #f56c6c;
		}
	}
}
</style>
<template>
	<div>
		<h2>Form 表单</h2>
		<p>
			由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。
		</p>
	</div>

	<demo-show
		title="基础表单"
		description="基础表单项，比如输入框、密码框等。"
		:code="DemoCode"
	>
		<validate-form>
			<validate-input placeholder="请输入邮箱"> </validate-input>

			<validate-input type="password" placeholder="请输入密码">
			</validate-input>
			<template v-slot:submit></template>
		</validate-form>
	</demo-show>

	<demo-show
		title="行内表单"
		description="当垂直方向空间受限且表单较简单时，可以在一行内放置表单。"
		code='
        <validate-form :inline="true">
			<validate-input placeholder="请输入邮箱"> </validate-input>

			<validate-input type="password" placeholder="请输入密码">
			</validate-input>
			<template v-slot:submit></template>
		</validate-form>'
	>
		<validate-form :inline="true">
			<validate-input placeholder="请输入邮箱"> </validate-input>

			<validate-input type="password" placeholder="请输入密码">
			</validate-input>
			<template v-slot:submit></template>
		</validate-form>
	</demo-show>

	<demo-show
		title="表单校验"
		description="在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。"
		:code="DemoCode1"
	>
		<validate-form @form-submit="onFormSubmit">
			<validate-input
				:rules="EmailRules"
				v-model="formData1.email"
				placeholder="请输入邮箱"
			>
			</validate-input>

			<validate-input
				prepend="密码"
				:rules="PasswordRules"
				v-model="formData1.password"
				type="password"
				placeholder="请输入密码"
			>
			</validate-input>
			<template v-slot:submit></template>
		</validate-form>
	</demo-show>

	<demo-show
		title="自定义校验"
		description="这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。"
		:code="DemoCode2"
	>
		<validate-form @form-submit="onFormSubmit1">
			<validate-input
				:rules="EmailRules"
				v-model="formData2.email"
				placeholder="请输入邮箱"
			>
				<template #prepend> 邮箱： </template>
			</validate-input>

			<validate-input
				prepend="密码"
				:rules="PasswordRules"
				v-model="formData2.password"
				type="password"
				placeholder="请输入密码"
			>
				<template #prepend> 密码： </template>
			</validate-input>
			<validate-input
				prepend="密码"
				:rules="customRules"
				v-model="formData2.rePassword"
				type="password"
				placeholder="请再次输入密码"
			>
				<template #prepend> 重复： </template>
			</validate-input>
			<template v-slot:submit> <button class="click-button">注册</button> </template>
		</validate-form>
	</demo-show>

	<attr-table :data="AttrTable" title="Form Attributes"></attr-table>
	<attr-table :data="FormEventsTable" title="Form Events"></attr-table>
	<attr-table :data="FormItemAttr" title="FormItem Attributes"></attr-table>
	<attr-table :data="FormItemSlot" title="FormItem Slot"></attr-table>
	<attr-table :data="FormItemEvents" title="FormItem Events"></attr-table>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import DemoShow from '@/components/DemoShow.vue'
import AttrTable from '@/components/AttrTable.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import createMessage from '@/hooks/useMessage'

const EmailRules: RulesProp = [
	{
		type: 'required',
		message: '邮箱不能为空！',
	},
	{
		type: 'email',
		message: '请输入正确的邮箱！',
	},
]
const PasswordRules: RulesProp = [
	{
		type: 'required',
		message: '密码不能为空！',
	},
	{
		type: 'password',
		message: '请输入正确的密码！',
	},
]

export default defineComponent({
	components: {
		DemoShow,
		AttrTable,
		ValidateInput,
		ValidateForm,
	},
	setup() {
		const formData1 = reactive({
			email: '123456@qq.com',
			password: '111111',
		})

		const formData2 = reactive({
			email: '123456@qq.com',
			password: '111111',
			rePassword: '111111',
		})
		const onFormSubmit = (result: boolean) => {
			if (result) {
				createMessage('表单校验成功。', 'success', 2000, false)
			} else {
				createMessage('表单校验失败。', 'error', 2000, false)
			}
		}
		const onFormSubmit1 = (result: boolean) => {
			if (result) {
				createMessage('表单校验成功。', 'success', 2000, false)
			} else {
				createMessage('表单校验失败。', 'error', 2000, false)
			}
		}
		const DemoCode = `
        <validate-form >
			<validate-input
				placeholder="请输入邮箱"
			>
			</validate-input>

			<validate-input
				type="password"
				placeholder="请输入密码"
			>
            </validate-input>
			<template v-slot:submit></template>
		</validate-form>`
		const DemoCode1 = `
		<validate-form @form-submit="onFormSubmit">
			<validate-input
				:rules="EmailRules"
				v-model="formData1.email"
				placeholder="请输入邮箱"
			>
			</validate-input>

			<validate-input
				prepend="密码"
				:rules="PasswordRules"
				v-model="formData1.password"
				type="password"
				placeholder="请输入密码"
			>
            </validate-input>
			<template v-slot:submit></template>
		</validate-form>
        

        const formData1 = reactive({
			email: '123456@qq.com',
            password: '111111',
        })
        const EmailRules: RulesProp = [
            {
                type: 'required',
                message: '邮箱不能为空！',
            },
            {
                type: 'email',
                message: '请输入正确的邮箱！',
            },
        ]
        const PasswordRules: RulesProp = [
            {
                type: 'required',
                message: '密码不能为空！',
            },
            {
                type: 'password',
                message: '请输入正确的密码！',
            },
        ]`

		const DemoCode2 = `
		<validate-form @form-submit="onFormSubmit1">
			<validate-input
				:rules="EmailRules"
				v-model="formData2.email"
				placeholder="请输入邮箱"
			>
				<template #prepend> 邮箱： </template>
			</validate-input>

			<validate-input
				prepend="密码"
				:rules="PasswordRules"
				v-model="formData2.password"
				type="password"
				placeholder="请输入密码"
			>
				<template #prepend> 密码： </template>
			</validate-input>
			<validate-input
				prepend="密码"
				:rules="customRules"
				v-model="formData2.rePassword"
				type="password"
				placeholder="请再次输入密码"
			>
				<template #prepend> 重复： </template>
			</validate-input>
			<template v-slot:submit> <button class="click-button">注册</button> </template>
		</validate-form>
        
        const formData2 = reactive({
			email: '123456@qq.com',
            password: '111111',
            rePassword: '111111',
        })
        
        const EmailRules: RulesProp = [
            {
                type: 'required',
                message: '邮箱不能为空！',
            },
            {
                type: 'email',
                message: '请输入正确的邮箱！',
            },
        ]
        const PasswordRules: RulesProp = [
            {
                type: 'required',
                message: '密码不能为空！',
            },
            {
                type: 'password',
                message: '请输入正确的密码！',
            },
        ]
        const customRules: RulesProp = [
			{
				type: 'required',
				message: '请重复输入的密码！',
			},
			{
				type: 'custom',
				message: '请重复输入的密码！',
				validate: () => {
					return formData2.password == formData2.rePassword
				},
			},
        ]
        
        <style lang="scss" scoped>
        .click-button {
            margin-left: 48px;
            width: 240px;
            height: 40px;
            outline: none;
            background-color: #fff;
            border: 1px solid #ccc;
            cursor: pointer;
            background-color: #1989fa;
            color: #fff;

            &:hover {
                opacity: 0.6;
            }
        }
        </style>

        `

		const customRules: RulesProp = [
			{
				type: 'required',
				message: '请重复输入的密码！',
			},
			{
				type: 'custom',
				message: '请重复输入的密码！',
				validate: () => {
					return formData2.password == formData2.rePassword
				},
			},
		]
		const AttrTable = [
			{
				params: 'rules',
				desc: '表单验证规则	',
				type: 'Array',
				select: '/',
				default: '/',
			},
			{
				params: 'inline',
				desc: '行内表单模式	',
				type: 'Boolean',
				select: 'true , false',
				default: 'false',
			},
			{
				params: 'model',
				desc: '表单数据对象	',
				type: 'Object',
				select: '/',
				default: '/',
			},
			{
				params: 'width',
				desc:
					'表单域标签的宽度。 Form 被直接子元素 validate-input 撑开，默认 240px',
				type: '/',
				select: '/',
				default: '/',
			},
		]

		const FormEventsTable = [
			{
				params: 'form-submit',
				desc:
					'表单提交触发的事件，所有被校验的表单项校验是否通过，错误消息',
				type: 'Function',
				select: '/',
				default: '/',
			},
		]

		const FormItemAttr = [
			{
				params: 'type',
				desc: 'Input类型',
				type: 'String',
				select:
					'text | password | textarea， 和其他 原生 input 的 type 值',
				default: 'text',
			},
			{
				params: 'value / v-model',
				desc: '绑定值	',
				type: 'String | Number',
				select: '/',
				default: '/',
			},
			{
				params: 'placeholder',
				desc: '输入框占位文本',
				type: 'String',
				select: '/',
				default: '请输入内容',
			},
			{
				params: 'rules',
				desc: '输入时触发的校验规则',
				type: 'RuleProp[]',
				select: '/',
				default: '/',
			},
			{
				params: 'disabled',
				desc: '禁用状态',
				type: 'Boolean',
				select: 'true , false',
				default: 'false',
			},
			{
				params: 'name',
				desc: '原生属性	',
				type: 'String',
				select: '/',
				default: '/',
			},
			{
				params: 'readonly',
				desc: '原生属性	',
				type: 'Boolean',
				select: 'true , false',
				default: ' false',
			},
		]

		const FormItemSlot = [
			{
				params: 'prepend',
				desc: '输入框前置内容，只对 type="text" 有效',
				type: '*',
				select: '/',
				default: '/',
			},
			{
				params: 'append',
				desc: '输入框前置内容，只对 type="text" 有效',
				type: '*',
				select: '/',
				default: '/',
			},
		]

		const FormItemEvents = [
			{
				params: 'blur',
				desc: '在 Input 失去焦点时触发	',
				type: '(event: Event)',
				select: '/',
				default: '/',
			},
			{
				params: 'focus',
				desc: '在 Input 获得焦点时触发	',
				type: '(event: Event)',
				select: '/',
				default: '/',
			},
			{
				params: 'change',
				desc: '仅在输入框失去焦点或用户按下回车时触发',
				type: '(value: string | number)',
				select: '/',
				default: '/',
			},
			{
				params: 'input',
				desc: '在 Input 值改变时触发',
				type: '(value: string | number)',
				select: '/',
				default: '/',
			},
		]
		return {
			EmailRules,
			formData1,
			formData2,
			PasswordRules,
			customRules,
			onFormSubmit,
			onFormSubmit1,
			DemoCode,
			DemoCode1,
			DemoCode2,
			AttrTable,
			FormEventsTable,
			FormItemAttr,
			FormItemSlot,
			FormItemEvents,
		}
	},
})
</script>

<style lang="scss" scoped>
.click-button {
    margin-left: 48px;
	width: 240px;
	height: 40px;
	outline: none;
	background-color: #fff;
	border: 1px solid #ccc;
	cursor: pointer;
    background-color: #1989fa;
    color: #fff;

	&:hover {
		opacity: 0.6;
	}
}
</style>
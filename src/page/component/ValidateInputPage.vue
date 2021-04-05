<template>
	<div>
		<h2>Input 输入框</h2>
		<p>通过鼠标或键盘输入字符。</p>
	</div>

	<demo-show
		title="基础用法"
		description=""
		code="<validate-input></validate-input>"
	>
		<validate-input></validate-input>
	</demo-show>

	<demo-show
		title="校验规则"
		description="带规则校验的Input。"
		:code="DemoCode1"
	>
		<validate-input
			:rules="ValidateRules"
			placeholder="邮箱校验"
		></validate-input>
	</demo-show>

	<demo-show
		title="禁用状态"
		description="禁用状态的Input。"
		code="<validate-input :disabled=true></validate-input>"
	>
		<validate-input :disabled="true"></validate-input>
	</demo-show>

	<demo-show
		title="密码框"
		description="密码框的Input。"
		code="<validate-input type='password' placeholder='请输入密码'></validate-input>"
	>
		<validate-input
			type="password"
			placeholder="请输入密码"
		></validate-input>
	</demo-show>

	<demo-show
		title="文本域"
		description="用于输入多行文本信息，通过将 type 属性的值指定为 textarea。"
		code="<validate-input type='textarea'></validate-input>"
	>
		<validate-input type="textarea"></validate-input>
	</demo-show>

	<demo-show
		title="复合型输入框"
		description="可通过 slot 来指定在 input 中前置或者后置内容。可前置或后置元素，一般为标签或按钮。"
		:code="DemoCode2"
	>
		<validate-input>
            <template v-slot:prepend><h3>前置元素</h3></template>
            <template v-slot:append><button>后置元素</button></template>
        </validate-input>
	</demo-show>

	<attr-table :data="AttrTable" title="Input Attributes"></attr-table>
    <attr-table :data="SlotTable" title="Input Slots"></attr-table>
    <attr-table :data="EventsTable" title="Input Events"></attr-table>
</template>
<script>
import { defineComponent } from 'vue'
import DemoShow from '@/components/DemoShow.vue'
import AttrTable from '@/components/AttrTable.vue'
import ValidateInput from '@/components/ValidateInput.vue'

export default defineComponent({
	components: {
		DemoShow,
		AttrTable,
		ValidateInput,
	},
	setup() {
		const ValidateRules = [
			{
				type: 'required',
				message: '邮箱不能为空！',
			},
			{
				type: 'email',
				message: '请输入正确的邮箱！',
			},
		]

		const DemoCode1 = `
        <validate-input :rules="ValidateRules" placeholder="邮箱校验"></validate-input>
        
        const ValidateRules = [
			{
				type: 'required',
				message: '邮箱不能为空！',
			},
			{
				type: 'email',
				message: '请输入正确的邮箱！',
			},
		]
        `

        const DemoCode2 = `
        <validate-input>
            <template v-slot:prepend><h3>前置元素</h3></template>
            <template v-slot:append><button>后置元素</button></template>
        </validate-input>`
		const AttrTable = [
            {
				params: 'type',
				desc: 'Input类型',
				type: 'String',
				select: 'text | password | textarea， 和其他 原生 input 的 type 值',
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

		const SlotTable = [
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
        
        const EventsTable = [
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
            DemoCode1,
            DemoCode2,
			ValidateRules,
            AttrTable,
            SlotTable,
            EventsTable
		}
	},
})
</script>

<style lang="scss" scoped>
</style>



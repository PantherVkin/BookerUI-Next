<template>
	<demo-show title="基础用法" description="DropDown的基础用法" :code="demo1">
		<drop-down trigger="mouseenter">
			<template v-slot:title> 基础下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
	</demo-show>
</template>
<script>
import { defineComponent } from 'vue'
import DropDown from '@/components/DropDown.vue'
import DropDownItem from '@/components/DropDownItem.vue'
import DemoShow from '@/components/DemoShow.vue'

export default defineComponent({
	components: {
		DemoShow,
		DropDown,
		DropDownItem,
	},
	setup() {
		const command = () => {
			console.log('CallBack...')
		}
		const demo1 = `
    		<drop-down trigger="mouseenter">
			<template v-slot:title> 基础下拉 </template>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
			<drop-down-item> 新建文章 </drop-down-item>
		</drop-down>
        `
		return {
			command,
			demo1,
		}
	},
})
</script>
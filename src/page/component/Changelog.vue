<template>
	<div class="changelog">
		<div>
			<h1>BookerUI-Next更新日志</h1>
			<p>
				BookerUI-Next 是一个基于 Vue3 的 UI 组件库，这是我在Vue3
				的项目开发中，开发的一个UI框架。
			</p>
			<p>
				本 UI 框架是一个「面向
				<a href="https://github.com/BookerDrew/BookerUI-Next">
					源码 (opens new window)阅读者
				</a>
				」的框架，希望对你有所帮助。
			</p>
			<p>
				如果你在使用过程中发现问题， 非常感谢你提出
				<a href="https://github.com/BookerDrew/BookerUI-Next/issues"
					>宝贵意见</a
				>。
			</p>
		</div>
		<h2>V1.0.0</h2>

		<ul>
			<li
				v-for="(comp, index) in CompNavList"
				:key="'changelog-comp' + index"
				class="comp-item"
			>
				<p>{{ comp.title }}</p>
			</li>
		</ul>
	</div>
</template>
<script>
import { defineComponent } from 'vue'
import { CompNavList } from '@/hooks/CompNavList'

export default defineComponent({
	setup() {
		return {
			CompNavList,
		}
	},
})
</script>

<style lang="scss" scoped>
.changelog {
	a {
		color: #409eff;
		text-decoration: none;
		font-size: 14px;

		&:hover {
			color: #1989fa;
		}
	}

	.comp-item {
		p {
			padding: 5px 10px;
			font-size: 14px;
		}
	}
}
</style>
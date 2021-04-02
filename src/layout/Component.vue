<template>
	<div class="guide">
		<div class="left">
			<h4>开发指南</h4>
			<h6
				v-for="(compNav, index) in navList"
				:key="'componentNav' + index"
				@click.stop="handleCompNav(compNav)"
			>
				<router-link
					:to="{ name: compNav.router }"
					:class="{
						active: compNav.isActive,
					}"
					>{{ compNav.title }}</router-link
				>
			</h6>

			<h4>组件</h4>
			<h6
				v-for="(compNav, index) in compNavList"
				:key="'compNav' + index"
				@click.stop="handleCompNav(compNav)"
			>
				<router-link
					:to="{ name: compNav.router }"
					:class="{
						active: compNav.isActive,
					}"
					>{{ compNav.title }}</router-link
				>
			</h6>
		</div>

		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { NavProps } from '../hooks/TypeProps'
import { NavList, CompNavList } from '../hooks/CompNavList'
import useClickNav from "../hooks/useClickNav";

export default defineComponent({
	name: 'App',
	components: {},
	setup() {
		const route = useRoute()
		const navList: NavProps[] = reactive(NavList)
		const compNavList: NavProps[] = reactive(CompNavList)

		onMounted(() => {
			const curNav =	useClickNav(route, navList) || useClickNav(route, compNavList)
			if (curNav) {
				handleCompNav(curNav)
			}
		})

		const handleCompNav = (tab: NavProps) => {
			navList.forEach((ele) => {
				if (ele.title === tab.title) {
					ele.isActive = true
				} else {
					ele.isActive = false
				}
			})

			compNavList.forEach((ele) => {
				if (ele.title === tab.title) {
					ele.isActive = true
				} else {
					ele.isActive = false
				}
			})
		}

		return {
			navList,
			compNavList,
			handleCompNav,
		}
	},
})
</script>

<style lang="scss" scoped>
.guide {
	display: flex;

	.left {
		padding: 30px 0 0 40px;
		width: 200px;
		height: 800px;
		overflow: scroll;
		background-color: #ff0;

		.active {
			color: #1989fa;
		}
	}

	.content {
		background-color: #0ff;
		padding: 30px 20px;
		flex-grow: 1;
	}

	a {
		text-decoration: none;
		color: #333;
	}
}
</style>
<template>
	<div class="container">
		<nav class="navbar">
			<router-link :to="{ name: 'design' }" class="navbar-brand" href="#">
				BookerUI+
			</router-link>
			<div class="navbar-content">
				<input
					type="text"
					class="navbar-search"
					placeholder="搜索文档"
				/>
				<span
					v-for="(nav, index) in navList"
					@click.stop="handleNav(nav)"
					:key="'nav' + index"
				>
					<router-link
						:to="{ name: nav.router }"
						class="navbar-item"
						:class="{
							active: nav.isActive,
						}"
						>{{ nav.title }}</router-link
					>
				</span>
			</div>
		</nav>

		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { NavProps } from './hooks/TypeProps'
import useClickNav from './hooks/useClickNav'

export default defineComponent({
	name: 'App',
	components: {},
	setup() {
		const route = useRoute()
		const navList = reactive([
			{
				title: '指南',
				router: 'design',
				fullPath: '/guide/',
				isActive: true,
			},
			{
				title: '组件',
				router: 'changelog',
				fullPath: '/component/',
				isActive: false,
			},
			{
				title: '资源',
				router: 'resource',
				fullPath: '/resource',
				isActive: false,
			},
		])

		setTimeout(() => {
			const curNav = useClickNav(route, navList)
			if (curNav) {
				handleNav(curNav)
			}
		}, 100)

		const handleNav = (nav: NavProps) => {
			navList.forEach((ele) => {
				if (ele.title === nav.title) {
					ele.isActive = true
				} else {
					ele.isActive = false
				}
			})
		}

		return {
			navList,
			handleNav,
		}
	},
})
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.container {
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;

		.navbar-search {
			width: 150px;
			height: 30px;
			padding: 0 20px;
			outline: none;
			border: 1px solid #ccc;

			&:focus {
				border-color: #1989fa;
			}
		}

		a {
			text-decoration: none;
			color: #409eff;
			margin: 0 40px;
			padding: 15px 0;
			margin-bottom: 2px;

			&.active {
				color: #1989fa;
				border-bottom: 2px solid #1989fa;
			}
		}
	}
}

p {
	color: #5e6d82;
}
h2 {
	color: #1f2f3d;
}
</style>

<template>
	<div class="container">
		<nav class="navbar">
			<router-link :to="{ name: 'design' }" class="navbar-brand" href="#">
				<svg
					t="1617614461586"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="933"
					width="32"
					height="32"
				>
					<path
						d="M728.08448 725.61664c1.86368 3.56352 1.49504 7.86432-0.96256 11.03872-0.90112 1.18784-2.05824 2.12992-3.33824 2.78528-2.14016 1.1264-4.6592 1.4848-7.07584 0.91136l-208.8448-48.57856-78.45888 199.49568c-1.46432 3.7376-4.9664 6.26688-8.98048 6.48192-4.00384 0.21504-7.76192-1.91488-9.63584-5.44768L120.29952 339.31264c-2.62144-5.00736-0.69632-11.19232 4.31104-13.824l299.1616-157.16352c5.00736-2.62144 11.20256-0.69632 13.83424 4.31104L728.08448 725.61664zM914.78016 776.72448 753.92 173.14816c-1.46432-5.46816-7.05536-8.71424-12.53376-7.24992l-232.72448 62.02368 244.9408 467.70176c4.02432 7.68 5.80608 16.09728 5.69344 24.46336l141.1072 68.48512c2.2528 1.09568 4.78208 1.31072 7.1168 0.68608 1.3824-0.37888 2.7136-1.04448 3.87072-1.9968C914.49344 784.71168 915.8144 780.5952 914.78016 776.72448zM568.4736 869.0176c1.03424 3.88096 4.22912 6.77888 8.18176 7.46496 3.95264 0.69632 7.92576-1.00352 10.17856-4.33152l75.55072-110.92992-130.79552-30.60736L568.4736 869.0176z"
						fill="#1989fa"
						p-id="934"
					></path>
				</svg>
				<h1 class="logo-title">BookerUI</h1>
				<span class="logo-desc">next</span>
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
@import url('./assets/icon.scss');

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	p {
		color: #5e6d82;
	}
	h2 {
		color: #1f2f3d;
	}
}

.container {
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		display: flex;
		background-color: #fff;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
		line-height: 70px;
		height: 70px;

		.navbar-brand {
			display: flex;
			align-items: center;
			color: #1989fa;

			.logo-desc {
				font-size: 12px;
				margin-top: -30px;
			}

			&:hover {
				color: #f40;
			}
		}

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
			padding: 23px 0;
			margin-bottom: 2px;

			&.active {
				color: #1989fa;
				border-bottom: 2px solid #1989fa;
			}
		}
	}

	.main {
		position: relative;
		margin-top: 70px;
		overflow: scroll;
	}
}
</style>

<template>
	<div class="container">
		<nav class="navbar">
			<router-link :to="{name: 'design'}" class="navbar-brand" href="#">
				BookerUI+
			</router-link>
			<div class="navbar-content" @click="handleTab">
				<input
					type="text"
					class="navbar-search"
					placeholder="搜索文档"
				/>
				<a
					href="#"
					v-for="(tab,index) in tabList"
					:key="'tab' + index"
					class="navbar-item"
					:class="{
						'active': tab.isActive
					}"
					@click.stop="handleTab(tab)"
					>{{ tab.title }}</a
				>
			</div>
		</nav>

		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from "vue-router";

interface TabProps {
	title: string;
	router: string;
	isActive: boolean
}


export default defineComponent({
	name: 'App',
	components: {},
	setup() {
		const router = useRouter()
		const tabList = reactive([{
				title: '指南',
				router: 'design',
				isActive: true
			},
			{
				title: '组件',
				router: 'component',
				isActive: false
			},
			{
				title: '资源',
				router: 'resource',
				isActive: false
			},
		])

		const activeTab = ref('guide')
		const handleTab = (tab: TabProps) => {
			router.push({name: tab.router})
			tabList.forEach( ele => {
				if (ele.title === tab.title) {
					ele.isActive = true
				} else {
					ele.isActive = false
				}
			})

			return 0
		}

		return {
			tabList,
			handleTab,
			activeTab,
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
</style>

<template>
	<div class="container">
		<nav class="navbar">
			<router-link to="/guide" class="navbar-brand" href="#"> Booker+ </router-link>
			<div class="navbar-content">
				<input
					type="text"
					class="navbar-search"
					placeholder="搜索文档"
				/>
				<router-link to="/guide" class="navbar-item active" href="#">指南</router-link>
				<router-link to="/component" class="navbar-item" href="#">组件</router-link>
				<a class="navbar-item" href="#">GiuHub</a>
			</div>
		</nav>

		<router-view></router-view>
	</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'App',
	components: {},
	setup() {

		const handleTab = () => {
			return 0
		}

		return {

		}
	}
})
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.container {
	width: 90%;
	margin: 0 auto;
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

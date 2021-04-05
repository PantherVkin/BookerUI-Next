<template>
	<div class="guide-nav">
		<div class="guide-item">
			<h1>导航设计</h1>
			<p>
				导航可以解决用户在访问页面时：在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2
				种类型。
			</p>
		</div>

		<div class="guide-item">
			<h2>顶部导航</h2>
			<p>顶部导航用于显示一级路由（如：指南、组件、资源等）的视图。</p>
			<img src="../../assets/TopNav.png" alt="" />
		</div>
		<div class="guide-item">
			<h2>侧栏导航</h2>
			<p>
				可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，如：指南、组件、资源等一级路由。
			</p>
			<p>
				左边侧栏导航，显示对应一级路由的子路由，和一级路由保持联动。
			</p>
			<img src="../../assets/LeftNav.png" alt="" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.guide-item {
	margin-bottom: 50px;
	p {
		font-size: 14px;
	}
	a {
		color: #409eff;
		text-decoration: none;
		font-size: 14px;

		&:hover {
			color: #1989fa;
			font-weight: 800;
		}
    }
    img {
        height: 400px;
        width: 100%;
    }
}
</style>
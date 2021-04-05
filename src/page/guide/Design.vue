<template>
	<div class="design">
		<div class="design-item">
			<h1>设计原则</h1>
			<p>基于Vue.js的高质量UI框架。</p>
		</div>
		<div class="design-item">
			<h2>BookerUI-Next</h2>
			<p>BookerUI-Next 是一个基于 Vue3 的高质量UI组件库。</p>
		</div>
		<div class="design-item">
			<h2>Vue3 驱动</h2>
			<p>
				Vue是一套用于构建用户界面的渐进式JavaScript框架,本项目是基于Vue3.x上开发。
			</p>
		</div>
		<div class="design-item">
			<h2>一致性 Consistency</h2>
			<ul>
				<li>
					<p>
						<strong>与现实生活一致：</strong> 与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
					</p>
				</li>
				<li>
					<p>
						<strong>在界面中一致：</strong> 所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
					</p>
				</li>
			</ul>
		</div>
        <div class="design-item">
			<h2>反馈 Feedback</h2>
			<ul>
				<li>
					<p>
						<strong>控制反馈：</strong> 通过界面样式和交互动效让用户可以清晰的感知自己的操作；
					</p>
				</li>
				<li>
					<p>
						<strong>页面反馈：</strong> 操作后，通过页面元素的变化清晰地展现当前状态。
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.design-item {
    margin-bottom: 50px;
}
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
</style>
<template>
	<div class="z-attr">
		<h2>{{ title }}</h2>
		<table class="attr-table">
			<thead>
				<tr>
					<th
						class="z-attr-title"
						v-for="(item, index) in tableColumns"
						:key="'th' + index"
						:class="{
							border: border
						}"
					>
						{{ item.title }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in data" :key="'tr' + index">
					<td
						class="z-attr-title td"
						:class="{
							border: border
						}"
						v-for="(value, key) in item"
						:key="'tr' + key"
					>
						{{ value }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'attr',
	props: {
		title: {
			type: String,
			default: 'Attributes'
		},
		data: {
			type: Object,
		},
		columns: {
			type: Array,
		},
		border: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {


		const tableColumns = props.columns || [
			{
				title: '参数',
				dataIndex: 'params',
				key: 'age',
			},
			{
				title: '说明',
				dataIndex: 'desc',
				key: 'age',
			},
			{
				title: '类型',
				dataIndex: 'type',
				key: 'age',
			},
			{
				title: '可选值',
				dataIndex: 'select',
				key: 'age',
			},
			{
				title: '默认值',
				dataIndex: 'default',
				key: 'age',
			},
		]

		return {
			tableColumns,
		}
	},
})
</script>

<style lang="scss" scoped>
.z-attr {
	width: 100%;
	overflow-x: auto;
	margin-top: 25px;

	h2 {
		color: #1f2f3d;
		font-size: 22px;
	}
	.attr-table {
		width: 100%;
		border-collapse: collapse;
		background-color: #fff;
		font-size: 14px;
		line-height: 1.5em;
	}
	.z-attr-title {
		text-align: left;
		white-space: nowrap;
		color: #1f2f3d;
		font-weight: 400;
		border-bottom: 1px solid #dcdfe6;
		padding: 15px;
		max-width: 250px;

		&.border {
			border: 1px solid #dcdfe6;
		}
	}
	.td {
		color: #1f2f3d;

		&.border {
			border: 1px solid #dcdfe6;
		}
	}
}
</style>
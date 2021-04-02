<template>
	<div class="dropdown">
		<div class="dropdown-link">
			<button ref="DropDownRef" @[trigger].stop="handleTrigger">
				<slot name="title"> {{ dropdownLink }} </slot>
			</button>
		</div>

		<ul class="dropdown-menu" v-show="isVisible">
			<slot></slot>
		</ul>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import useClickOutside from '../hooks/useClickOutside'

type EventProps = 'click' | 'mouseenter'
export default defineComponent({
	props: {
		dropdownLink: {
			type: String,
			default: 'DropDown',
		},
		trigger: {
			type: String as PropType<EventProps>,
			default: 'click',
		},
		command: {
			type: Function,
		},
		timeout: {
			type: Number,
			default: 200,
		},
	},
	setup(props) {
		const DropDownRef = ref(null)

		const isOut = useClickOutside(DropDownRef)
		const isVisible = isOut

		const handleTrigger = () => {
			if (props.trigger == 'click') {
				setTimeout(() => {
					isVisible.value = !isVisible.value
				}, props.timeout)
			}
			if (props.trigger == 'mouseenter') {
				setTimeout(() => {
					isVisible.value = true
				}, props.timeout)
			}
			if (props.command) {
				props.command()
			}
		}

		return {
			isVisible,
			DropDownRef,
			handleTrigger,
		}
	},
})
</script>
<style lang="scss">
.dropdown {
	width: 200px;

	.dropdown-link {
		button {
			height: 40px;
			width: 100%;
			outline: none;
			border: none;
			background-color: #1989fa;
			color: #fff;
			cursor: pointer;

			&:hover {
				opacity: 0.5;
			}
		}
	}

	.dropdown-menu {
		background-color: #fff;
		box-shadow: 0 0 1px 0 #666;
		padding: 0;

		li {
			padding: 10px;
			list-style: none;
			cursor: pointer;

			&:hover {
				background-color: #f2f6fc;
				color: #1989fa;
				opacity: 0.5;
			}
		}
	}
}
</style>
<template>
	<div class="guide">
        <div class="left">
            <h4>
                <router-link :to="{name: 'design'}">指南</router-link>
            </h4>
            <h4>
                <router-link :to="{name: 'nav'}">导航</router-link>
            </h4>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'App',
	components: {},
	setup() {
		const activeTab = ref('guide')
		const handleTab = (e: MouseEvent) => {
			const target = e.target as Element
			if (target.nodeName == 'A') {
				activeTab.value = '' +  target.getAttribute('name')
			}
			return 0
		}

		return {
			handleTab,
			activeTab,
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
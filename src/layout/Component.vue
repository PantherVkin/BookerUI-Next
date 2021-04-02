<template>
	<div class="guide">
        <div class="left">
            left
        </div>
        <div class="content">
            content
        </div>
        <div class="right">
            right
        </div>
    </div>
</template>


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
        padding: 30px 20px;
        flex-grow: 1;
        background-color: #0ff;
    }

    .right {
        background-color: #f40;
        padding: 30px 0 0 10px;
        width: 100px;
        height: 800px;
        overflow: scroll;
    }
}
</style>
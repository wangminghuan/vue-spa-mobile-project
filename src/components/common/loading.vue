<template>
	<div class="common-loading" v-show="show">
		<div class="loading-box">
			<i v-for="n in 3" :key="n"></i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'loading',
	props: {
		show: {
			default: false,
			type: Boolean,
		}
	}
}
</script>
<style lang="scss">
@import "../../../static/css/mixin.scss";
// 全局loading
.common-loading{
    z-index: 9999999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @include center;
    .loading-box {
        i {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #f50;
            margin-right: 10px;
            @include prefix(animation, loading 1s -.6s linear infinite);
        }

        i:nth-child(2) {
            background: #2AFE0A;
            @include prefix(animation-delay, -.4s);
        }

        i:nth-child(3) {
            background: #19bfee;
            @include prefix(animation-delay, -.2s);
        }
    }
}
@include keyframes(loading) {
    0% {
        @include prefix(transform, scale(0));
    }

    50% {
        @include prefix(transform, scale(1));
    }

    100% {
        @include prefix(transform, scale(0));
    }
}
</style>

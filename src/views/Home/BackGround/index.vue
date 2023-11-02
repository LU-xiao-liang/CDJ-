<!-- 结构 -->
<template>
    <div class="background">
        <img style="--i:0"
            src="http://web.livewallpaper.giantapp.cn/livewallpaper/upload/wallpapers/c8458850059b491abd6c9cee33f9ba0e/fc8e6465644137ab095d83ff68f2c4fd/1669078863206_pf7cN.png">
        <img style="--i:1"
            src="http://web.livewallpaper.giantapp.cn/livewallpaper/upload/wallpapers/07700c0093384780a529c6774cd28b97/233d13796522b06205e0eb5f676091d7/1696772088258_cAHcx.jpg">
        <img style="--i:2"
            src="http://web.livewallpaper.giantapp.cn/livewallpaper/upload/wallpapers/8eda32dea0704bce9e978548cb09b565/2cc84e26641e789c06008daf142889ce/1679296774317_SHSQs.png">
        <img style="--i:3"
            src="http://web.livewallpaper.giantapp.cn/livewallpaper/upload/wallpapers/1dc25f4138e84c599baf835352e4b6ee/15af3e5d63b76b280021740b70e16e96/1661836284376_a3UDj.jpg">
    </div>
</template>

<!-- 逻辑 -->
<script >
export default {
    name: 'BackGround',
}
</script>

<!-- 样式 -->
<style scoped>
.background {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.background img {
    border-radius: 50%;
    object-fit: cover;
    animation: moveDown 10s linear infinite;
    animation-delay: calc(-1s*var(--i));
}

.background img:nth-child(1) {
    width: 350px;
    height: 350px;
    position: absolute;
    left: -3%;
    top: 13%;
    z-index: 1;
    /* transform: translate(-50%,-50%); */
}

.background img:nth-child(2) {
    width: 270px;
    height: 270px;
    position: absolute;
    left: 5%;
    bottom: -2%;
    /* transform: translate(-50%,-50%); */
}

.background img:nth-child(3) {
    width: 350px;
    height: 350px;
    position: absolute;
    right: -4%;
    top: -4%;
    z-index: 1;
    /* transform: translate(-50%,-50%); */
}

.background img:nth-child(4) {
    width: 270px;
    height: 270px;
    position: absolute;
    right: -3%;
    top: 47%;
    /* transform: translate(-50%,-50%); */
}

@keyframes moveDown {
    0%,100%{
        transform: translateY(-20px);
    }
    50%{
        transform: translateY(20px);
    }
}
</style>
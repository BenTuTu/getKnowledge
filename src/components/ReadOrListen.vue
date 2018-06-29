<template>
    <div>
        <h2>这是标题</h2>
        <div class="listenCon">
            <img class="audioImg" src="../images/get.png" alt="心事重重">
            <audio autoplay="autoplay" controls="controls">
                <source src="../music/wkg.aac" type="audio/mpeg">
                您的浏览器不支持 audio 标签。
            </audio>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
h2 {
    text-align: center;
}
.audioImg {
    display: inline-block;
    width: 48px;
}
</style>

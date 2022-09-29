<template>
    <div class="loader d-flex justify-content-center align-items-center">
        <div class="load"></div>
    </div>
</template>

<script>
export default {
    name: 'MainLoader'
}
</script>

<style scoped>
    .load{
        width: 140px;
        height: 140px;
        border-radius: 50%;
        border: 15px solid transparent;
        border-top: 15px solid rgb(0, 13, 255);
        border-bottom: 15px solid rgb(0, 13, 255);
        animation: rotate 1s linear infinite;
    }

    .loader{
        width: 100%;
        height: calc(100vh / 2);
    }

    @keyframes rotate{
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
</style>
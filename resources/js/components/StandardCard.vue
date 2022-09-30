<template>
    <div class="standard-card">
        <h3>
            {{ cardElement.name }}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'StandarCard',

    props:{
        'cardElement': Object,
    }
}
</script>

<style>

</style>
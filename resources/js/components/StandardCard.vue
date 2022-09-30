<template>
    <div class="col-2 text-center card p-0">
        <h5 class="card-header">Tag # {{ cardElement.id }}</h5>
        <div class="card-body">
            <h5 class="card-title">{{ cardElement.name }}</h5>
            <a href="#" class="btn btn-primary">View post</a>
        </div>
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
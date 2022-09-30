<template>
    <div class="col-2 text-center card p-0">
        <h5 class="card-header">Tag # {{ cardElement.id }}</h5>
        <div class="card-body">
            <h5 class="card-title">{{ cardElement.name }}</h5>
            <router-link :to="'tags/' + cardElement.id " class="btn btn-primary">View post</router-link>
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
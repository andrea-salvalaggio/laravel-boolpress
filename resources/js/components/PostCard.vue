<template>
    <div class="card">
        <img class="card-img-top img-fluid" :src="post.post_image" alt="">
        <div class="card-body">
            <h2 class="font-weight-bold">
                <router-link :to="'posts/' + post.id ">{{ post.post_title }}</router-link>
            </h2>
            <p class="card-text">{{ post.post_content }}</p>
            <p>Post written by {{ post.user.name }} | on {{ post.post_date }}</p>

            <div class="d-flex">
                <h5 class="font-weight-bold">Tags: </h5>
                <!-- Add tags in PostCard -->
                <TagPostIndex v-for="tag in post.tags" :key="tag.id" :tag="tag"/>
            </div>
        </div>
    </div>
</template>

<script>
import TagPostIndex from './TagPostIndex.vue';

export default {

    components: {
        TagPostIndex
    },

    props: {
        post: Object
    },

}
</script>

<style>

</style>
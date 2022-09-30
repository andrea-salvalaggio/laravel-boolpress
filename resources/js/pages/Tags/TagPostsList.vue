<template>
    <main class="container">
        <div class="row justify-content-center">
            <div class="col-6 mt-5">
                <div v-if="isLoading" class="loader">
                    <MainLoader/>
                </div>
                <div v-else class="posts-container">
                    <h2 class="font-weight-bold">Tag </h2>
                    <hr>
                    <PostCard v-for="post in tag.posts" :key="post.id" :post="post" class="my-5"/>
                </div>
            </div>å
        </div>
    </main>
</template>

<script>
import PostCard from '../../components/PostCard.vue';
import MainLoader from '../../components/MainLoader.vue';
import axios from 'axios';

    export default {
    name: 'TagPostsList',
    
    components: {
        PostCard,
        MainLoader
    },

    data: function () {
        return {
            tag: {
                post: ''
            },
            isLoading: true,
        };
    },

    methods: {
        getPost() {
            const id = this.$route.params.id;
            axios.get(`/api/tags/${id}`)
                .then((response) => {
                this.tag = response.data.results.data;
                this.isLoading = false;
            }).catch((error) => {
                console.log("error");
            });
        },
    },

    created() {
        this.getPost();
    },
}

</script>

<style>

</style>
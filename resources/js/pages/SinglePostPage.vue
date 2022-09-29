<template>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 mt-5">
                    <PostCard :key="post.id" :post="post" class="my-5"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import PostCard from '../components/PostCard.vue';
import axios from 'axios';

    export default {
    name: 'SinglePostPage',
    
    components: {
        PostCard,
    },

    data: function () {
        return {
            post: {
                user: ''
            },
            isLoading: true,
        };
    },

    methods: {
        getPost() {
            const id = this.$route.params.id;
            axios.get(`/api/posts/${id}`)
                .then((response) => {
                // console.log(response.data.results.data)
                this.post = response.data.results.data;
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
<template>
    <div>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-6 mt-5">
                        <h1 class="font-weight-bold">Posts</h1>
                        <hr>
                        <PostCard v-for="post in posts" :key="post.id" :post="post" class="my-5"/>
                    </div>
                </div>
            </div>
        </main>
        
        <FooterComponent/>
    </div>
</template>

<script>
import PostCard from '../components/PostCard.vue';
import FooterComponent from '../components/FooterComponent.vue';
import axios from 'axios';

export default {
    name: 'Home',

    components: {
        PostCard,
        FooterComponent
    },
    
    data: function () {
        return {
            posts: [],
            currentPage: 1,
            lastPage: null,
            isLoading: true
        };
    },

    methods: {
        getPosts(postsPage = 1) {
            axios.get("/api/posts", {
                page: postsPage
            }).then((response) => {
                // console.log(response.data.results.data)
                this.posts = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            }).catch((error) => {
                console.log("error");
            });
        },
    },

    created() {
        this.getPosts();
    },
};
</script>

<style>

</style>
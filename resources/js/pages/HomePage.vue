<template>
    <div>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-6 mt-5">
                        <div v-if="isLoading" class="loader">
                            <MainLoader/>
                        </div>
                        <div v-else class="posts-container">
                            <h2 class="font-weight-bold">Posts</h2>
                            <hr>
                            <PostCard v-for="post in posts" :key="post.id" :post="post" class="my-5"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <FooterComponent/>
    </div>
</template>

<script>
import axios from 'axios';
import FooterComponent from '../components/FooterComponent.vue';
import MainLoader from '../components/MainLoader.vue';
import PostCard from '../components/PostCard.vue';

export default {
    name: 'HomePage',

    components: {
        PostCard,
        FooterComponent,
        MainLoader
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
                this.posts = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.isLoading = false;
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
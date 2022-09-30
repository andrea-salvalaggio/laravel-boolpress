<template>
    <main class="container">
        <div class="row justify-content-center">
            <div class="col-6 mt-5">
                <div v-if="isLoading" class="loader">
                    <MainLoader/>
                </div>
                <div v-else class="tags-container">
                    <h1 class="font-weight-bold">Available tags:</h1>
                    <hr>
                    <StandardCard v-for="tag in tags" :key="tag.id" :cardElement="tag" class="my-5"/>
                </div>
            </div>
        </div>>
    </main>
</template>

<script>
import axios from 'axios';
import MainLoader from '../../components/MainLoader.vue';
import StandardCard from '../../components/StandardCard.vue';

export default {

    components:{
        MainLoader,
        StandardCard
    },

    name: 'TagsIndexPage',

    data: function(){
        return{
            tags: [],
            currentPage: 1,
            lastPage: null,
            isLoading: true
        }
    },

    methods:{
        getTags(tagsPage = 1){
            axios.get("/api/tags", {
                page: tagsPage
            }).then((response) => {
                this.tags = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.isLoading = false;
            }).catch((error) => {
                console.log("error");
            });
        },
    },

    created(){
        this.getTags();
    },

}
</script>

<style>

</style>
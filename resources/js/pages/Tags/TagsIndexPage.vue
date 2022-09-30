<template>
    <div>
        Tags
    </div>
</template>

<script>
import axios from 'axios';

export default {
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
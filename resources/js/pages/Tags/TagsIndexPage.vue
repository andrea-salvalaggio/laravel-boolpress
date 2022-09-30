<template>
    <div>
        Tags
    </div>
</template>

<script>
export default {
    name: 'TagsIndexPage',

    data: function(){
        return{
            tags: [],
            isLoading: true 
        }
    },

    methods:{
        getTags(){

        }
    },

    created(){
        this.getTags();
        console.warn('Tags');
    },

}
</script>

<style>

</style>
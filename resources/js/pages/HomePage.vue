<template>
    <div>
        <MainComponent/>
        <FooterComponent/>
    </div>
</template>

<script>
import MainComponent from '../components/MainComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'Home',
    components: {
        MainComponent,
        FooterComponent
    }  
};
</script>

<style>

</style>
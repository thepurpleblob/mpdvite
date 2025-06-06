<template>
    <div class="container p-0 p-xs-1" id="app">
        <PageHeader></PageHeader>
        <router-view/>
        <PageFooter></PageFooter>
    </div>
</template>

<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import PageHeader from '@/components/PageHeader.vue';
    import PageFooter from '@/components/PageFooter.vue';
</script>

<style>
    
</style>
<template>
    <main>
        <div class="text-center my-4" v-html="preamble"></div>
        <HomeCarousel></HomeCarousel>
        <div v-html="content"></div>
    </main>
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import HomeCarousel from '@/components/HomeCarousel.vue';
    import axios from 'axios';

    const preamble = ref('');
    const content = ref('');

    onMounted(() => {
        const endpoint = import.meta.env.VITE_APP_ENDPOINT;

        axios.get(endpoint + '/items/frontpage')
        .then(response => {
            const data = response.data.data;
            preamble.value = data.preamble;
            content.value = data.content;
        })
        .catch(error => {
            window.console.error(error);
        });
    });
</script>

<style>
    main img {
        max-width: 100%;
    }

    iframe {
        aspect-ratio: 16 / 9;
        width: 100% !important;
    }
</style>
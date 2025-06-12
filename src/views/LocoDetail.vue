<template>
    <div class="pt-2">
        <h2 class="text-center">{{ loco.title }}</h2>
        <CarouselImages :images="images"></CarouselImages>
        <div v-html="loco.content" class="my-3"></div>
    </div>
</template>

<script setup>
    import {ref, onMounted, defineProps} from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';
    import CarouselImages from '@/components/CarouselImages.vue';

    const route = useRoute();

    const images = ref([]);
    const loco = ref({});

    onMounted(() => {
        const endpoint = import.meta.env.VITE_APP_ENDPOINT;
        const id = route.params.id;

        // Get loco details for ID
        axios.get(endpoint + '/items/locos/' + id)
        .then(response => {
            const data = response.data.data;
            loco.value = data;
            const folder = data.imagefolder;
            const folderfilter = {
                folder: {
                    _eq: folder,
                }
            };

            return axios.get(endpoint + '/files?filter=' + JSON.stringify(folderfilter));
        })
        .then(result => {
            images.value = result.data.data;
        })
        .catch(error => {
            window.console.error(error);
        });

    });
</script>
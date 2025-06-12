<template>
    <CarouselImages :images="images"></CarouselImages>
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    import CarouselImages from '@/components/CarouselImages.vue';

    const images = ref([]);

    onMounted(() => {
        const endpoint = import.meta.env.VITE_APP_ENDPOINT;
        const filter = {
            name: {
                _eq: 'Carousel',
            }
        };

        axios.get(endpoint + '/folders?filter=' + JSON.stringify(filter))
        .then(response => {
            const folder = response.data.data[0];
            const folderid = folder.id;
            const folderfilter = {
                folder: {
                    _eq: folderid,
                }
            };

            return axios.get(endpoint + '/files?filter=' + JSON.stringify(folderfilter))
        })
        .then(response => {
            const data = response.data.data;
            images.value = data;
        })
        .catch(error => {
            window.console.error(error);
        });
    });
</script>
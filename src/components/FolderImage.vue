<template>
    <img class="img-fluid" :src="assets + '/' + image.filename_disk" style="height: 200px">
</template>

<script setup>
    import {ref, onMounted, defineProps} from 'vue';
    import axios from 'axios';

    const image = ref({});
    const assets = import.meta.env.VITE_APP_ENDPOINT + '/assets';

    const props = defineProps({
        folder: String,
    });

    onMounted(() => {
        const endpoint = import.meta.env.VITE_APP_ENDPOINT;

        const folderfilter = {
            folder: {
                _eq: props.folder,
            }
        };

        axios.get(endpoint + '/files?limit=1&filter=' + JSON.stringify(folderfilter))
        .then(result => {
            const data = result.data.data;
            image.value = data[0];
        })
        .catch(error => {
            window.console.error(error);
        })
    })
</script>
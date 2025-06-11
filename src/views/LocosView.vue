<template>
    <div v-if="!locos" class="my-4 alert alert-primary">
        Nothing to see here, just yet. Please come back soon.
    </div>

    <div v-if="locos">
        <div class="row my-5">
            <div v-for="loco in locos"class="col-12 col-md-4 gy-1">
                <div  class="card text-center py-1">
                        <div class="card-img-top">
                            <FolderImage :folder="loco.imagefolder"></FolderImage>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ loco.title }}</h5>
                            <p class="card-text" v-html="loco.shortinfo"></p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    import FolderImage from '@/components/FolderImage.vue';

    const locos = ref([]);

    onMounted(() => {
        const endpoint = import.meta.env.VITE_APP_ENDPOINT;

        const published = {
            status: {
                _eq: 'published'
            }
        };
        axios.get(endpoint + '/items/locos?filter' + JSON.stringify(published))
        .then(result => {
            const data = result.data.data;
            locos.value = data;
        })
        .catch(error => {
            window.console.error(error);
        })
    });
</script>

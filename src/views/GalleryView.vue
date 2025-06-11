<template>
     <PhotoAlbum :photos="photos" layout="rows" />
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    import { PhotoAlbum } from 'vue-photo-album';

    const photos = ref([]);

    onMounted(() => {
        const endpoint = import.meta.env.VITE_APP_ENDPOINT;
        const filter = {
            name: {
                _eq: 'Gallery',
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
            const images = convert(data);
            photos.value = images;
        })
        .catch(error => {
            window.console.error(error);
        });
    });

    /**
     * Convert list of images into form that PhotoAlbum might like
     * See: https://tenthree.github.io/vue-photo-album/guide/get-started
     */
    function convert(images) {
        const endpoint = import.meta.env.VITE_APP_ENDPOINT;
        return images.map(image => {
            return {
                src: endpoint + '/assets/' + image.filename_disk,
                key: image.filename_download,
                width: image.width,
                height: image.height,
            }
        });
    }
</script>
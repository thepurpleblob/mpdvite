<template>
    <div class="my-2">
    <Carousel v-bind="carouselConfig">
        <Slide v-for="image in images" :key="image.id">
            <div class="carousel__item">
                <div class="card">
                    <img class="card-img" :src="assets + '/' + image.image" :alt="image.alttext">
                    <div v-if="image.visibletext" class="card-body">
                        <h4 class="card-title text-center" v-html="image.visibletext"></h4>
                    </div>
                </div>
            </div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import axios from 'axios';
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    const images = ref([]);
    const assets = import.meta.env.VITE_ASSETS;

    const carouselConfig = {
        itemsToShow: 1,
        wrapAround: true,
        autoplay: 5000,
        slideEffect: 'fade',
        pauseAutoplayOnHover: true,
    }

    onMounted(() => {
        const endpoint = import.meta.env.VITE_APP_ENDPOINT;
        const filter = {
            status: {
                _eq: 'published',
            }
        };

        axios.get(endpoint + '/carousel?filter=' + JSON.stringify(filter))
        .then(response => {
            const data = response.data.data;
            images.value = data;
        })
        .catch(error => {
            window.console.error(error);
        });
    });
</script>
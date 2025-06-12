<template>
    <div class="my-2">
        <Carousel v-bind="carouselConfig">
            <Slide v-for="image in images" :key="image.id">
                <div class="carousel__item">
                    <div class="card">
                        <img class="card-img" :src="assets + '/' + image.filename_disk" :alt="image.description">
                        <div v-if="image.description" class="card-body">
                            <h4 class="card-title text-center" v-html="image.description"></h4>
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
    import {defineProps} from 'vue';
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

    const props = defineProps({
        images: Array,
    });
    const assets = import.meta.env.VITE_APP_ENDPOINT + '/assets';

    const carouselConfig = {
        itemsToShow: 1,
        wrapAround: true,
        autoplay: 5000,
        slideEffect: 'fade',
        pauseAutoplayOnHover: true,
    }
</script>
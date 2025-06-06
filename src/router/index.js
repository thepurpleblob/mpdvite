import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/events',
            name: 'events',
            component: () => import('@/views/EventsView.vue')
        },
        {
            path: '/locos',
            name: 'locos',
            component: () => import('@/views/LocosView.vue')
        },
        {
            path: '/videos',
            name: 'videos',
            component: () => import('@/views/VideosView.vue')
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: () => import('@/views/GalleryView.vue')
        },
    ],
})

export default router

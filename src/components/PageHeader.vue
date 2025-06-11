<template>
    <div id="dieselheader" class="">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    <img src="@/assets/srps_diesel_logo_banner.png" alt="SRPS Diesel Logo" />
                </router-link>
                <button @click="openclosenav()" class="navbar-toggler" type="button" data-bs-toggle="collapse2" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse" :class="collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/')}">
                            <router-link @click="openclosenav()" class="nav-link px-0" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/locos')}">
                            <router-link @click="openclosenav()" class="nav-link px-0" to="/locos">Locos</router-link>
                        </li>
                        <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/events')}">
                            <router-link @click="openclosenav()" class="nav-link px-0" to="/events">Events</router-link>
                        </li>
                        <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/videos')}">
                            <router-link @click="openclosenav()" class="nav-link px-0" to="/videos">Videos</router-link>
                        </li>
                        <li class="nav-item border-bottom border-3 ms-3" :class="{'border-primary': isActive('/gallery')}">
                            <router-link @click="openclosenav()" class="nav-link px-0" to="/gallery">Gallery</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const collapse = ref('collapse');
    const route = useRoute();

    // Detect path to highlight
    function isActive(path) {
        return (path == route.path);
    }

    function openclosenav() {
        if (collapse.value == 'collapse') {
            collapse.value = 'collapse.show';
        } else {
            collapse.value = 'collapse';
        }
    }
</script>

<style>
    #dieselheader nav {
        background-color: #1976d2 !important;
    }

    #dieselheader {
        min-height: 100px;
        background-color: #1976d2;
    }
</style>
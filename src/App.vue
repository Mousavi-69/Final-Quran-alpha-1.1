<template>
<div class="container">
    <!-- <router-link></router-link> -->
    <router-view> </router-view>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'App',
    components: {}
})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    text-align: center;
    // background-color:red;

}
</style>

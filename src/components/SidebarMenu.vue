<template>
<div class="container">
    <ul class='list'>
        <li>page 1</li>
        <li>page 2</li>
        <li>page 3</li>

    </ul>
</div>
</template>

<script lang="ts">
import {
    ref,
    computed
} from 'vue'
import {
    useRouter,
    useRoute
} from "vue-router";
import {
    useStore
} from "vuex";
export default {
    name: "SidebarMenu",

    setup(props: any, context: any) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();

        return {

        }
    }

}
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {

    will-change: transform;
    width: 100px;
    height: 150px;
    background-color: $bgColor;

    .list {
        padding: 10px;

        li {
            margin-bottom: 20px;
        }
    }
}
</style>

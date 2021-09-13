<template>
<div class="container">
    <header class="header">
        <search-box></search-box>
    </header>
    <section class="section">
        <list-sures></list-sures>
    </section>
</div>
</template>

<script lang="ts">
import {
    ref,
    computed,
    defineComponent
} from 'vue'
import {
    useRouter,
    useRoute
} from "vue-router";
import {
    useStore
} from "vuex";
import SearchBox from '@/components/SearchBox.vue'
import ListSures from '@/components/ListSures.vue'

export default defineComponent({
    components: {
        SearchBox,
        ListSures

    },
    setup(props, context) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();

        return {}
    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.header {}
</style>

<template>
<div class="container">
    <div>
    <header class="header">
        <search-box></search-box>
    </header>
    <section class="section">
        <list-sures></list-sures>
    </section>
    </div>
    <sidebar-menu class="fixe"></sidebar-menu>
    <select-translator class="fixe"></select-translator>
    <select-reciter class="fixe"></select-reciter>
</div>
</template>

<script lang="ts">
import {
    ref,
    computed,
    defineComponent
} from 'vue'
import {
    useStore
} from "vuex";
import SearchBox from '@/components/SearchBox.vue'
import ListSures from '@/components/ListSures.vue'
import SidebarMenu from '@/components/SidebarMenu.vue';
import SelectTranslator from '@/components/SelectTranslator.vue';
import SelectReciter from '@/components/SelectReciter.vue';

export default defineComponent({
    components: {
        SearchBox,
        ListSures,
        SidebarMenu,
        SelectTranslator,
        SelectReciter

    },
    setup() {

        let store = useStore();
        let statusAudioPlayer = computed(() => store.state.sidebarStatus)

        return {
            statusAudioPlayer
        }
    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.fixe {
    position: fixed;
}
</style>

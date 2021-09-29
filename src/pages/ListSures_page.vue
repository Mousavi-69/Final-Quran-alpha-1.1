<template>
<div class="container">
    <header class="header">
        <search-box></search-box>
    </header>
    <section class="section">
        <list-sures></list-sures>
    </section>
    <sidebar-menu class="fixe" v-if="statusAudioPlayer"></sidebar-menu>
    <select-translator class="fixe"  v-if="statusSelectTranslator"></select-translator>
    <select-reciter class="fixe" v-if="statusSelectReciter" ></select-reciter>
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
        SidebarMenu,SelectTranslator,SelectReciter

    },
    setup() {
      
        let store = useStore();
        let statusAudioPlayer = computed(()=>store.state.sidebarStatus)
        let statusSelectTranslator = computed(()=>store.state.selectTranslatorStatus)
        let statusSelectReciter = computed(()=>store.state.selectReciterStatuse)

        return {statusAudioPlayer,statusSelectTranslator,statusSelectReciter}
    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";
.fixe{
    position: fixed;
}

</style>

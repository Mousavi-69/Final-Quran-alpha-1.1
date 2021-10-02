<template>
<div class='container' @click.stop="closeMenu()">
    <fa class="menuIcon" icon="bars" @click.stop="openMenu()" />

    <header class="header">
        <div> صفحه {{pageNumber}}</div>
        <div>سوره {{sureName}}</div>
        <div>جزء {{juzNumber}}</div>
    </header>
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

export default defineComponent({
    name: 'SearchBox',
    props: ['pageNumber', 'sureName', 'juzNumber'],

    setup(props, context) {
        const store = useStore()

        function openMenu() {
            store.state.selectReciterStatuse = false;
            store.state.selectTranslatorStatus = false;
            store.state.changeFontStatus = false;

            store.commit('openSidebarMenu');
        };

        function closeMenu() {
            store.state.selectTranslatorStatus = false;
            store.state.selectReciterStatuse = false;
            store.state.sidebarStatus = false;
            store.state.changeFontStatus = false;

        };
        return {
            openMenu,
            closeMenu
        }
    }

})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    z-index: 10;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
}

.header {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: $bgColor;

}

.menuIcon {
    position: absolute;
    top: 7px;
    right: 15px;
    padding: 3px;
    font-size: 1.1rem;

}
</style>

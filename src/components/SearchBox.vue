<template>
<div class="container">
    <header class="header">
        <form action="">
            <input type="search" v-model="searchValue" @click="closeMenu()" @input="filterText" placeholder="جستجو ..." />
            <fa class="searchIcon" icon="search" />
        </form>
        <span class="hamburgerMenu" @click.stop="openSidebar()">
            <fa class="menuIcon" icon="bars" />
        </span>
    </header>
</div>
</template>

<script lang="ts">
import {
    ref,
    defineComponent
} from 'vue'

import {
    useStore
} from "vuex";

export default defineComponent({
    name: 'SearchBox',
    setup() {
        const store = useStore();
        const searchValue = ref(store.state.search_value);

        function filterText() {
            store.state.selectTranslatorStatus = false;
            store.state.selectReciterStatuse = false;
            store.state.sidebarStatus = false;
            store.state.changeFontStatus = false;

            store.commit('setSearchValue', searchValue.value);
        };

        function openSidebar() {
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

        }
        return {
            searchValue,
            filterText,
            openSidebar,
            closeMenu
        }
    }

})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    height: 30px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
    background-color: $bgColor;
    @include boxStyle($primaryColor, 0px 0px 25px 25px);

    input {
        width: 100%;
        padding: 8px 40px 5px 10px;
        @include textStyle(rgb(0, 0, 0));
        border-width: 0px;
        background-color: $primaryColor;

        &:focus {
            border-width: 0px;
            outline: none;
        }
    }
}

.header {
    .searchIcon {
        position: absolute;
        left: 35px;
        top: 18px;
        font-size: 1.2rem;
        color: gray;
    }

    .hamburgerMenu {
        position: absolute;
        right: 18px;
        top: 13px;
        font-size: 1.2rem;
        padding: 2px;
    }
}
</style>

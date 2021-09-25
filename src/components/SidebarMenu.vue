<template>
<div class="container">
    <ul class='list'>
        <li @click.stop="">
            <fa class="searchIcon" icon="search" />
            <span> جستجوی آیه</span> </li>
        <li @click.stop="selectReciter()">
            <fa class="microphoneIcon" icon="microphone-alt" />
            <span>انتخاب قاری</span></li>
        <li @click.stop="selectTranslator()">
            <fa class="tarjomeIcon" icon="globe-asia" />
            <span>انتخاب ترجمه</span></li>
        <li @click.stop="">
            <fa class="fontSizeIcon" icon="font" />
            <span>تغییر اندازه قلم </span></li>
        <li>
            <fa class="exitIcon" icon="times" />
            <span>خروج</span> </li>

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

function selectReciter(){
    store.state.selectReciterStatuse = true;
store.state.sidebarStatus = false;
};
function selectTranslator(){
store.state.selectTranslatorStatus = true;
store.state.sidebarStatus = false;
};
        return {
selectReciter,selectTranslator,
        }
    }

}
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    position: absolute;
    top: 30%;

    z-index: 20;
    will-change: transform;
    width: 150px;
    height: 200px;
    background-color: rgba(236, 236, 236, 0.932);
    border-radius: 25px 0 0 25px;
    border: 1PX solid $bgColor;

    .list {

        padding: 10px;

        li {
            // margin-bottom: 20px;
            padding: 10px;

            span {
                padding-right: 7px;
                font-size: 1rem;
                font-weight: 600;
                color: $fontColor;
            }

        }

    }

}
</style>

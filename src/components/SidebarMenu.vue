<template>
<div class="container" :class="{'transformMenue':statusAudioPlayer}">
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
        <li @click.stop="ChangeFont()">
            <fa class="fontSizeIcon" icon="font" />
            <span> فونت-اندازه قلم </span></li>
        <li>
            <fa class="exitIcon" icon="times" />
            <span>خروج</span> </li>

    </ul>
</div>
</template>

<script lang="ts">
import {
    ref,
    computed,
} from 'vue'
import {
    useStore
} from "vuex";
export default {
    name: "SidebarMenu",

    setup() {

        let store = useStore();
        let statusAudioPlayer = computed(() => store.state.sidebarStatus)

        function selectReciter() {
            store.state.selectReciterStatuse = true;
            store.state.sidebarStatus = false;
        };

        function selectTranslator() {
            store.state.selectTranslatorStatus = true;
            store.state.sidebarStatus = false;
        };

        function ChangeFont() {
            store.state.changeFontStatus = true;
            store.state.sidebarStatus = false;

        };
        return {
            selectReciter,
            selectTranslator,
            statusAudioPlayer,
            ChangeFont
        }
    }

}
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    will-change: transform;
    position: absolute;
    top: 30%;
    right: -50%;
    // left: 50%;
    z-index: 20;
    // width: 150px;
    height: 200px;
    background-color: rgba(236, 236, 236, 0.932);
    border-radius: 25px 0 0 25px;
    border: 1PX solid $bgColor;
    transition: transform 1.5s;

    .list {
        padding: 10px;

        li {
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

.transformMenue {
    //  right: 0px;
    transform: translate(-120%);
}
</style>

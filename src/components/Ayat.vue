// components:optionAye - 
<template>
<div class="container" @click="showHidenOption()">

    <p class="aye">
        <slot name="aye"></slot>
    </p>
    <p class="tarjome" @click.stop="showAllText()" :class="{'hidenTextTarjome':showTextClass,'centerTarjome':!showTextClass}">
        <slot name="tarjome"></slot>
    </p>
    <div class="option" v-if="showOptionStatus">
        <span class="save" @click.stop="saveAye()">
            <fa class="saveIcon" icon="save" />
        </span>
        <span class="play" @click="playAye(index)">
            <fa class="playIcon" icon="play-circle" />
        </span>
        <span class="share" @click.stop="shareAye()">
            <fa class="shareIcon" icon="share-alt-square" />
        </span>
    </div>
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
    props: ['index'],
    components: {

    },
    setup(props, context) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();
        let aye = ref();
        let tarjome = ref();
        const showOptionStatus = ref(false);
        let showTextClass = ref(true);

        function showHidenOption() {
            showOptionStatus.value = showOptionStatus.value ? false : true;
            store.state.selectTranslatorStatus = false;
            store.state.selectReciterStatuse = false;
            store.state.sidebarStatus = false;

        };

        function showAllText() {
            showTextClass.value = showTextClass.value ? false : true;
            store.state.showOverflowClass = store.state.showOverflowClass ? false : true;
            store.state.selectTranslatorStatus = false;
            store.state.selectReciterStatuse = false;
            store.state.sidebarStatus = false;
        };
        //Options
        function saveAye() {

        };

        function playAye(index: number) {
            console.log('index   :' + index)
            store.commit('createPath', index);
            if (store.state.audioStatusValue) {
                store.state.audioStatusValue = false;
                store.state.audioStatusValue = true;

            } else {
                store.state.audioStatusValue = true;
            }

        };
        // async function getCurrentAudio() {
        //     const response = await fetch(store.state.pathCurrentAudio);
        //     const json = await response.json();
        //     store.state.currentAudoi = json;
        // };

        function shareAye() {

        };
        return {
            aye,
            tarjome,
            showOptionStatus,
            showHidenOption,
            showAllText,
            showTextClass,
            saveAye,
            playAye,
            shareAye,
        }
    }

})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    position: relative;
    // height: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;

    .aye {
        @include boxStyle($lightWhite, 0, rgb(255, 255, 255), 7px);
        @include textStyle;
        display: inline-flexbox;
        flex-direction: column;
        padding-top: 15px;
        padding-bottom: 10px;

    }

    .tarjome {
        @include boxStyle($lightWhite, 0, rgb(255, 255, 255), 5px);
        @include textStyle(rgb(107, 107, 107), $fontSize_tarjome, 700);
        background-color: $bgColor_tarjome;
        color: $fontColor_tarjome;
        display: inline-flexbox;
        flex-direction: column;
        padding-top: 10px;
        padding-bottom: 10px;

    }

    .centerTarjome {
        align-items: center;

    }

    .hidenTextTarjome {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .option {
        position: absolute;
        //  width: calc(100%-7px);
        left: 0px;
        right: 0;
        z-index: 10;
        bottom: 1px;
        display: flex;
        justify-content: space-around;
        background-color: rgba(148, 147, 147, 0.219);
        border-radius: 5PX;
        // box-shadow: 5px 4px 18px 0px rgb(180, 180, 180) ;
        padding: 6PX;
        font-weight: 700;

        .playIcon,
        .saveIcon,
        .shareIcon {
            font-size: 1.3rem;
            padding: 3px;
        }
    }

}
</style>

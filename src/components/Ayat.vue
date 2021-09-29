// components:optionAye - 
<template>
<div class="container" @click="showHidenOption()">

    <p class="aye">
        <slot name="aye"></slot>
    </p>
    <p class="tarjome" @click.stop="showAllText()" :class="{'hidenTextTarjome':showTextClass,'centerTarjome':!showTextClass}">
        <slot name="tarjome"></slot>
    </p>
    <div class="option" :class="{'transformMenue':showOptionStatus}">
        <div class="optionParent">
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
    setup(props: any, context: any) {

        let store = useStore();
        let aye = ref();
        let tarjome = ref();
        let showOptionStatus = ref(false);
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
            store.commit('createPath', index);

            store.state.audioStatusValue = true;
            async () => {
                const response = await fetch(store.state.pathCurrentAudio);
                store.state.audio = await response.json();
            }

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

    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 3px 5px;
    border-radius: 15px;
    background-color: rgba(122, 215, 231, 0.438);
    padding: 3px 5px;

    .aye {
        // @include boxStyle($lightWhite, 0, rgb(255, 255, 255), 7px);
        @include textStyle;
        display: inline-flexbox;
        flex-direction: column;
        padding-top: 15px;
        padding-bottom: 10px;

    }

    .tarjome {
        // @include boxStyle($lightWhite, 0, rgb(255, 255, 255), 5px);
        @include textStyle(rgb(165, 165, 165), $fontSize_tarjome, 700, );
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
        will-change: transform;
        position: absolute;
        width: 50%;
        left: 100%;
        bottom: 0px;
        transition: transform 1s;

        .optionParent {
            display: flex;
            justify-content: space-around;
            background-color: rgba(255, 255, 255, 0.87);
            border-radius: 20PX 20PX 0px 0px;
            padding: 4PX;
            font-weight: 700;
        }

        .playIcon,
        .saveIcon,
        .shareIcon {
            font-size: 1.3rem;
            padding: 3px;
        }
    }

}

.transformMenue {
    transform: translate(-150%);

}
</style>

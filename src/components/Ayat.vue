// components:optionAye - 
<template>
<div class="container" @click="showHidenOption()">

    <p class="aye"  >
       <mark class="beforMark" :class="{'mark':StatusMark}"><slot name="aye"></slot></mark>
    </p>
    <p class="tarjome" @click.stop="showAllText()" :class="{'hidenTextTarjome':showTextClass,'centerTarjome':!showTextClass}">
        <slot name="tarjome"></slot>
    </p>
    <div class="option" :class="{'transformMenue':statusShowOption}">
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
        let route = useRoute();

        let store = useStore();
        let aye = ref();
        let tarjome = ref();
        let statusShowOption = ref(false);
        let showTextClass = ref(true);
let StatusMark=ref(false);
        function showHidenOption() {
            statusShowOption.value = statusShowOption.value ? false : true;
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
        StatusMark.value = StatusMark.value ? false : true;
            // async () => {
            //     const response = await fetch(store.state.pathCurrentAudio);
            //     store.state.audio = await response.json();
        }

        function shareAye() {

        };
        return {
            aye,
            tarjome,
            statusShowOption,
            showHidenOption,
            showAllText,
            showTextClass,
            saveAye,
            playAye,
            shareAye,StatusMark
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
.beforMark{
    background-color: rgba(255, 255, 255, 0);

}
.mark{
    background-color: rgb(255, 244, 91);
}
</style>

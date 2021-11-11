<template>
<div class="audioContainer" v-if="audioStatus" >
    <fa class="exiteIcon" icon="times" @click.stop="closeAudio()" />
    <span class="reciterName" @click.stop="selectResiter()">{{reciterName}}</span>
    <audio id="player" class="audio"  autoplay>
        <source :src="urlAudio" type="audio/mpeg">
        مرورگر شما این ویژگی را پشتیبانی نمیکند، لطفا مرورگر خود را بروزرسانی کنید
    </audio>
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
    name: 'AudioPlayer',

    setup(props: any, context: any) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();
        let audioStatus = computed(() => store.state.audioStatusValue);

        let urlAudio = computed(() => store.state.pathCurrentAudio)
        let reciterName = computed(() => {
            if (store.state.Reciter == 'Abdul_Basit_Murattal_64kbps') {
                return 'عبدالباسط'
            } else {
                return 'علی جابر'
            }
        });

        function closeAudio() {
            store.state.audioStatusValue = false;
        };

        function selectResiter() {
            store.state.selectReciterStatuse = true;
        };

        return {
            urlAudio,
            reciterName,
            closeAudio,
            selectResiter,
            audioStatus
        }
    }

})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.audioContainer {
    position: relative;
    //  bottom: -16%;
     bottom: 0px;
// left: -150%;
    background-color: $bgColor;
    padding: 5px;
    transition: transform 1s;
    z-index: 30;
    .exiteIcon {
        position: absolute;
        right: 10px;
        top: 2px;
        padding: 3px;
    }

    .reciterName {
margin: 2px;
        padding: 8px;
        color: $ayeNumber;
        font-size: 1.2rem;
        font-weight: 700;
    }

}

.transformMenue {
    // transform: translate(0, -114%);
    transform: translate(0,-100%);
}
</style>

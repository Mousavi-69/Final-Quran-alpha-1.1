// components:optionAye - 
<template>
<div class="container" @click="showHidenOption()">
    <p class="aye">
        <slot></slot>
        <!-- {{aye}} -->
    </p>
    <p class="tarjome" @click.stop="showAllText()" :class="{'hidenTextTarjome':showTextClass,'centerTarjome':!showTextClass}">
        <slot name="tarjome"></slot>
        <!-- {{tarjome}} -->
    </p>
    <div class="option" v-if="showOptionStatus">
        <span class="save">save</span>
        <span class="play">play</span>
        <span class="share">share</span>

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
    components: {

    },
    props: ['aye', 'tarjome'],

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
        }

        function showAllText() {
            showTextClass.value = showTextClass.value ? false : true;
            store.state.showOverflowClass = store.state.showOverflowClass ? false : true;
        }
        return {
            aye,
            tarjome,
            showOptionStatus,
            showHidenOption,
            showAllText,
            showTextClass
        }
    }

})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;

    .aye {
        @include boxStyle($lightWhite, 0, rgb(255, 254, 254), 7px);
        @include textStyle;
        padding-bottom: 0;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: auto;
        // -webkit-fill-available

    }

    .tarjome {
        @include boxStyle($lightWhite, 0, rgb(255, 254, 254), 5px);
        @include textStyle(rgb(107, 107, 107), $fontSize_tarjome, 700);
        line-height: 3vh;
        justify-content: center;
        text-align: center;
        align-content: center;
        height: auto;
        background-color: $bgColor_tarjome;
        color: $fontColor_tarjome;
        display: flex;
        flex-direction: column;
    }
    .centerTarjome{
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
        background-color: rgba(148, 147, 147, 0.116);
        border-radius: 5PX;
        // box-shadow: 5px 4px 18px 0px rgb(180, 180, 180) ;
        padding: 6PX;
        font-weight: 700;
    }
}
</style>

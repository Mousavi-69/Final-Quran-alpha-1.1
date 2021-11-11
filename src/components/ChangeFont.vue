<template>
<div class="container" :class="{'transformMenue':statusChangeFont}">
    <h3>نوع قلم</h3>
    <div class="list" @click.stop="chengeFontToVazir()">
        <input class="radio" type="radio" id="Vazir" name="font" value="Vazir" v-model="font" />
        <label>وزیر
        </label>
    </div>
    <div class="list" @click.stop="chengeFontToYekan()">
        <input class="radio" type="radio" id="Yekan" name="font" value="Yekan" v-model="font" />
        <label>یکان
        </label> </div>
    <h3>سایز قلم</h3>

</div>
</template>

<script lang="ts">
import {
    computed
} from 'vue'

import {
    useStore
} from "vuex";
export default {
    name: "SidebarMenu",
    setup() {

        let store = useStore();
        let statusChangeFont = computed(() => store.state.changeFontStatus)

        let font = computed(() => store.state.fontValue);

        function chengeFontToVazir() {
            store.state.fontValue = 'Vazir';
            store.state.changeFontStatus = false;
        };

        function chengeFontToYekan() {
            store.state.fontValue = 'Yekan';
            store.state.changeFontStatus = false;

        };

        return {
            statusChangeFont,
            font,
            chengeFontToVazir,
            chengeFontToYekan
        };
    }

}
</script>

<style lang="scss" scoped>

.container {
    will-change: transform;
    position: absolute;
    width: 60%;
    top: 30%;
    right: 100%;
    z-index: 30;
    padding: 20px 20% 20px 20px;
    background-color: rgba(236, 236, 236, 0.932);
    border-radius: 25px;
    border: 1PX solid $bgColor;
    text-align: right;
    transition: transform 1.5s;

    .list {
        padding: 8px;

        .radio {
            padding-left: 3px;
        }

        lable {
            font-size: 2rem;

        }
    }

}

.transformMenue {
    transform: translate(108%);
}
</style>

<template>
<div class="container" :class="{'transformMenue':statusSelectReciter}">
    <div class="list" @click.stop="chengeReciter1()">
        <input class="radio" type="radio" name="reciter"  value="Abdul_Basit_Murattal_64kbps" v-model="reciter" />
        <label>عبدالباسط
        </label>
    </div>
    <div class="list"  @click.stop="chengeReciter2()">
        <input class="radio" type="radio" name="reciter" value="Ali_Jaber_64kbps" v-model="reciter" />
        <label> علی جابر
        </label> </div>

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
        let reciter = computed(() => store.state.Reciter);
        let statusSelectReciter = computed(() => store.state.selectReciterStatuse)

        // Ali_Jaber_64kbps/001001.mp3// Abdul_Basit_Murattal_64kbps/001001.mp3
        function chengeReciter1() {
            store.state.Reciter = 'Abdul_Basit_Murattal_64kbps';
            store.state.selectReciterStatuse = false;
        };

        function chengeReciter2() {
            store.state.Reciter = 'Ali_Jaber_64kbps';
            store.state.selectReciterStatuse = false;
        };

        return {
            reciter,
            chengeReciter1,
            chengeReciter2,
            statusSelectReciter
        };
    }

}
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

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

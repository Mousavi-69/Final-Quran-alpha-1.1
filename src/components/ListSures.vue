<template>
<div class="container">
    <div class="list" v-for="i in filteredList" :key="i.id" @click="goSurePage(i.id)">
        <span class="sureIndex">{{i.id}}</span>
        <span class="sureName">{{i.name}}</span>
        <span class="sureType" v-if="i.type == 'Meccan'">مکّی</span>
        <span class="sureType" v-if="i.type == 'Medinan'">مدنی</span>
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
import {
    q_inf, pages
} from "@/data/q_inf";

export default defineComponent({

    name: 'ListSures',

    setup(props, context) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();

        let filteredList = computed(() => q_inf.filter(item => item.name.includes(store.state.search_value)))

        function goSurePage(suraNumber: number) {
           store.state.selectTranslatorStatus = false;
            store.state.selectReciterStatuse = false;
            store.state.sidebarStatus = false;
            store.state.suraNumber_value =suraNumber;
            router.push({
                name: 'Page',
                params: {
                    number: suraNumber
                }
            })
        }
        return {
            filteredList,
            goSurePage
        }
    }

})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(243, 243, 243);
    padding: 70px 15px 20px 15px;
}

.list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: $bgColor;
    box-shadow: 0px 0px 5px 5px #ddd;
    border-radius: 16px;
    width: 100%;
    padding: 20px 5px 20px 5px;
    margin: px;
    color: rgb(2, 12, 2);

    .sureName {
        @include textStyle($fontColor, 0.9rem, 650)
    }

    .sureIndex {
        font-size: $fontSizeAyeNumber;

    }

    .sureType {        @include textStyle($fontColor, 1rem, 550)
}
}
</style>

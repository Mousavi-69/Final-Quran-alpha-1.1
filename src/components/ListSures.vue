<template>
<div class="container">
    <div class="list" v-for="i in filteredList" :key="i.id" @click="goSurePage(i.id)">
        <span class="sureIndex" :class="{'vazir':vazirFont,'yekan':!vazirFont}" >{{i.id}}</span>
        <span class="sureName" :class="{'vazir':vazirFont,'yekan':!vazirFont}">{{i.name}}</span>
        <span class="sureType" v-if="i.type == 'Meccan'" :class="{'vazir':vazirFont,'yekan':!vazirFont}">مکّی</span>
        <span class="sureType" v-if="i.type == 'Medinan'" :class="{'vazir':vazirFont,'yekan':!vazirFont}">مدنی</span>
    </div>
    <p class="alarmSearch" v-if="StatusAlarmSearch">جستجوی شما نتیجه ای در بر نداشت <br/><br/> لطفا با حروف فارسی مجدد تلاش کنید!</p>
</div>
</template>

<script lang="ts">
import {
    ref,
    computed,
    defineComponent
} from 'vue'

import {
    useRouter
} from "vue-router";
import {
    useStore
} from "vuex";
import {
    q_inf,
} from "@/data/q_inf";

export default defineComponent({

    name: 'ListSures',

    setup() {
        let router = useRouter();
        let store = useStore();
        let StatusAlarmSearch = computed(() => store.state.alarmSearchStatus);

        let filteredList = computed(() => q_inf.filter(item => item.name.includes(store.state.search_value)));
        store.state.alarmSearchStatus = computed(() => {
            if (filteredList.value.length < 1) {
                return true
            } else {
                return false
            }
        });

        function goSurePage(suraNumber: number) {
            store.state.selectTranslatorStatus = false;
            store.state.selectReciterStatuse = false;
            store.state.sidebarStatus = false;
            store.state.suraNumber_value = suraNumber;
            store.commit('DynamicImport')
            router.push({
                name: 'Page',
                params: {
                    number: suraNumber
                }
            })
        };
let vazirFont  =computed(()=>{
if( store.state.fontValue = 'Vazir'){
    return true
}else{
    return false
}
});
        
        return {
            filteredList,
            goSurePage,
            StatusAlarmSearch,vazirFont
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

    .alarmSearch {
        position: absolute;
        top: 20%;
        background-color: rgb(226, 228, 113);
        font-weight: 650;
        font-size: 1.2rem;
        padding: 15px;
        border: 2px solid red;
        border-radius: 20px;
    }
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

    .sureType {
        @include textStyle($fontColor, 1rem, 550)
    }
}
.vazir{
    font-family: Vazir;
}
.yekan{
        font-family: Yekan;

}
</style>

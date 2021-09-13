// components: ayat - menue - audioPlayer - sureInf ==>(sarbarg bala shamel name,joze,page)
// components: search - listSures
<template>
<!-- <div class="container"> -->
<!--  -->
<article class="page" @scroll="handleScroll()" :class="{'pageHidenOverflow':showOverflow}">
    <div class="box" v-for="(item, i) in list" :key="i">
        <ayat>
            <template class="aye" v-slot>
                {{ item }}
                <span class="countItem_aye">﴿{{i}}﴾</span>
            </template>
            <template class="tarjome" v-slot:tarjome>
                {{tarjome[i]}}
                <span class="countItem_tarjome"> ﴿‏{{i}}﴾</span>
            </template>
        </ayat>
    </div>
    <!-- </div> -->
</article>
<!-- </div> -->
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
import quran from '@/data/quran';
import {
    q_inf,
    pages
} from "@/data/q_inf";
import Ayat from '@/components/Ayat.vue'
import tr_ansarian
from '@/data/tarjomeh/fa.ansarian'
export default defineComponent({
    name: 'Page',
    components: {
        Ayat
    },
    setup(props, context) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();

        let ayatList = quran.split("\n");
        const suraNumber = +route.params.number
        console.log("id: " + suraNumber)
        // const list = computed(() => {
        let pageNumber = +pages.findIndex(page => page[0] >= suraNumber)
        if (!(pages[pageNumber][1] === 1 || pages[pageNumber][0] === suraNumber)) pageNumber--
        console.log("pageNumber :" + pageNumber + "\nsuraNumber:" + suraNumber)
        const [newSuraNumber, newAyaNumber] = pages[pageNumber]
        const firstAyaOfPage = q_inf[newSuraNumber - 1].start + newAyaNumber
        const nextPageNumber = pageNumber + 1
        const [nextSuraNumber, nextAyaNumber] = pages[nextPageNumber]
        const firstAyaOfNextPage = q_inf[nextSuraNumber - 1].start + nextAyaNumber
        const list = ayatList.slice(firstAyaOfPage - 1, firstAyaOfNextPage - 1)
        // })
        let tarjomeAllList = tr_ansarian.split("\n")
        const tarjome = tarjomeAllList.splice(q_inf[suraNumber - 1].start, q_inf[suraNumber].ayas)

        function handleScroll() {
            console.log("ok")
        }
        let showOverflow = computed(() => {
            return store.state.showOverflowClass
        })

        return {
            // ayeNum,
            // sure,
            ayatList,
            tarjome,
            // page_inf,
            // page_sure,
            list,
            // handleScroll,
            showOverflow
        }
    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.page {
    // position: absolute;
    // top: 0px;
    // right: 0px;
    // bottom: 0px;
    // left: 0px;
    border: 7px dashed rgb(3, 167, 196);
    background-color: red;
    display: flex;
    flex-direction: column;
   
}

.pageHidenOverflow {
    overflow: hidden;
    text-overflow: ellipsis;
    //   white-space: nowrap;
}

.box {

    background: rgb(184, 148, 148);
    height: auto;
    // position: relative;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    // position: relative;
    flex: 1 0 auto;

    .aye {
        .countItem_aye {
            position: relative;
            left: 3px;
            color: $ayeNumber;
            font-size: $fontSizeAyeNumber;
        }
    }

    .tarjome {
        // overflow: hidden;
        //  text-overflow: ellipsis;
        // white-space: nowrap;
        .countItem_tarjome {
            position: relative;
            left: 3px;
        }
    }

}
</style>

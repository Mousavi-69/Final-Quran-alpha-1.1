<template>
<div class="pages">
    <article class="page" :class="{'pageHidenOverflow':showOverflow,'marginBottomPage':audioStatus}">
        <sure-inf-box :juzNumber="juzNumber" :pageNumber="pageNumber" :sureName="sureName"></sure-inf-box>
        <header-start-sure :numberOfAye="sureInformation.ayas" :typeOfSure="typeOfSure" v-if="headerStartSure"></header-start-sure>
        <i class="previousIcon" @click="goPreviousPage()">
            <fa class="previousPage" icon="chevron-left" />
        </i>
        <i class="nextIcon" @click="goNextPage()">
            <fa class="nextPage" icon="chevron-right" />
        </i>

        <ayat class="box" v-for="(item, i) in list" :key="i" :index="i">
            <template class="aye" v-slot:aye>
                {{ item }}
            </template>
            <template class="tarjome" v-slot:tarjome>
                {{currenttarjome[i]}}
            </template>
        </ayat>
    </article>
    <div class="audioContaner" v-if="audioStatus">

        <audio-player></audio-player>
    </div>
    <sidebar-menu v-if="statusSidebar"></sidebar-menu>
    <select-translator v-if="statusSelectTranslator"></select-translator>
    <select-reciter v-if="statusSelectReciter"></select-reciter>
</div>
</template>

<script lang="ts">
import {
    ref,
    computed,
    defineComponent,
    watch
} from 'vue'
import {
    useRouter,
    useRoute
} from "vue-router";
import {
    Store,
    useStore
} from "vuex";
import quran from '@/data/quran';
import {
    q_inf,
    pages,
    Juz
} from "@/data/q_inf";
import Ayat from '@/components/Ayat.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
import SureInfBox from '@/components/SureInfBox.vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import HeaderStartSure from '@/components/HeaderStartSure.vue'
import SelectTranslator from '@/components/SelectTranslator.vue'
import SelectReciter from '@/components/SelectReciter.vue'

export default defineComponent({
    name: 'Page',
    components: {
        Ayat,
        AudioPlayer,
        SureInfBox,
        SidebarMenu,
        HeaderStartSure,
        SelectTranslator,SelectReciter
    },
    setup(props, context) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();
        let statusSidebar = computed(() => store.state.sidebarStatus)
        let statusSelectTranslator = computed(() => store.state.selectTranslatorStatus)
        let statusSelectReciter = computed(() => store.state.selectReciterStatuse)

        let audioStatus = computed(() => store.state.audioStatusValue);

        function closeAudio() {
            store.state.audioStatusValue = false;

        };
        let typeOfSure = computed(() => {
            if (sureInformation.value.type == 'Meccan') {
                return 'مکّی'
            } else {
                return 'مدنی'
            }
        });
        let headerStartSure = computed(() => store.state.checkStartSure);
        let pageStatus = ref(0)
        let suraNumber = ref(+route.params.number);
        let sureInformation = computed(() => q_inf[store.state.suraNumber_value - 1]);
        const pagesLength = pages.length;
        let currentPage = computed(() => {
            let normalizePage = pages.findIndex(page => page[0] == suraNumber.value) + pageStatus.value
            if (normalizePage < 1) {
                normalizePage = NormalizePage(suraNumber.value, normalizePage)
            }
            return normalizePage
        });

        let pageNumber = computed(() => {
            let currentPageNumber = currentPage.value
            if (currentPageNumber > 556) currentPageNumber = 1;
            return currentPageNumber;
        });

        watch(pageNumber, (newValue, oldValue) => {
            store.state.firstAyeOfPage_store = indexFirstAyaOfPage.value;
            store.state.firstAyeOfNextPage_store = indexFirstAyaOfNextPage.value;
            store.commit('setAyatListOfPage', newValue)

        });

        let indexFirstAyaOfPage = computed(() => {

            return pages[pageNumber.value][1];
        });
        let indexFirstAyaOfNextPage = computed(() => {
            return q_inf[nextSuraNumber.value - 1].start + nextAyaNumber.value;
        });

        let list = computed(() => store.state.ayatListOfPage)
        store.state.listOfPageLength = computed(() => list.value.length);
        let nextSuraNumber = computed(() => pages[pageNumber.value][0]);
        let nextAyaNumber = computed(() => pages[pageNumber.value][1]);

        store.commit('setAyatListOfPage', pageNumber.value)

        let currenttarjome = computed(() => store.state.tarjomeOfCurrentPage)

        let showOverflow = computed(() => {
            return store.state.showOverflowClass
        });

        //header start
        let sureName = computed(() => q_inf[pages[pageNumber.value][0] - 1].name);
        let juzNumber = computed(() => {
            let [nextSuraNumber, nextAyaNumber] = pages[pageNumber.value];
            if(nextSuraNumber==2 && nextAyaNumber<142){
                return 1
            }
            let curentJuz = Juz.findIndex(item => item[0] == nextSuraNumber);
            if (curentJuz < 1) {
                curentJuz = chekedCurrentJuz(nextSuraNumber, curentJuz)
            }

            NormaliseCurentJuz(nextSuraNumber, curentJuz)
            return curentJuz
        });
        //header End

        function goNextPage() {
            pageStatus.value = pageStatus.value + 1
        }

        function goPreviousPage() {
            pageStatus.value = pageStatus.value - 1
        }
let wakeLock:any = null;
const requestWakeLock = async()=>{
    try {
         wakeLock = await(navigator as any).wakeLock.request();
    wakeLock.addEventListener('release',()=>{});
    } catch (error) {
        console.log('wakeLock Error :'+error);
    };
};
requestWakeLock();


        return {wakeLock,
            sureInformation,
            typeOfSure,
            headerStartSure,
            pageNumber,
            suraNumber,
            sureName,
            juzNumber,
            currenttarjome,
            list,
            showOverflow,
            pageStatus,
            goNextPage,
            goPreviousPage,
            audioStatus,
            closeAudio,
            statusSidebar,
            statusSelectTranslator,statusSelectReciter
        }

        function chekedCurrentJuz(nextSuraNumber: number, curentJuz: number) {
            if (nextSuraNumber <= 20) {
                if (nextSuraNumber == 10) {
                    curentJuz = 11
                } else if (nextSuraNumber > 12 && nextSuraNumber < 15) {
                    curentJuz = 13
                } else if (nextSuraNumber == 16) {
                    curentJuz = 14
                } else if (nextSuraNumber > 18 && nextSuraNumber <= 20) {
                    curentJuz = 16
                }
            } else if (nextSuraNumber < 30) {
                if (nextSuraNumber == 22) {
                    curentJuz = 17
                }
                if (nextSuraNumber == 24) {
                    curentJuz = 18
                }
                if (nextSuraNumber == 26) {
                    curentJuz = 19
                }
                if (nextSuraNumber == 28) {
                    curentJuz = 20
                }
            } else {
                if (nextSuraNumber < 33) {
                    curentJuz = 21
                } else if (nextSuraNumber > 33 && nextSuraNumber < 36) {
                    curentJuz = 22
                } else if (nextSuraNumber > 36 && nextSuraNumber < 39) {
                    curentJuz = 23
                } else if (nextSuraNumber == 40) {
                    curentJuz = 24
                } else if (nextSuraNumber > 41 && nextSuraNumber < 46) {
                    curentJuz = 25
                } else if (nextSuraNumber > 46 && nextSuraNumber < 51) {
                    curentJuz = 26
                } else if (nextSuraNumber > 51 && nextSuraNumber < 58) {
                    curentJuz = 27
                } else if (nextSuraNumber > 58 && nextSuraNumber < 67) {
                    curentJuz = 28
                } else if (nextSuraNumber > 67 && nextSuraNumber < 78) {
                    curentJuz = 29
                } else if (nextSuraNumber > 78) {
                    curentJuz = 30
                }
            }
            return curentJuz
        }
        //
        function NormaliseCurentJuz(nextSuraNumber: number, curentJuz: number) {
            if (indexFirstAyaOfPage.value > Juz[curentJuz][1]) {
                if (Juz[curentJuz - 1][0] < nextSuraNumber && Juz[curentJuz + 1][0] > nextSuraNumber) {
                    curentJuz
                } else if ((Juz[curentJuz - 1][0] < nextSuraNumber && Juz[curentJuz + 1][0] == nextSuraNumber) &&
                    (Juz[curentJuz + 1][1] < indexFirstAyaOfPage.value)) {
                    curentJuz++

                } else if ((Juz[curentJuz - 1][0] == nextSuraNumber) && (Juz[curentJuz - 1][1] > indexFirstAyaOfPage.value)) {
                    curentJuz--
                } else if (Juz[curentJuz][1] < indexFirstAyaOfPage.value &&
                    (Juz[curentJuz + 1][1] > indexFirstAyaOfPage.value) && Juz[curentJuz + 1][0] == nextSuraNumber) {
                    curentJuz
                } else if ((Juz[curentJuz + 1][0] == nextSuraNumber) && (Juz[curentJuz + 1][1] >= indexFirstAyaOfPage.value)) {
                    curentJuz++
                } else {
                    curentJuz
                }
            } else if (indexFirstAyaOfPage.value < Juz[curentJuz][1]) {
                if (Juz[curentJuz][0] < nextSuraNumber &&
                    (Juz[curentJuz + 1][0] == nextSuraNumber && Juz[curentJuz + 1][1] > indexFirstAyaOfPage.value)) {
                    curentJuz
                } else if ((Juz[curentJuz - 1][0] == nextSuraNumber && Juz[curentJuz - 1][1] < indexFirstAyaOfPage.value)) {
                    curentJuz
                } else if ((Juz[curentJuz - 1][0] < nextSuraNumber && Juz[curentJuz + 1][0] > nextSuraNumber)) {
                    curentJuz--
                } else if ((Juz[curentJuz - 1][0] < nextSuraNumber && Juz[curentJuz + 1][0] == nextSuraNumber) &&
                    (Juz[curentJuz + 1][1] > indexFirstAyaOfPage.value)) {
                    curentJuz--
                }
            } else if (indexFirstAyaOfPage.value == Juz[curentJuz][1]) {
                curentJuz
            }
            return curentJuz

        }

        function NormalizePage(suraNumber: number, normalizePage: number) {
            // let normalizePage;
            if (normalizePage == 0) {
                normalizePage = pagesLength - 1
            } else if (normalizePage < 0) {
                normalizePage = pagesLength + normalizePage
            }
            return normalizePage
        }
    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.page {
     border: 7px dashed rgb(11, 161, 247);
    background-color: rgb(252, 252, 252);
    display: flex;
    flex-direction: column;

}

.audioContaner {

    z-index: 10;
    position: fixed;
    //  top:200px;
    bottom: 5px;
    left: 0px;
    right: 0px;
    background-color: rgba(206, 206, 206, 0.815);
    padding: 10px;

    .exiteIcon {
        z-index: 12;
        position: absolute;
        right: 10px;
        color: $fontColor_Alarm;
        top: 5px;
        padding: 3px;
    }

}

.marginBottomPage {
    margin-bottom: 80px;
}

.fullPage {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
}

.pageHidenOverflow {
    overflow: hidden;
    text-overflow: ellipsis;
}

.box {
    .aye {
        .countItem_aye {
            position: relative;
            left: 3px;
            color: $ayeNumber;
            font-size: $fontSizeAyeNumber;
        }
    }

    .tarjome {

        .countItem_tarjome {
            position: relative;
            left: 3px;
        }
    }

}

.previousIcon {
    z-index: 5;
    position: fixed;
    left: 8px;
    top: 50%;
    padding: 2px;

    .previousPage {
    color: rgb(0, 0, 0);
        font-size: 1.7rem;
    }
} 

.nextIcon {
    z-index: 5;
    position: fixed;
    right: 8px;
    top: 50%;
    padding: 2px;

    .nextPage {
        color: rgb(0, 0, 0);
        font-size: 1.7rem;
    }
}
</style>

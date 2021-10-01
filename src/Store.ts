import { createStore } from "vuex";
import quran from '@/data/quran';
import {
    q_inf,
    pages,
} from "@/data/q_inf";
import ansarian
    from '@/data/tarjomeh/fa.ansarian';
import makarem
    from '@/data/tarjomeh/fa.makarem';


const store = createStore({
    state() {
        return {
            search_value: "",
            resultsFound: false,
            suraNumber_value: 0,
            showOverflowClass: true,
            firstAyeOfPage_store: 1,
            firstAyeOfNextPage_store: 8,
            ayatList: quran.split("\n"),
            lengthAllAyat: 0,
            ayatListOfPage: {},
            listOfPageLength: 0,
            quranInformation: q_inf,
            pagesInformation: pages,
            checkStartSure: false,
            translatorValue: 'ansarian',
            translateAllAnsarian: ansarian.split("\n"),
            translateAllMakarem: makarem.split("\n"),
            tarjome: ansarian.split("\n"),
            tarjomeOfCurrentPage: {},
            pathCurrentAudio: '',
            Reciter: 'Abdul_Basit_Murattal_64kbps',
            ayeNumberForAudio: '002',
            sureNumberForAudio: '001',
            selectReciterStatuse: false,
            firstAyeOfCurrentPage: 0,
            audioStatusValue: false,
            sidebarStatus: false,
            selectTranslatorStatus: false,
            alarmSearchStatus:false,
            audio:'',
            showOptionStatus:false,

        };
    },
    mutations: {
        setSearchValue(state: any, value: string) {
            state.search_value = value
        },
        setAyatListOfPage(state: any, pageNumber) {
            state.lengthAllAyat = state.ayatList.length;
            state.suraNumber_value = state.pagesInformation[pageNumber][0];
            let SuraNumber = state.suraNumber_value;
            state.firstAyeOfCurrentPage = state.pagesInformation[pageNumber][1];
            let AyaNumber = state.firstAyeOfCurrentPage;
            let [beforSuraNumber, beforAyaNumber] = [0, 0];
            if (pageNumber == 1) {
                [beforSuraNumber, beforAyaNumber] = state.pagesInformation[556];
            } else {
                [beforSuraNumber, beforAyaNumber] = state.pagesInformation[pageNumber - 1];
            }
            let [afterSuraNumber, afterAyaNumber] = [0, 0];
            if (pageNumber == 556) {
                [afterSuraNumber, afterAyaNumber] = state.pagesInformation[1];
            } else {
                [afterSuraNumber, afterAyaNumber] = state.pagesInformation[pageNumber + 1];
            }
            let startAyeOfCurrentSure = state.quranInformation[SuraNumber - 1].start;
            let ayasOfCurrentSure = state.quranInformation[SuraNumber - 1].ayas;
            let indexStartayeOfPage = state.firstAyeOfPage_store + (startAyeOfCurrentSure - 1);
            let indexEndAyeOfPage = indexStartayeOfPage + AyaNumber;
            let normalizeAyat;
            let ayatLength;
            let normalizeTarjome;
            if (afterSuraNumber > SuraNumber) {
                indexEndAyeOfPage = ayasOfCurrentSure + startAyeOfCurrentSure
                if (SuraNumber == 1) {
                    state.checkStartSure = true;
                    indexStartayeOfPage = 1
                    normalizeAyat = state.ayatList.slice(indexStartayeOfPage, indexEndAyeOfPage);
                    ayatLength = normalizeAyat.length;
                    normalizeTarjome = state.tarjome.slice(1, 1 + ayatLength);
                } else if (SuraNumber > beforSuraNumber && !(SuraNumber == 1)) {
                    state.checkStartSure = true;
                    normalizeAyat = state.ayatList.slice(indexStartayeOfPage, indexEndAyeOfPage);
                    ayatLength = normalizeAyat.length;
                    normalizeTarjome = state.tarjome.slice(indexStartayeOfPage, indexStartayeOfPage + ayatLength);
                    try {
                        let besmellah = normalizeAyat[0]
                        let untiBesmellah = besmellah.slice(23);
                        normalizeAyat[0] = untiBesmellah;
                    } catch (error) {

                    }
                } else {
                    state.checkStartSure = false;
                    normalizeAyat = state.ayatList.slice(indexStartayeOfPage, indexEndAyeOfPage);
                    ayatLength = normalizeAyat.length;
                    normalizeTarjome = state.tarjome.slice(indexStartayeOfPage, indexStartayeOfPage + ayatLength);
                }

            } else {
                if (pageNumber == 556) {
                    indexEndAyeOfPage = state.lengthAllAyat;
                } else {
                    indexEndAyeOfPage = afterAyaNumber - 1 + startAyeOfCurrentSure;
                }
                if (SuraNumber > beforSuraNumber) {
                    state.checkStartSure = true;
                    normalizeAyat = state.ayatList.slice(indexStartayeOfPage, indexEndAyeOfPage);
                    ayatLength = normalizeAyat.length;
                    normalizeTarjome = state.tarjome.slice(startAyeOfCurrentSure + 1, startAyeOfCurrentSure + 1 + ayatLength);
                    try {
                        let besmellah = normalizeAyat[0]
                        let untiBesmellah = besmellah.slice(23);
                        normalizeAyat[0] = untiBesmellah;
                    } catch (error) {
                    }
                } else {
                    state.checkStartSure = false;
                    normalizeAyat = state.ayatList.slice(indexStartayeOfPage, indexEndAyeOfPage);
                    ayatLength = normalizeAyat.length;
                    normalizeTarjome = state.tarjome.slice(startAyeOfCurrentSure + AyaNumber, (startAyeOfCurrentSure + AyaNumber) + ayatLength);
                }

            }
            state.ayatListOfPage = normalizeAyat;
            state.tarjomeOfCurrentPage = normalizeTarjome;
            for (let i = 0; i < ayatLength; i++) {
                state.ayatListOfPage[i] = state.ayatListOfPage[i] + ` ﴿${AyaNumber + i}﴾`
            }
        },
        createPath(state, index) {

            let currentAyeOfSure = index + state.firstAyeOfCurrentPage;

            if (state.suraNumber_value <= 9) {
                state.sureNumberForAudio = '00' + state.suraNumber_value;
            } else if (state.suraNumber_value <= 99) {
                state.sureNumberForAudio = '0' + state.suraNumber_value;
            } else {
                state.sureNumberForAudio = state.suraNumber_value + '';
            };
            if (currentAyeOfSure <= 9) {
                state.ayeNumberForAudio = '00' + currentAyeOfSure;
            } else if (currentAyeOfSure <= 99) {
                state.ayeNumberForAudio = '0' + currentAyeOfSure;
            } else {
                state.ayeNumberForAudio = currentAyeOfSure + '';
            };
            if (state.suraNumber_value == 1) {
                state.ayeNumberForAudio = '00' + (currentAyeOfSure + 1);
            }
            state.pathCurrentAudio = 'https://www.everyayah.com/data/' + state.Reciter + '/' + state.sureNumberForAudio + state.ayeNumberForAudio + '.mp3';
            var audio = new Audio();
            audio.load();
            audio.play();
        },
        openSidebarMenu(state: any) {

            state.sidebarStatus = state.sidebarStatus ? false : true;
        },
        chengeTranslator(state: any, newTranslator: string) {
            console.log('type state.translatorValue ;  ' + typeof (state.translatorValue))
            console.log(' state.translatorValue ;  ' + state.translatorValue)
            console.log(' state.tarjome  : ' + state.tarjome[1])
            console.log(' newTranslator : ' + newTranslator)

            state.translatorValue = newTranslator;
            if (newTranslator == 'ansarian') {
                state.tarjome = state.translateAllAnsarian;
            } else {
                state.tarjome = state.translateAllMakarem;
            }
        }
    },
    actions: {


    },

});

export default store;
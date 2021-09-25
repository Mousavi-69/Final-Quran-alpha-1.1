<template>
<div class='sureStartInf'>
    <div class="aye">{{numberOfAye}}</div>
    <div class="besmelah">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</div>
    <div class="type"> {{typeOfSure}} </div>
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
    name: 'SearchBox',
    props: ['numberOfAye', 'typeOfSure'],

    setup(props, context) {
        const store = useStore()

        function openMenu() {
            store.commit('openSidebarMenu');
        }
        return {

        }
    }

})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.sureStartInf {
    display: flex;
    justify-content: space-around;
    padding: 15px;
    background-color: rgb(214, 214, 214);
border-radius: 0 0 25px 25px;

    .aye { 
    align-self: center;
            // font-weight: 550;
        color: $fontColor_tarjome;

    }

    .besmelah {font-size: 1.5rem;
    font-weight: 700;
            color: red;

    }

    .type {    align-self: center;
        // font-weight: 550;
        color: $fontColor_tarjome;

}
}
</style>

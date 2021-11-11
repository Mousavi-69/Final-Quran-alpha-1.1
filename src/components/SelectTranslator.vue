<template>
<div class="container" :class="{'transformMenue':statusSelectTranslator}">
    <div class="list" @click.stop="chengeTranslatorToAnsarian()">
        <input class="radio" type="radio" id="ansarian" name="translator"  value="ansarian" v-model="translator" />
        <label>ترجمه انصاریان
        </label>
    </div>
    <div class="list" @click.stop="chengeTranslatorToMakarem()">
        <input class="radio" type="radio" id="makarem" name="translator"  value="makarem" v-model="translator" />
        <label> ترجمه مکارم شیرازی
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
        let statusSelectTranslator = computed(() => store.state.selectTranslatorStatus)

        let translator = computed(() => store.state.translatorValue);

        function chengeTranslatorToAnsarian() {
            store.state.translatorValue = 'ansarian';
            store.commit('chengeTranslator');
            store.state.selectTranslatorStatus = false;
        };

        function chengeTranslatorToMakarem() {
            store.state.translatorValue = 'makarem';
            store.commit('chengeTranslator');
            store.state.selectTranslatorStatus = false;

        };

        return {
            statusSelectTranslator,
            translator,
            chengeTranslatorToAnsarian,
            chengeTranslatorToMakarem
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

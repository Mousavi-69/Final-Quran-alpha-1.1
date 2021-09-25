<template>
<div class="container">
    <div class="list">
        <input class="radio" type="radio" id="ansarian" name="translator"   @click.stop="chengeTranslatorToAnsarian()" value="ansarian" v-model="translator" />
        <label>ترجمه انصاریان
        </label>
    </div>
    <div class="list">
        <input  class="radio" type="radio" id="makarem" name="translator" @click.stop="chengeTranslatorToMakarem()" value="makarem"  v-model="translator"/>
        <label> ترجمه مکارم شیرازی
        </label> </div>
  
</div>
</template>

<script lang="ts">
import {
    ref,
    computed
} from 'vue'
import {
    useRouter,
    useRoute
} from "vue-router";
import {
    useStore
} from "vuex";
export default {
    name: "SidebarMenu",
    setup(props, context) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();
let translator = computed(()=>store.state.translatorValue);
console.log('translator   '+translator.value)
console.log('type translator   '+typeof(translator.value))

function chengeTranslatorToAnsarian(){
    store.state.translatorValue = 'ansarian';
        store.commit('chengeTranslator',translator.value);
         store.state.selectTranslatorStatus = false;
    console.log('translator 1   '+translator.value)

};
function chengeTranslatorToMakarem(){
    store.state.translatorValue = 'makarem';
        store.commit('chengeTranslator',translator.value);
         store.state.selectTranslatorStatus = false;
    console.log('translator 1   '+translator.value)

};


        return {translator,chengeTranslatorToAnsarian,chengeTranslatorToMakarem}
    }

}
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    will-change: transform;
    position: absolute;
    top: 25%;
    left: 30px;
    right: 30px;
    z-index: 30;
    will-change: transform;
    padding: 20px 20% 20px 20px;
    background-color: $bgColor;
    border-radius: 25px;
    border: 1PX solid $bgColor;
    text-align: right;
    .list{
        padding: 8px;
        .radio{
            padding-left: 3px;
}

 lable{
    font-size: 2rem;

}
    }

}
</style>

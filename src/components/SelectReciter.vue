<template>
<div class="container">
    <div class="list">
        <input class="radio" type="radio" name="reciter"   @click.stop="chengeReciter1()" value="Abdul_Basit_Murattal_64kbps" v-model="reciter" />
        <label>عبدالباسط 
        </label>
    </div>
    <div class="list">
        <input  class="radio" type="radio" name="reciter" @click.stop="chengeReciter2()" value="Ali_Jaber_64kbps"  v-model="reciter"/>
        <label> علی جابر
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
let reciter = computed(()=>store.state.Reciter);

// Ali_Jaber_64kbps/001001.mp3// Abdul_Basit_Murattal_64kbps/001001.mp3
function chengeReciter1(){
    store.state.Reciter = 'Abdul_Basit_Murattal_64kbps';
         store.state.selectReciterStatuse = false;

};
function chengeReciter2(){
    store.state.Reciter = 'Ali_Jaber_64kbps';
         store.state.selectReciterStatuse = false;

};


        return {reciter,chengeReciter1,chengeReciter2}
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

<template>
<div class="audioContaner">
    <fa class="exiteIcon" icon="times" @click.stop="closeAudio()" />
    <span class="reciterName" @click.stop="selectResiter()">{{reciterName}}</span>
    <audio id="player" class="audio" controls='contorols' autoplay>
        <source :src="urlAudio" type="audio/mpeg">
مرورگر شما این ویژگی را پشتیبانی نمیکند، لطفا مرورگر خود را بروزرسانی کنید
    </audio>
</div>
<div class="halfCircular"></div>
</template>

<script lang="ts">
import {
    ref,
    computed,defineComponent
} from 'vue'
import {
    useRouter,
    useRoute
} from "vue-router";
import {
    useStore
} from "vuex";
export default defineComponent ({
    name: 'AudioPlayer',

    setup(props: any, context: any) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();
        let urlAudio = computed(()=>store.state.pathCurrentAudio)
        let reciterName = computed(()=>{
            if(store.state.Reciter == 'Abdul_Basit_Murattal_64kbps'){
                return 'عبدالباسط'
            }else{
                return 'علی جابر'
            }
        });
        function closeAudio(){
store.state.audioStatusValue = false;
        };
        function selectResiter(){
store.state.selectReciterStatuse = true;
        };

        return {urlAudio,
reciterName,closeAudio,selectResiter
        }
    }

})
</script>

<style lang="scss" scoped >
@import "@/styles/sass/main.scss";
.audioContaner{

}


</style>

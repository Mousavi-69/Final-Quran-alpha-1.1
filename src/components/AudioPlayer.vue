<template>
<div class="container">
<audio class="audio" controls='contorols' autoplay   >
<source src="@/data/f_1.mp3" type="audio/mpeg">

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

        return {

        }
    }

})
</script>

<style lang="scss" scoped >
@import "@/styles/sass/main.scss";
.container{

.audio{
      width: 100%;
    height: 50px;

 
}}


</style>

//  settings list
// Options: fontSize Arabic - fontSize farsi  
<template>
    <div class="container">

    </div>
</template>
<script lang="ts" >
import {ref,computed} from 'vue'
import {useRouter,useRoute} from "vue-router";
import {useStore} from "vuex";
export default {
components: {
    
  },
setup(props:any,context:any){
    let router = useRouter();
    let route = useRoute();
    let store = useStore();



    
        return{

        }
    }
    
}</script>

<style lang="scss" scoped src='./Settings_page.scss'/>

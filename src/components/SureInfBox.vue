<template>
<div class='container'>
               <fa class="menuIcon" icon="bars" @click.stop="openMenu()" />

 <header class="header">
            <div> صفحه {{pageNumber}}</div>
            <div>سوره {{sureName}}</div>
            <div>جزء {{juzNumber}}</div>
        </header></div>
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
    props:['pageNumber','sureName','juzNumber'],

    setup(props, context) {
        const store = useStore()
function openMenu(){
store.commit('openSidebarMenu');
}
        return {
openMenu
        }
    }

})
</script>
<style lang="scss" scoped >
@import "@/styles/sass/main.scss";
 .header {
        display: flex;
        justify-content: space-around;
        padding: 10px;
        background-color: $bgColor;

    }
    .menuIcon{
                position:absolute;
                top: 15px;
                right: 15px;
                 padding: 3px;
                 font-size: 1.1rem;

    }
    
</style>


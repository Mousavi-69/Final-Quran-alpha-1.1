<template>
<div class='container'>
    <div class="page">
    Page Test<br/>
    <h4>Output = {{output}}</h4>

    </div>
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

    setup(props, context) {
        const store = useStore()
        let output = ref()


        return {output,

        }
    }

})
</script>
<style lang="scss" scoped >
@import "@/styles/sass/main.scss";
.page{
    // width: 100%;
    // height:600px;
    background: rgb(228, 228, 228);
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border: 7px dashed rgb(3, 167, 196);
}
</style>


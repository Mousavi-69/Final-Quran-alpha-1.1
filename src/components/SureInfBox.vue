<template>
<div class='container'>
    Sure Inf Box
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

        return {

        }
    }

})
</script>
<style lang="scss" scoped >
@import "@/styles/sass/main.scss";

</style>


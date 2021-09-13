<template>
<div class="container">
    <header class="header">
        <form action="">
            <input type="search" v-model="searchValue" @input="filterText" placeholder="جستجو ..." />
        </form>
    </header>
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
        const searchValue = ref(store.state.search_value)

        function filterText() {
            store.commit('setSearchValue', searchValue.value)
        }

        return {
            searchValue,
            filterText,
        }
    }

})
</script>
<style lang="scss" scoped >
@import "@/styles/sass/main.scss";

.container {
  height: 30px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;

  background-color: $bgColor;
  @include boxStyle($primaryColor, 0px 0px 25px 25px);

  input {
    // width: calc(100%-50px);
    width: 100%;
    padding: 8px 30px 5px 10px;
    @include textStyle(rgb(0, 0, 0));
    border-width: 0px;
    background-color: $primaryColor;
    &:focus {
      border-width: 0px;
      outline: none;
    }
  }
}
</style>

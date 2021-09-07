<template>
<div class="container">
     <!-- <SearchBox></SearchBox>    -->
    <br />
    <!-- <ListSuresPage></ListSuresPage>  -->
    <br />
    <!-- <router-link></router-link> -->
   <router-view> </router-view> 
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import SearchBox from './components/searchBox/SearchBox.vue';
import ListSuresPage from './pages/ListSures_page/ListSures_page.vue';

export default defineComponent({
    name: 'App',
    components: {
        SearchBox    }
})
</script>

<style lang="scss" scoped>
@import "@/styles/sass/main.scss";

.container {
    text-align: center;
    background-color: $blue;

}
</style>

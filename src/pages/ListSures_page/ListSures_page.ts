
import { ref, computed } from 'vue'
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import SearchBox from '@/components/searchBox/SearchBox.vue'
import listSures from '@/components/listSures/listSures.vue'


export default {
    components: {SearchBox,listSures
        
    },
    setup(props: any, context: any) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();


        return {}
    }
}
import { ref, computed } from 'vue'
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
export default ({
    name: 'AudioPlayer',

    setup(props: any, context: any) {
        let router = useRouter();
        let route = useRoute();
        let store = useStore();



        return {

        }
    }

})
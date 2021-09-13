import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            search_value:"",
            suraNumber_value:0,
            showOverflowClass:true,

        };
    },
    mutations: {
        setSearchValue(state: any, value: string) {
            state.search_value = value
        },
        cunterClick(state:any) {
        },
       
        
    },
    actions: {

    },
    
});

export default store;
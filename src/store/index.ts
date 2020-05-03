import Vue from "vue";
import Vuex from "vuex-typescript-interface";
import { api } from '@/services'
Vue.use(Vuex);
export interface StoreModel {
    a: string;
    test(): void;
}

const store = new Vuex.Store<StoreModel>({
    state: {
        a: 'asd'
    },
    mutations: {
        test() {
            api.toDo.addToDo({ name: 'asd' })
        }
    }
});
export default store;

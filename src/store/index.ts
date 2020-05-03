import Vue from "vue";
import Vuex from "vuex-typescript-interface";
import { api } from '@/services/api'
import { ToDo } from '@/models'
Vue.use(Vuex);
export interface StoreModel {
    toDoList: ToDo[];
    addToDo(payload: ToDo): void;
    requestCreateToDo(payload: string): Promise<void>;
}

const store = new Vuex.Store<StoreModel>({
    state: {
        toDoList: []
    },
    mutations: {
        addToDo(state, payload) {
            state.toDoList = [...state.toDoList, payload]
        }
    },
    actions: {
        async requestCreateToDo({ commit }, payload) {
            try {
                const result = await api.toDo.addToDo({ name: payload })
                commit('addToDo', result)
            } catch (error) {
                console.error(error);
            }
        }
    }
});
export default store;

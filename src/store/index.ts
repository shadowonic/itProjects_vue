import Vue from "vue";
import Vuex from "vuex-typescript-interface";
import { api } from '@/services/api'
import { ToDo, CreateToDoTask, ToDoTask } from '@/models'
Vue.use(Vuex);
export interface StoreModel {
    toDoList: ToDo[];

    readonly getToDoList: ToDo[];

    addToDo(payload: ToDo): void;
    addTask(payload: ToDoTask): void;
    setToDoList(payload: ToDo[]): void;

    requestCreateToDo(payload: string): Promise<void>;
    requestCreateTask(payload: CreateToDoTask): Promise<void>;
    requestToDoList(): Promise<void>;
}

const store = new Vuex.Store<StoreModel>({
    state: {
        toDoList: []
    },
    getters: {
        getToDoList(state) {
            return state.toDoList
        }
    },
    mutations: {
        addToDo(state, payload) {
            state.toDoList = [...state.toDoList, payload]
        },
        setToDoList(state, payload) {
            state.toDoList = payload
        },
        addTask(state, payload) {
            try {
                const toDoId = state.toDoList.findIndex(item => {
                    return item.id === payload.toDoId
                })
                if (toDoId < 0) {
                    throw new Error('TO DO NOT EXIST')
                }
                console.log('SHOULD ADD');
                
                state.toDoList[toDoId].tasks.push(payload)
            } catch (error) {
                console.error(error);

            }

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
        },
        async requestToDoList({ commit }) {
            try {
                const result = await api.toDo.requestToDoList()
                commit('setToDoList', result)
            } catch (error) {
                console.error(error);

            }
        },
        async requestCreateTask({ commit }, payload) {
            try {
                const result = await api.toDoTask.addToDoTask(payload)
                commit('addTask', result)
            } catch (error) {
                console.error(error);

            }
        }
    }
});
export default store;

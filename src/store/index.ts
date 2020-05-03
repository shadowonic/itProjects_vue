import Vue from "vue";
import Vuex from "vuex-typescript-interface";

Vue.use(Vuex);
export interface StoreModel {
}

const store = new Vuex.Store<StoreModel>({
});
export default store;

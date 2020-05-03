import Vue from 'vue'
import { Store } from 'vuex-typescript-interface';
import {StoreModel} from '@/store'

declare module "vue/types/options"

{
    interface ComponentOptions<V extends Vue> {
        store?: Store<StoreModel>;
    }
}

declare module "vue/types/vue"
{
    interface Vue {
        $store: Store<StoreModel>;
    }
}
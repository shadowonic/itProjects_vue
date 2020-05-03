import Vue from 'vue'
import { Api} from '../services/api/api'
declare module "vue/types/options"

{
    interface ComponentOptions<V extends Vue> {
        api?: Api;
    }
}

declare module "vue/types/vue"
{
    interface Vue {
        $api: Api;
    }
}
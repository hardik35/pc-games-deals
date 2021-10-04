import API from "@/services/api"
import hashMapStores from '@/helperFunctions/hashMapStores'

export default {
    namespaced: true,
    state: {
        storesList: [],
    },
    actions: {
        async getAllStores(mutations, slug) {
            const storesData = await API.stores.FETCH_STORES_LIST();
            mutations.commit('setStores', storesData.data);
        }
    },
    mutations: {
        setStores(state, storesList) {
            state.storesList = storesList;
        }
    },
    getters: {
        getStoreListMap(state) {
            console.log(hashMapStores)
            return hashMapStores(state.storesList);
        }
    }

}

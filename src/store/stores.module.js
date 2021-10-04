import API from "@/services/api"



export default {
    namespaced: true,
    state: {
        storesList: [],
    },
    actions: {
        async getAllStores(mutations, slug) {
            const storesData = await API.stores.FETCH_STORES_LIST();
            // console.log(storesData);
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
            const storeListMap = {};
            for (let i = 0; i < state.storesList.length; i++) {
                storeListMap[state.storesList[i].storeID] = state.storesList[i];
            }
            return storeListMap;
        }
    }

}

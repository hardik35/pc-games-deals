import API from "@/services/api"



export default {
    namespaced: true,
    state: {
        allDeals: [],
    },
    actions: {
        async getAllDeals(mutations) {
            const dealsData = await API.deals.FETCH_DEALS_LIST();
            console.log(dealsData);
            mutations.commit('setDeals', dealsData.data);
        }
    },
    mutations: {
        setDeals(state, allDeals) {
            state.allDeals = allDeals;
        }
    },
    getters: {
        allDeals(state) {
            return state.allDeals;
        }
    }

}

import API from "@/services/api"



export default {
    namespaced: true,
    state: {
        deals: [],
        gameInfo: {}
    },
    actions: {
        async getGameInfo(mutations, gameId) {
            const gameInfo = await API.games.FETCH_GAME_INFO(gameId);
            mutations.commit('setGameInfo', gameInfo.data);
        }
    },
    mutations: {
        setGameInfo(state, gameInfo) {
            state.deals = gameInfo.deals;
            state.gameInfo = gameInfo.info;
        }
    },
    getters: {
        gameDeals(state) {
            return state.deals;
        },
        gameInfo(state) {
            return state.gameInfo;
        }
    }

}

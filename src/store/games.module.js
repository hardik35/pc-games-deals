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
            console.log(gameInfo);
            mutations.commit('setGameInfo', gameInfo.data);
        }
    },
    mutations: {
        setGameInfo(state, gameInfo) {
            console.log(gameInfo);
            state.deals = gameInfo.deals;
            state.gameInfo = gameInfo.info;
        }
    },
    getters: {
        gameDeals(state) {
            console.log(state)
            return state.deals;
        },
        gameInfo(state) {
            return state.gameInfo;
        }
    }

}

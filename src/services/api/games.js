import axios from 'axios';

export default {
    FETCH_GAME_INFO(gameID) {
        return axios.get(`games?id=${gameID}`);
    },
}
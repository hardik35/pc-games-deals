import axios from 'axios';
import deals from './deals';
import games from './games';
import stores from './stores'

export default {
    deals,
    games,
    stores,
    SET_AXIOS_BASE_URL() {
        axios.defaults.baseURL = 'https://www.cheapshark.com/api/1.0/';
    },
}
import axios from 'axios';

export default {
    FETCH_DEALS_LIST() {
        return axios.get(`/deals`);
    },
    FETCH_DEALS_LIST_BY_NAME(gameTitle) {
        return axios.get(`/deals?title=${title}`);
    }
}
import axios from 'axios';

export default {
    FETCH_STORES_LIST() {
        return axios.get(`/stores`);
    },
}
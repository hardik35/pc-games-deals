import axios from 'axios';

export default {
    FETCH_DEALS_LIST() {
        return axios.get(`/deals`);
    },
}
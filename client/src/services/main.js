import axios from 'axios';

export default {
    getNest: async (city) => {
        let url = `api/user`;
        let res = await axios.get(url).catch(error => console.log(error));
        console.log('url: ', res);
        return res.data || {};

    },
}

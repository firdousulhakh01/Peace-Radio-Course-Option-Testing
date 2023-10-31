import axios from 'axios';
import config from './config.json';

export const login = async () => {
    const loginFormData = new FormData();
    loginFormData.append('userId', 34);
    const res = await axios({
        method: "post",
        url: `${config.API_URL}${config.PAGE_LOAD_API_URI}`,
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
    // console.log(res.data[0]);
    res.data[0].selectedUser = 0;
    return res.data[0];
}
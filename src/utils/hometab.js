import axios from 'axios';
import config from './config.json';

const homeTabFetch = async (userId, courseType, rollNumber) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('courseType', courseType);
    formData.append('rollNumber', rollNumber);
    const res = await axios({
        method: "post",
        url: `${config.API_URL}${config.HOMETAB_API_URI}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    })
    console.log(res.data);
    return res.data;
}

export default homeTabFetch
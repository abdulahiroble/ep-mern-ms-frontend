import axios from 'axios';

let url = process.env.REACT_APP_PROD_URL;
if (process.env.REACT_APP_ENVIRONMENT_PROD == "false") {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}



class LoadPropertyCollection {
    getSliderImages = async () => {
        const result = await axios.get(`${url}/api/getAll/sliderImage`)
        // console.log("RESULT=====",result)
        return result;
    }

}

export default new LoadPropertyCollection();
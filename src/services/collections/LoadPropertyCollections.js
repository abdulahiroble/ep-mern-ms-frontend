import axios from 'axios';

let url;
if (process.env.Node_env !== 'production') {
    url = process.env.REACT_APP_DEVELOPMENT_URL;
}



class LoadPropertyCollection {
    getSliderImages = async ()=>{
        const result = await axios.get(`${url}/api/getAll/sliderImage`)
        console.log("RESULT=====",result)
        return result;
    }

}

export default new LoadPropertyCollection();
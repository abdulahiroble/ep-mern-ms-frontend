import axios from 'axios';


let url;
if(process.env.Node_env != 'production'){
    url = "http://localhost:8080"
}

class LoadEventCollections{
    searchEvent = async (input)=>{
        const data = {
            'zipcode' : input
        }
        const headers = {
            method : 'POST',
            body : {
                "zipcode":input
            }, 
            "content-type" : 'application/json'

        }
        const result = await axios.post(`${url}/api/allEvents`, data);
        // console.log(result);
        const fetchResult = await fetch(`${url}/api/allEvents`, headers);
        console.log(await fetchResult.json());
        // console.log(await result.data);
        // return result.json();
    }
}

export default new LoadEventCollections();
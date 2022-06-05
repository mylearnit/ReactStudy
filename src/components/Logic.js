import axios from "axios";
export const Logic = async (method, data, params, url) => {
    let token = localStorage.getItem('token'); 
    
    let config = {method, url, headers: { 'Authorization': `Token ${token}` }};
        
    if (params != '') {
        config['url']=url + '?' + params;
    }

    if (method=='post') {
        config['data']=data;
    }

    let response = await axios(config)
    .then(function (res) {
        console.log("GET API response", res)
        return res
    })
    .catch(function (error) {
        console.log("GET API error", error)
    });
    return response
}

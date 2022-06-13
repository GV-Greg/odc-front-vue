import axios from 'axios'

let API_URL = "";
if(import.meta.env.PROD) {
    API_URL = "https://odc-admin.creacube.be/api/"
} else {
    API_URL = "http://odc.local/odc-api-back/public/api/"
}

export default axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    }
})
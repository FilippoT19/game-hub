import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
    key: 'e56d10918aeb44bdb3355b372969081c'
}
})
import axios from 'axios';

//https://api.vagalume.com.br/search.php?art=U2&mus=one&apikey={key}

const api = axios.create({
    baseURL: 'https://api.vagalume.com.br',
})

export default api;
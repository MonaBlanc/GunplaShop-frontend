import axios from 'axios';

const baseURL = "http://localhost:8080/api";
// register request
export const getProducts = (newUser) => {
    // GET request on http://localhost:8080/api/products
    return axios.get(`${baseURL}/products`)
        .then(response => {
            console.log(response);
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}
import axios from 'axios';

const baseURL = "http://localhost:8080/api";
// register request
export const getProducts = async () => {
    // GET request on http://localhost:8080/api/products
    return axios.get(`${baseURL}/products`)
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}

export const checkout = async (orderProducts) => {
    // POST request on http://localhost:8080/api/orders
    return axios.post(`${baseURL}/orders`, orderProducts)
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}
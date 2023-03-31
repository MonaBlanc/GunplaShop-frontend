import * as actionType from './types';
import * as ShopService from '../components/services/shop.service';

// get random meal action
export const getProducts = () => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return ShopService.getProducts()
        .then(response => {
            console.log(response);
            dispatch({
                type: actionType.GET_PRODUCTS_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.GET_PRODUCTS_FAIL,
                payload: { err: error.message || "Fetch recipe failed." }
            })
            return Promise.reject(error);
        })
}
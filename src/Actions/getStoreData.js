export const STORE_REQUEST_INIT = "STORE_REQUEST_INIT";
export const STORE_REQUEST_SUCCESS = "STORE_REQUEST_SUCCESS";
export const STORE_REQUEST_FAILURE = "STORE_REQUEST_FAILURE";
export const FILTERING = "FILTERING";

export const initRequestStore = () => ({
    type: STORE_REQUEST_INIT
})

export const successRequestStore = (data) => ({
    type: STORE_REQUEST_SUCCESS,
    data
})

export const failureRequestStore = (error) => ({
    type: STORE_REQUEST_FAILURE,
    error
})

export const filtered = (data) => ({
    type: FILTERING,
    data
})

export function getStoreData(dispatch){
    return (dispatch) => {
        dispatch(initRequestStore());
        fetch('http://localhost:8000/store').then((response) => {
            return response.json()
        }).then((data) => {
            dispatch(successRequestStore(data))
        }).catch((error) => {
            dispatch(failureRequestStore(error))
        })
    }
}
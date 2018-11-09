import { STORE_REQUEST_SUCCESS, STORE_REQUEST_FAILURE } from '../Actions/getStoreData';

const initialState = {
    storeData: [],
    storeDataError: {},
}

function storeDataManage(state=initialState, action){
    switch(action.type) {
        case STORE_REQUEST_SUCCESS:
            return {...state, storeData:action.data.store};
        case STORE_REQUEST_FAILURE:
            return {...state, storeDataError:action.error};
        default: 
            return state; 
    }
}

export default storeDataManage;
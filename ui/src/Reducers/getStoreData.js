import { 
    STORE_REQUEST_SUCCESS, 
    STORE_REQUEST_FAILURE,
    FILTERING
} from '../Actions/getStoreData';

const initialState = {
    storeData: [],
    storeDataError: {},
    filteredItems: [],
}

function storeDataManage(state=initialState, action){
    switch(action.type) {
        case STORE_REQUEST_SUCCESS:
            return {...state, storeData:action.data.store};
        case STORE_REQUEST_FAILURE:
            return {...state, storeDataError:action.error};
        case FILTERING:
            const items = state.storeData.filter(function(item){
                if(action.data === "All"){
                   return state.storeData
                }else if(item.categories.includes(action.data)){
                   return item
               }
            });
           return {...state, filteredItems:items}
            
        default: 
            return state; 
    }
}

export default storeDataManage;
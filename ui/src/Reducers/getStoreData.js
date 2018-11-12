import { 
    STORE_REQUEST_SUCCESS, 
    STORE_REQUEST_FAILURE,
    FILTERING
} from '../Actions/getStoreData';

const initialState = {
    storeData: [],
    storeDataError: {},
    filteredItems: [],
    stats: {
        show: "",
        hide: ""
    }
}

function storeDataManage(state=initialState, action){
    switch(action.type) {
        case STORE_REQUEST_SUCCESS:
            return {...state, storeData:action.data.store};
        case STORE_REQUEST_FAILURE:
            return {...state, storeDataError:action.error};
        case FILTERING:
            const items = state.storeData.filter(function(item){
                if(STORE_REQUEST_SUCCESS && action.data === "All"){
                   return item
                }else if(item.categories.includes(action.data)){
                   return item
               }
            });
            const show = items.length;
            const hide = state.storeData.length - items.length;
           return {...state, filteredItems:items, stats: {show: show, hide: hide}}
            
        default: 
            return state; 
    }
}

export default storeDataManage;
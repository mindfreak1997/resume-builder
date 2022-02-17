const initialState={}

export const personalReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_DETAILS':{
            return action.payload
        }
        case 'RESET_PERSONAL':{
            return {}
        }
        default: {
            return state
        }
    }
}

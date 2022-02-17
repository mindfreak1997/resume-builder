const initialState=[]

export const certificateReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_CERTIFICATE':{
            return [...state,{...action.payload}]
        }
        
        case 'DELETE_CERTIFICATE':{
            return state.filter(ele => {
                return ele.id !== action.payload
            })
        }
        case 'UPDATE_CERTIFICATE': {
            return state.map(ele => {
                if (ele.id === action.payload.id) {
                    return { ...action.payload }
                } else {
                    return { ...ele }
                }
            })
        }
        case 'GET_CERTIFICATE':{
            return action.payload
        }
        case 'RESET_CERTIFICATE':{
            return []
        }
        default: {
            return state
        }
    }
}
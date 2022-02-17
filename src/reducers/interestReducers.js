const initialState=[]

export const interestReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_INTEREST':{
            return [...state,{...action.payload}]
        }
        
        case 'DELETE_INTEREST':{
            return state.filter(ele => {
                return ele.id !== action.payload
            })
        }
        case 'UPDATE_INTEREST': {
            return state.map(ele => {
                if (ele.id === action.payload.id) {
                    return { ...action.payload }
                } else {
                    return { ...ele }
                }
            })
        }
        case 'GET_INTEREST':{
            return action.payload
        }
        case 'RESET_INTEREST':{
            return []
        }
        default: {
            return state
        }
    }
}
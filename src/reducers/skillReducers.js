const initialState=[]

export const skillReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_SKILL':{
            return [...state,{...action.payload}]
        }
        
        case 'DELETE_SKILL':{
            return state.filter(ele => {
                return ele.id !== action.payload
            })
        }
        case 'UPDATE_SKILL': {
            return state.map(ele => {
                if (ele.id === action.payload.id) {
                    return { ...action.payload }
                } else {
                    return { ...ele }
                }
            })
        }
        case 'GET_SKILL':{
            return action.payload
        }
        case 'RESET_SKILL':{
            return []
        }
        default: {
            return state
        }
    }
}
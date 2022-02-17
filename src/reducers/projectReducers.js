const initialState=[]

export const projectReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_PROJECT':{
            return [...state,{...action.payload}]
        }
        
        case 'DELETE_PROJECT':{
            return state.filter(ele => {
                return ele.id !== action.payload
            })
        }
        case 'UPDATE_PROJECT': {
            return state.map(ele => {
                if (ele.id === action.payload.id) {
                    return { ...action.payload }
                } else {
                    return { ...ele }
                }
            })
        }
        case 'GET_PROJECT':{
            return action.payload
        }
        case 'RESET_PROJECT':{
            return []
        }
        default: {
            return state
        }
    }
}
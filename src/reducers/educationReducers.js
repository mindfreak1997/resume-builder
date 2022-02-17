const initialState=[]

export const educationReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_EDUCATION':{
            return [...state,{...action.payload}]
        }
        
        case 'DELETE_EDUCATION':{
            return state.filter(ele => {
                return ele.id !== action.payload
            })
        }
        case 'UPDATE_EDUCATION': {
            return state.map(ele => {
                if (ele.id === action.payload.id) {
                    return { ...action.payload }
                } else {
                    return { ...ele }
                }
            })
        }
        case 'GET_EDUCATION':{
            return action.payload
        }
        case 'RESET_EDUCATION':{
            return []
        }
        default: {
            return state
        }
    }
}
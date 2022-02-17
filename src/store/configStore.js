import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'
import { certificateReducer } from "../reducers/certificateReducers"
import { educationReducer } from "../reducers/educationReducers"
import { interestReducer } from "../reducers/interestReducers"
import { personalReducer } from "../reducers/personalReducers"
import { projectReducer } from "../reducers/projectReducers"
import { skillReducer } from "../reducers/skillReducers"




export const configureStore=()=>{
    const store=createStore(combineReducers({
       personal:personalReducer,
       education:educationReducer,
       project:projectReducer,
       skill:skillReducer,
       certificate:certificateReducer,
       interest:interestReducer
    }),applyMiddleware(thunk))

    return store
}
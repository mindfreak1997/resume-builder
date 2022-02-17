import axios from '../config/axiosConfig'

export const asyncInterest=(formData,id)=>{
    return (dispatch)=>{
        axios.post(`/interest/add/${id}`,formData)
        .then((res) => {
            const result=res.data
            console.log(result)
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(addInterest(res.data))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
const addInterest=(data)=>{
    return {
        type:'ADD_INTEREST',
        payload:data
    }
}

export const getInterest=(id)=>{
    return (dispatch)=>{
        axios.get(`/getInterest/${id}`)
        .then((res) => {
            const result=res.data
            console.log(result)
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(getAction(res.data))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
const getAction=(data)=>{
    return {
        type:'GET_INTEREST',
        payload:data
    }
}


export const deleteInterest=(id)=>{
    return (dispatch)=>{
        axios.delete(`/interest/delete/${id}`)
        .then((res) => {
            const result=res.data
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(deleteAction(id))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const deleteAction=(id)=>{
    return {
        type:'DELETE_INTEREST',
        payload:id
    }
}

export const updateInterest=(formData,id)=>{
    return (dispatch)=>{
        axios.put(`/interest/update/${id}`,formData)
        .then((res) => {
            const result=res.data
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(updateAction(formData))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
const updateAction=(data)=>{
    return {
        type:'UPDATE_INTEREST',
        payload:data
    }
}
export  const resetInterest=()=>{
    return{
        type:'RESET_INTEREST'
    }
}

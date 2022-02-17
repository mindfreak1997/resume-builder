import axios from '../config/axiosConfig'

export const asyncProject=(formData,id)=>{
    return (dispatch)=>{
        axios.post(`/project/add/${id}`,formData)
        .then((res) => {
            const result=res.data
            console.log(result)
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(addProject(res.data))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
const addProject=(data)=>{
    return {
        type:'ADD_PROJECT',
        payload:data
    }
}


export const getProject=(id)=>{
    return (dispatch)=>{
        axios.get(`/getProject/${id}`)
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
        type:'GET_PROJECT',
        payload:data
    }
}

export const deleteProject=(id)=>{
    return (dispatch)=>{
        axios.delete(`/project/delete/${id}`)
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
        type:'DELETE_PROJECT',
        payload:id
    }
}

export const updateProject=(formData,id)=>{
    return (dispatch)=>{
        axios.put(`/project/update/${id}`,formData)
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
        type:'UPDATE_PROJECT',
        payload:data
    }
}

export  const resetProject=()=>{
    return{
        type:'RESET_PROJECT'
    }
}

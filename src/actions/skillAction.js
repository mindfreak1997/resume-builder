import axios from '../config/axiosConfig'

export const asyncSkill=(formData,id)=>{
    return (dispatch)=>{
        axios.post(`/skill/add/${id}`,formData)
        .then((res) => {
            const result=res.data
            console.log(result)
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(addSkill(res.data))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
const addSkill=(data)=>{
    return {
        type:'ADD_SKILL',
        payload:data
    }
}


export const getSkill=(id)=>{
    return (dispatch)=>{
        axios.get(`/getSkill/${id}`)
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
        type:'GET_SKILL',
        payload:data
    }
}

export const deleteSkill=(id)=>{
    return (dispatch)=>{
        axios.delete(`/skill/delete/${id}`)
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
        type:'DELETE_SKILL',
        payload:id
    }
}

export const updateSkill=(formData,id)=>{
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
        type:'UPDATE_SKILL',
        payload:data
    }
}

export  const resetSkill=()=>{
    return{
        type:'RESET_SKILL'
    }
}
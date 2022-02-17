import axios from '../config/axiosConfig'

export const asyncEducation=(formData,id)=>{
    return (dispatch)=>{
        axios.post(`/education/add/${id}`,formData)
        .then((res) => {
            const result=res.data
            console.log(result)
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(addEducation(res.data))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
const addEducation=(data)=>{
    return {
        type:'ADD_EDUCATION',
        payload:data
    }
}

export const getEducation=(id)=>{
    return (dispatch)=>{
        axios.get(`/getEducationId/${id}`)
        .then((res) => {
            const result=res.data
            console.log('getEducation',result)
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
        type:'GET_EDUCATION',
        payload:data
    }
}


export const deleteEducation=(id)=>{
    return (dispatch)=>{
        axios.delete(`/education/delete/${id}`)
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
        type:'DELETE_EDUCATION',
        payload:id
    }
}

export const updateEducation=(formData,id)=>{
    return (dispatch)=>{
        axios.put(`/education/update/${id}`,formData)
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
        type:'UPDATE_EDUCATION',
        payload:data
    }
}
export  const resetEducation=()=>{
    return{
        type:'RESET_EDUCATION'
    }
}
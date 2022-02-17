import axios from '../config/axiosConfig'

export const asyncCertificate=(formData,id)=>{
    return (dispatch)=>{
        axios.post(`/certificate/add/${id}`,formData)
        .then((res) => {
            const result=res.data
            console.log(result)
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(addCertificate(res.data))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
const addCertificate=(data)=>{
    return {
        type:'ADD_CERTIFICATE',
        payload:data
    }
}

export const getCertification=(id)=>{
    return (dispatch)=>{
        axios.get(`/getCertificate/${id}`)
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
        type:'GET_CERTIFICATE',
        payload:data
    }
}


export const deleteCertificate=(id)=>{
    return (dispatch)=>{
        axios.delete(`/certificate/delete/${id}`)
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
        type:'DELETE_CERTIFICATE',
        payload:id
    }
}

export const updateCertificate=(formData,id)=>{
    return (dispatch)=>{
        axios.put(`/certificate/update/${id}`,formData)
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
        type:'UPDATE_CERTIFICATE',
        payload:data
    }
}
export  const resetCertificate=()=>{
    return{
        type:'RESET_CERTIFICATE'
    }
}
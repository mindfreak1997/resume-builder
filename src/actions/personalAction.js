import axios from '../config/axiosConfig'

export const asyncPersonal=(formData)=>{
    return (dispatch)=>{
        axios.post('/personal/add',formData)
        .then((res) => {
            const result=res.data
            console.log(result)
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(addPersonal(res.data))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
export const updatePersonal=(formData,id)=>{
    return (dispatch)=>{
        axios.put(`/personal/update/${id}`,formData)
        .then((res) => {
            const result=res.data
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(addPersonal(formData))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
export const getPersonal=(id)=>{
    return (dispatch)=>{
        axios.get(`/personal/${id}`)
        .then((res) => {
            const result=res.data
            if (result.hasOwnProperty('errors')) {
                alert(result.message)
            } else {
           dispatch(addPersonal(res.data))
    }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
const addPersonal=(data)=>{
    return {
        type:'ADD_DETAILS',
        payload:data
    }
}
export  const resetPersonal=()=>{
    return{
        type:'RESET_PERSONAL'
    }
}


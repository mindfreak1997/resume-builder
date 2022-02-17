const db = require('../models')

// model
const Education = db.education

// functions

//1. Add Review

const addEducation = async (req, res) => {

    const id = req.params.id

    let data = {
        personal_id: id,
        college: req.body.college,
        from: req.body.from,
        to:req.body.to,
        qualification:req.body.qualification,
        specialization:req.body.specialization,
        marks:req.body.marks
    }

    const education = await Education.create(data)
    res.status(200).send(education)
}
//2. update bulk 
const bulkUpdate=async (req,res)=>{
    let education= await Education.bulkCreate(req.body,{ updateOnDuplicate:["id"]})
    res.status(200).send(education)
    console.log(education)
}
// 3. delete  by id

const deleteEducation = async (req, res) => {

    let id = req.params.id
    
    await Education.destroy({ where: { id: id }} )

    res.status(200).send('Todo is deleted !')

}
// 4. update education
const updateEducation = async (req, res) => {

    let id = req.params.id

    const education = await Education.update(req.body, { where: { id: id }})

    res.status(200).send(education)
   
   console.log(education)
}
//get education
const getEducation=async(req,res)=>{

    let id = req.params.id
    let education = await Education.findAll({ where: { personal_id: id }})
    res.status(200).send(education)


}
module.exports={
    addEducation,
    bulkUpdate,
    deleteEducation,
    updateEducation,
    getEducation
}
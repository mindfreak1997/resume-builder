const db = require('../models')

// model
const Interest = db.interests

// functions

//1. Add Review

const addInterest = async (req, res) => {

    const id = req.params.id

    let data = {
        personal_id: id,
        title: req.body.title
    }

    const interest = await Interest.create(data)
    res.status(200).send(interest)
    console.log(interest)
}
//2. update  
const updateInterest = async (req, res) => {

    let id = req.params.id

    const interest = await Interest.update(req.body, { where: { id: id }})

    res.status(200).send(interest)
   
   console.log(interest)
}
// 3. delete  by id

const deleteInterest = async (req, res) => {

    let id = req.params.id
    
    await Interest.destroy({ where: { id: id }} )

    res.status(200).send('certificate is deleted !')

}
//get education
const getInterest=async(req,res)=>{

    let id = req.params.id
    let interest = await Interest.findAll({ where: { personal_id: id }})
    res.status(200).send(interest)


}
module.exports={
    addInterest,
    updateInterest,
    deleteInterest,
    getInterest
}


const db = require('../models')

// model
const Personal = db.personal
const Education=db.education

// functions

//1. Add Review

const addPersonal = async (req, res) => {
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        total_experience:req.body.total_experience,
        to:req.body.to,
        from:req.body.from,
        github:req.body.github,
        linkedIn:req.body.linkedIn
    }

    const personal = await Personal.create(data)
    res.status(200).send(personal)
}
//2.update personal
const updatePersonal = async (req, res) => {

    let id = req.params.id

    const personal = await Personal.update(req.body, { where: { id: id }})

    res.status(200).send(personal)
   
   console.log(personal)
}
//3.get all personal
const getAllPersonal = async (req, res) => {

    let personal = await Personal.findAll({})
    res.status(200).send(personal)

}
 //4.get personal by id
 const getPersonal=async(req,res)=>{

        let id = req.params.id
        let personal = await Personal.findOne({ where: { id: id }})
        res.status(200).send(personal)
    
    
 }
 //5.get education by id
 const getEducation =  async (req, res) => {

    const id = req.params.id

    const data = await Personal.findOne({
        include: [{
            model: Education,
            as: 'education'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}
module.exports={
    addPersonal,
    updatePersonal,
    getAllPersonal,
    getPersonal,
    getEducation
}

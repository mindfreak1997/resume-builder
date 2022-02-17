const db = require('../models')

// model
const Skill = db.skills

// functions

//1. Add Review

const addSkill = async (req, res) => {

    const id = req.params.id

    let data = {
        personal_id: id,
        skills: req.body.skills,
        used:req.body.used
        
    }

    const skill = await Skill.create(data)
    res.status(200).send(skill)
}
//2. delete  by id

const deleteSkill = async (req, res) => {

    let id = req.params.id
    
    await Skill.destroy({ where: { id: id }} )

    res.status(200).send('project is deleted !')

}
// 4. update education
const updateSkill = async (req, res) => {

    let id = req.params.id

    const skill = await Skill.update(req.body, { where: { id: id }})

    res.status(200).send(skill)
   
   console.log(skill)
}
//get education
const getSkill=async(req,res)=>{

    let id = req.params.id
    let skill = await Skill.findAll({ where: { personal_id: id }})
    res.status(200).send(skill)


}
module.exports={
    addSkill,
    deleteSkill,
    updateSkill,
    getSkill
}

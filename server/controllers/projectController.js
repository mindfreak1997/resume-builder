const db = require('../models')

// model
const Project = db.project

// functions

//1. Add Review

const addProject = async (req, res) => {

    const id = req.params.id

    let data = {
        personal_id: id,
        title: req.body.title,
        role:req.body.role,
        organization:req.body.organization,
        technologies:req.body.technologies,
        description:req.body.description,
        highlights:req.body.highlights,
        teamSize:req.body.teamSize,
        from:req.body.from,
        to:req.body.to,
        link: req.body.link
        
    }

    const project = await Project.create(data)
    res.status(200).send(project)
}
// 2. delete  by id

const deleteProject = async (req, res) => {

    let id = req.params.id
    
    await Project.destroy({ where: { id: id }} )

    res.status(200).send('project is deleted !')

}
// 4. update education
const updateProject = async (req, res) => {

    let id = req.params.id

    const project = await Project.update(req.body, { where: { id: id }})

    res.status(200).send(project)
   
   console.log(project)
}
//get education
const getProject=async(req,res)=>{

    let id = req.params.id
    let project = await Project.findAll({ where: { personal_id: id }})
    res.status(200).send(project)


}
module.exports={
    addProject,
    updateProject,
    deleteProject,
    getProject
}

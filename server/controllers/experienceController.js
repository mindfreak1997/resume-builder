const db = require('../models')

// model
const Experience = db.experience

// functions

//1. Add Review

const addExperience = async (req, res) => {

    const id = req.params.id

    let data = {
        personal_id: id,
        organization: req.body.organization,
        position: req.body.position,
        duration:req.body.duration,
        description:req.body.description
    }

    const experience = await Experience.create(data)
    res.status(200).send(experience)
}

module.exports={
    addExperience
}

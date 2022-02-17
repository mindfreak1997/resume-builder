const db = require('../models')

// model
const Certification = db.certification

// functions

//1. Add Review

const addCertification = async (req, res) => {

    const id = req.params.id

    let data = {
        personal_id: id,
        title: req.body.title,
        from: req.body.from,
        to:req.body.to
    }

    const certification = await Certification.create(data)
    res.status(200).send(certification)
    console.log(certification)
}
//2. update  
const updateCertificate = async (req, res) => {

    let id = req.params.id

    const certification = await Certification.update(req.body, { where: { id: id }})

    res.status(200).send(certification)
   
   console.log(certification)
}
// 3. delete  by id

const deleteCertificate = async (req, res) => {

    let id = req.params.id
    
    await Certification.destroy({ where: { id: id }} )

    res.status(200).send('certificate is deleted !')

}
//get certificate
const getCertificate=async(req,res)=>{

    let id = req.params.id
    let certificate = await Certification.findAll({ where: { personal_id: id }})
    res.status(200).send(certificate)


}
module.exports={
    addCertification,
    updateCertificate,
    deleteCertificate,
    getCertificate
}

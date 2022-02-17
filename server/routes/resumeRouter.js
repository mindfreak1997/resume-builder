const personalController=require('../controllers/personalController')
const certificationController=require('../controllers/certificationController')
const educationController=require('../controllers/educationController')
const experienceController=require('../controllers/experienceController')
const interestController=require('../controllers/interestsController')
const projectController=require('../controllers/projectController')
const skillController=require('../controllers/skillController')




const router = require('express').Router()

//personal
router.post('/personal/add',personalController.addPersonal)
router.put('/personal/update/:id',personalController.updatePersonal)
router.get('/personal/:id',personalController.getPersonal)
router.get('/allPersonal',personalController.getAllPersonal)


//certification
router.post('/certificate/add/:id',certificationController.addCertification)
router.delete('/certificate/delete/:id',certificationController.deleteCertificate)
router.put('/certificate/update/:id',certificationController.updateCertificate)
router.get('/getCertificate/:id',certificationController.getCertificate)

//education
router.post('/education/add/:id',educationController.addEducation)
router.post('/education/update/bulk',educationController.bulkUpdate)
router.delete('/education/delete/:id',educationController.deleteEducation)
router.put('/education/update/:id',educationController.updateEducation)
router.get('/getEducationId/:id',educationController.getEducation)


//experience
router.post('/experience/add',experienceController.addExperience)

//project
router.post('/project/add/:id',projectController.addProject)
router.delete('/project/delete/:id',projectController.deleteProject)
router.put('/project/update/:id',projectController.updateProject)
router.get('/getProject/:id',projectController.getProject)

//skill
router.post('/skill/add/:id',skillController.addSkill)
router.delete('/skill/delete/:id',skillController.deleteSkill)
router.put('/skill/update/:id',skillController.updateSkill)
router.get('/getSkill/:id',skillController.getSkill)

//interests
router.post('/interest/add/:id',interestController.addInterest)
router.delete('/interest/delete/:id',interestController.deleteInterest)
router.put('/interest/update/:id',interestController.updateInterest)
router.get('/getInterest/:id',interestController.getInterest)

module.exports = router
const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.certification=require('./certificationModel')(sequelize,DataTypes)
db.education=require('./educationModel')(sequelize,DataTypes)
db.experience=require('./experienceModel')(sequelize,DataTypes)
db.interests=require('./interestModel')(sequelize,DataTypes)
db.personal=require('./personalModel')(sequelize,DataTypes)
db.project=require('./projectModel')(sequelize,DataTypes)
db.skills=require('./skillModel')(sequelize,DataTypes)


db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

db.personal.hasMany(db.certification,{
    foreignKey:'personal_id',
    as:'certification'
})
db.personal.hasMany(db.education,{
    foreignKey:'personal_id',
    as:'education'
})
db.personal.hasMany(db.experience,{
    foreignKey:'personal_id',
    as:'experience'
})
db.personal.hasMany(db.interests,{
    foreignKey:'personal_id',
    as:'interests'
})
db.personal.hasMany(db.skills,{
    foreignKey:'personal_id',
    as:'skills'
})
db.personal.hasMany(db.project,{
    foreignKey:'personal_id',
    as:'project'
})

db.certification.belongsTo(db.personal,{
    foreignKey:'personal_id',
    as:'personal'
})
db.education.belongsTo(db.personal,{
    foreignKey:'personal_id',
    as:'personal'
})
db.experience.belongsTo(db.personal,{
    foreignKey:'personal_id',
    as:'personal'
})
db.interests.belongsTo(db.personal,{
    foreignKey:'personal_id',
    as:'personal'
})
db.project.belongsTo(db.personal,{
    foreignKey:'personal_id',
    as:'personal'
})
db.skills.belongsTo(db.personal,{
    foreignKey:'personal_id',
    as:'personal'
})

module.exports=db
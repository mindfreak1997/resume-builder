module.exports=(sequelize,DataTypes)=>{
    const experienceDetails=sequelize.define('experience_details',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },   
        organization:{
               type:DataTypes.STRING,
               allowNull:false
           },
           position:{
            type:DataTypes.STRING,
            allowNull:false
        },
        duration:{
            type:DataTypes.STRING,
            allowNull:false
        },
           description:{
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    return experienceDetails
}
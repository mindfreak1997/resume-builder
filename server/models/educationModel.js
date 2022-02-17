

module.exports=(sequelize,DataTypes)=>{
    const educationDetails=sequelize.define('education_details',{
        
        college:{
             type:DataTypes.STRING,
             allowNull:false
         },
         from:{
             type:DataTypes.DATEONLY,
             allowNull:false
         },
         to:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        qualification:{
            type:DataTypes.STRING,
            allowNull:false
        },
        specialization:{
            type:DataTypes.STRING,
            allowNull:false
        },
        marks:{
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    return educationDetails
}
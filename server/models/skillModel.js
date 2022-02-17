module.exports=(sequelize,DataTypes)=>{
    const skillDetails=sequelize.define('skill_details',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },  
        skills:{
              type:DataTypes.STRING,
              allowNull:false
          },
          used:{
              type:DataTypes.STRING,
              allowNull:false
          }
          
    })
    return skillDetails
}
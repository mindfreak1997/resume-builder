module.exports=(sequelize,DataTypes)=>{
    const interestDetails=sequelize.define('interest_details',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },  
        title:{
              type:DataTypes.STRING,
              allowNull:false
          }
          
    })
    return interestDetails
}
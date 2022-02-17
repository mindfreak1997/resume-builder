module.exports=(sequelize,DataTypes)=>{
    const certificationDetails=sequelize.define('certification_details',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title:{
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
          
    })
    return certificationDetails
}
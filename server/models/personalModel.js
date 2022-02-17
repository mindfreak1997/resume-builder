
module.exports=(sequelize,DataTypes)=>{
    const personalDetails=sequelize.define('personal_details',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        first_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        total_experience:{
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
        github:{
            type:DataTypes.STRING,
            
        },
        linkedIn:{
            type:DataTypes.STRING,
            
        }
    })
    return personalDetails
}
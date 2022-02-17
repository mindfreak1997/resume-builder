module.exports=(sequelize,DataTypes)=>{
    const projectDetails=sequelize.define('project_details',{
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
         role:{
            type:DataTypes.STRING,
            allowNull:false
        },
        organization:{
            type:DataTypes.STRING,
            allowNull:false
        },
        technologies:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        highlights:{
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
         teamSize:{
            type:DataTypes.STRING,
            allowNull:false
        },
        link:{
            type:DataTypes.STRING,
            allowNull:false
        }
        
    })
    return projectDetails
}
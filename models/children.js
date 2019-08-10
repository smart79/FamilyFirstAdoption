module.exports = function(sequelize, DataTypes) {
    var Child = sequelize.define("Children", {
      CfirstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      },
      ClastName: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 20]
        }
      },
      Cage: { 
          type: DataTypes.INT,
          allowNull: false,
        },
      Ccity: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [3, 20]
        }
      },
      Ccountry: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3,10]
        }
    }
    });
  
    return Child;
  };
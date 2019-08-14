module.exports = function (sequelize, DataTypes) {
  var Child = sequelize.define("Children", {
    CfirstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    Cimage: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    ClastName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 20]
      }
    },
    Cage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 2]
      }
    },
    Cgender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 6]
      }
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
        len: [3, 10]
      }
    },
    Cspnds: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 3]
      }
    }
  });

  return Child;
};
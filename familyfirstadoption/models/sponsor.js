module.exports = function(sequelize, DataTypes) {
    var Sponsor = sequelize.define("Sponsor", {
      SfirstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      },
      SlastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      },
      Semail: { 
          type: DataTypes.STRING,
          allowNull: false,
        },
      Sphone: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              len: [10]
          }
        },
      Scity: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [3, 20]
        }
      },
      Scountry: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3,10]
        }
    }
    });
  
    return Sponsor;
  };
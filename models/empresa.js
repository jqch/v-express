/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresa', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    rubro: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'rubro'
    },
    razonSocial: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'razon_social'
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'logo'
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'telefono'
    },
    celular: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'celular'
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'email'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'descripcion'
    },
    llave: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'llave'
    }
  }, {
    tableName: 'empresa'
  });
};

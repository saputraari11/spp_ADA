'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.siswa, {
            foreignKey: "id_kelas",as:'siswa'
        })
    }
  };
  kelas.init({
    id_kelas: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    nama_kelas: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    angkatan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas',
    tableName:'kelas'
  });
  return kelas;
};
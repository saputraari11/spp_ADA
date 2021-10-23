'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongTo(models.siswa,{foreignKey:'nisn',as:'siswa'})
      this.belongTo(models.petugas,{foreignKey:'id_petugas',as:'petugas'})
    }
  };
  pembayaran.init({
    id_pembayaran: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    id_petugas: DataTypes.INTEGER,
    nisn: DataTypes.CHAR,
    tgl_bayar: DataTypes.DATE,
    bulan_spp: DataTypes.INTEGER,
    tahun_spp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pembayaran',
    tableName: 'pembayaran'
  });
  return pembayaran;
};
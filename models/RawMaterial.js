const mongoose = require('mongoose');

const rawMaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const RawMaterial = mongoose.model('RawMaterial', rawMaterialSchema);

module.exports = RawMaterial;

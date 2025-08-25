const RawMaterial = require('../models/RawMaterial');

const getAllRawMaterials = async (req, res) => {
  try {
    const materials = await RawMaterial.find();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createRawMaterial = async (req, res) => {
  const { name } = req.body;
  try {
    const material = new RawMaterial({ name });
    await material.save();
    res.status(201).json(material);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getRawMaterialById = async (req, res) => {
  try {
    const material = await RawMaterial.findById(req.params.id);
    if (!material) return res.status(404).json({ message: 'Raw material not found' });
    res.json(material);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateRawMaterial = async (req, res) => {
  try {
    const material = await RawMaterial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!material) return res.status(404).json({ message: 'Raw material not found' });
    res.json(material);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteRawMaterial = async (req, res) => {
  try {
    const material = await RawMaterial.findByIdAndDelete(req.params.id);
    if (!material) return res.status(404).json({ message: 'Raw material not found' });
    res.json({ message: 'Raw material deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllRawMaterials, createRawMaterial, getRawMaterialById, updateRawMaterial, deleteRawMaterial };

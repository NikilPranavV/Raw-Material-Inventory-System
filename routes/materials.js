const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

router.get('/', materialController.getAllRawMaterials);
router.post('/', materialController.createRawMaterial);
router.get('/:id', materialController.getRawMaterialById);
router.put('/:id', materialController.updateRawMaterial);
router.delete('/:id', materialController.deleteRawMaterial);

module.exports = router;

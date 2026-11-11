const express = require('express');
const router = express.Router();
const ministreController = require('../controllers/ministreController');

const validateMinister = require('../middleware/validators/validateMinister');

router.get('/', ministreController.getAllMinisters);
router.get('/:id', ministreController.getMinisterById);
router.post('/', validateMinister, ministreController.addMinister);
router.put('/:id', validateMinister,ministreController.updateMinisterById);
router.delete('/:id', ministreController.deleteMinister);

module.exports = router;

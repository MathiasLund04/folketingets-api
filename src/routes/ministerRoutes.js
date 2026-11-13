const express = require('express');
const router = express.Router();
const ministreController = require('../controllers/ministreController');

const validateMinister = require('../middleware/validators/validateMinister');
const validateMinisterId = require('../middleware/validators/validateMinisterId');

router.get('/', ministreController.getAllMinisters);
router.get('/:id', validateMinisterId, ministreController.getMinisterById);
router.post('/', validateMinister, ministreController.addMinister);
router.put('/:id', validateMinisterId, validateMinister, ministreController.updateMinisterById);
router.delete('/:id', validateMinisterId, ministreController.deleteMinister);

module.exports = router;

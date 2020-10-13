var express = require('express');
var router = express.Router();
var classesCtrl = require('../../controllers/api/classes');

/* GET /api/classes */
router.get('/', classesCtrl.index);
router.get('/:id', classesCtrl.show);
router.post('/', classesCtrl.create);
router.delete('/:id', classesCtrl.delete);
router.put('/:id', classesCtrl.update);

module.exports = router;
const express = require('express');
const router = express.Router();
const empController = require('../controllers/employee.controller');

// primera version
// router.get('/', function(req, res){
//     //res.send('Hello');
//     res.json({
//         status: 'API Works'
//     });
// });

router.get('/', empController.getEmployees);
router.post('/', empController.createEmployee);
router.get('/:id', empController.getEmployee);
router.put('/:id', empController.editEmployee);
router.delete('/:id', empController.deleteEmployee);

module.exports = router;
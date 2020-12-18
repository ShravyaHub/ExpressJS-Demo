const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/employeeController');
console.log("Router running");
const app = express();

router.post('/employee/addEmployee', EmployeeController.createEmployee);
router.delete('/employee/deleteEmployee/:id', EmployeeController.delete);
router.put('/employee/updateEmployee/:id', EmployeeController.update);
router.get('/employee/readEmployee', EmployeeController.read);

module.exports = router;
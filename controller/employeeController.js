const employeeService = require('../services/EmployeeService');
const response = {

}
class EmployeeController {
    createEmployee = (req, res) => {
        employeeService.createEmployeeService(req.body).then(data => {
            response.success = true;
            response.message = data.message;
            response.data = data.data;
            return res.status(200).send(response)
        }).catch(error => {
            response.success = false;
            response.message = error.message;
            response.data = error.error;
            return res.status(400).send(response)
        })
        
    }
    delete = (req, res) => {
        employeeService.deleteEmployee(req.params).then(data => {
            response.success = true;
            response.message = data.message;
            response.data = data.data;
            return res.status(200).send(response)
        }).catch(error => {
            response.success = false;
            response.message = error.message;
            response.data = error.error;
            return res.status(400).send(response)
        });
    }
    update = (req, res) => {
        employeeService.updateEmployee(req.params).then(data => {
            response.success = true;
            response.message = data.message;
            response.data = data.data;
            return res.status(200).send(response)
        }).catch(error => {
            response.success = false;
            response.message = error.message;
            response.data = error.error;
            return res.status(400).send(response)
        });
    }
    read = (req, res) => {
        employeeService.readEmployee(req.params).then(data => {
            response.success = true;
            response.message = data.message;
            response.data = data.data;
            return res.status(200).send(response)
        }).catch(error => {
            response.success = false;
            response.message = error.message;
            response.data = error.error;
            return res.status(400).send(response)
        });
    }
}

module.exports = new EmployeeController();
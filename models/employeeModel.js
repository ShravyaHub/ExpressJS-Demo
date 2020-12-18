const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
      },
    lastName:{
        type: String,
        required: true
      },
    email:{
        type: String,
        required: true,
        unique: true
      }
},
{
    timestamps : true
});

const employee = mongoose.model('employee', EmployeeSchema);

class EmployeeModel {
    create(req) {
        return new Promise((resolve, reject) => {
            employee.create(req).then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        }) 
    }
    delete(req) {
        return new Promise((resolve, reject) => {
            employee.findByIdAndDelete(req).then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        }) 
    }
    update(req, data) {
        return new Promise((resolve, reject) => {
            employee.findByIdAndUpdate(req.id, data, {new: true}).then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        }) 
    }
    read() {
        return new Promise((resolve, reject) => {
            employee.find().then(data => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        }) 
    }
}

module.exports = new EmployeeModel();
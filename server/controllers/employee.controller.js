
const Employee = require('../models/employee');
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {

    // res.json({
    //     status: 'Employees goes here'
    // });

    // buscar todos los empleados
    // a traves de callback 
    // Employee.find((employees, error) => {

    // }); 

    // a traves de promesas 
    //Employee.find().then().catch(); 

    // a traves de async y await
    const employees = await Employee.find();

    res.json({ employees });
}

employeeCtrl.createEmployee = async (req, res) => {
    // res.json({
    //     status: 'Employees goes here'
    // });

    const employee = new Employee(req.body);
    await employee.save();
    
    res.json({
        status: 'Employee Saved',
        employee
    });
}

employeeCtrl.getEmployee = async (req, res) => {

    const employee = await Employee.findById(req.params.id);

    res.json({
        status: 'getEmployee goes here',
        employee
    });
}

employeeCtrl.editEmployee = async (req, res) =>  {
    
    //const employee = await Employee.findByIdAndUpdate(req.params.id);
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    // {new: true} indica que sino lo encuentra lo cree
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});

    res.json({
        status: 'editEmployee goes here',
        employee
    });
}

employeeCtrl.deleteEmployee = async (req, res) => {

    await Employee.findByIdAndDelete(req.params.id);

    res.json({
        status: 'Employee Deleted'
    });
}


module.exports = employeeCtrl;
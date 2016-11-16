package ru.avtosalon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.avtosalon.entity.Employee;
import ru.avtosalon.entity.Supplier;
import ru.avtosalon.service.EmployeeService;
import ru.avtosalon.service.SupplierService;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping(value = "employee")
public class EmployeeController {


    @Autowired EmployeeService employeeService;

    @RequestMapping(value = "get", method = RequestMethod.GET, produces = "application/json")
    public List<Employee> getEmployeers() throws SQLException {
        return employeeService.getEmployee();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST, consumes = "application/json")
    public void addCar(@RequestBody Employee employee) throws SQLException {
        employeeService.addEmployee(employee);
    }

    @RequestMapping(value = "delete", method = RequestMethod.POST, consumes = "application/json")
    public int deleteCar(@RequestBody Employee employee) throws SQLException {
        return employeeService.deleteSupplier(employee);
    }


}

package ru.avtosalon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.avtosalon.entity.Supplier;
import ru.avtosalon.service.SupplierService;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping(value = "supplier")
public class SupplierController {

    @Autowired SupplierService supplierService;

    @RequestMapping(value = "get", method = RequestMethod.GET, produces = "application/json")
    public List<Supplier> getSuppliers() throws SQLException {
        return supplierService.getSuppliers();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST, consumes = "application/json")
    public void addCar(@RequestBody Supplier supplier) throws SQLException {
        supplierService.addSupplier(supplier);
    }

    @RequestMapping(value = "delete", method = RequestMethod.POST, consumes = "application/json")
    public int deleteCar(@RequestBody Supplier supplier) throws SQLException {
        return supplierService.deleteSupplier(supplier);
    }
}

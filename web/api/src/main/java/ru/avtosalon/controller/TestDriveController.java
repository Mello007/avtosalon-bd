package ru.avtosalon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.avtosalon.entity.Supplier;
import ru.avtosalon.entity.TestDrive;
import ru.avtosalon.service.SupplierService;
import ru.avtosalon.service.TestDriveService;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping(value = "test")
public class TestDriveController {
    @Autowired
    TestDriveService testDriveService;

    @RequestMapping(value = "get", method = RequestMethod.GET, produces = "application/json")
    public List<TestDrive> getTestDrive() throws SQLException {
        return testDriveService.getTestDrive();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST, consumes = "application/json")
    public void addTestDrive(@RequestBody TestDrive testDrive) throws SQLException {
        testDriveService.addTestDrive(testDrive);
    }

    @RequestMapping(value = "delete", method = RequestMethod.POST, consumes = "application/json")
    public int deleteTestDrive(@RequestBody TestDrive testDrive) throws SQLException {
        return testDriveService.deleteTestDrive(testDrive);
    }
}

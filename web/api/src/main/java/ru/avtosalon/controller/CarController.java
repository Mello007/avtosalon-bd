package ru.avtosalon.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.avtosalon.entity.Automobile;
import ru.avtosalon.entity.DTO.AutomobileDTO;
import ru.avtosalon.service.CarService;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping(value = "car")
public class CarController {

    @Autowired CarService carService;

    @RequestMapping(value = "get", method = RequestMethod.GET, produces = "application/json")
    public List<Automobile> getCar() throws SQLException {
       return carService.getCar();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST, consumes = "application/json")
    public void addCar(@RequestBody Automobile automobile) throws SQLException {
        carService.addCar(automobile);
    }

    @RequestMapping(value = "delete", method = RequestMethod.POST, consumes = "application/json")
    public int deleteCar(@RequestBody AutomobileDTO automobile) throws SQLException {
        return carService.deleteCar(automobile);
    }


}

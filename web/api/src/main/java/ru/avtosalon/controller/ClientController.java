package ru.avtosalon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.avtosalon.entity.Client;
import ru.avtosalon.entity.Supplier;
import ru.avtosalon.service.ClientService;
import ru.avtosalon.service.SupplierService;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping(value = "client")
public class ClientController {
    @Autowired ClientService clientService;

    @RequestMapping(value = "get", method = RequestMethod.GET, produces = "application/json")
    public List<Client> getClients() throws SQLException {
        return clientService.getClients();
    }

    @RequestMapping(value = "add", method = RequestMethod.POST, consumes = "application/json")
    public void addClient(@RequestBody Client client) throws SQLException {
        clientService.addClient(client);
    }

    @RequestMapping(value = "delete", method = RequestMethod.POST, consumes = "application/json")
    public int deleteCar(@RequestBody Client client) throws SQLException {
        return clientService.deleteClient(client);
    }
}

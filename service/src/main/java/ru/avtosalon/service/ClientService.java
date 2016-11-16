package ru.avtosalon.service;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.avtosalon.entity.Client;
import ru.avtosalon.entity.Supplier;

import java.sql.SQLException;
import java.util.List;

@Service
public class ClientService {
    @Autowired SessionFactory sessionFactory;

    @Transactional
    public List<Client> getClients() throws SQLException {
        Query query = sessionFactory.openSession().createQuery("from Client");
        List<Client> clients  = query.list();
        return clients;
    }

    @Transactional
    public void addClient(Client client) throws SQLException {
        sessionFactory.getCurrentSession().save(client);
    }

    @Transactional
    public int deleteClient(Client client) throws SQLException {
        Query query1 = sessionFactory.getCurrentSession().createQuery("delete from Client WHERE name = :name");
        query1.setParameter("name", client.getName());
        return query1.executeUpdate();
    }
}

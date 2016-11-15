package ru.avtosalon.service;

import org.hibernate.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.avtosalon.entity.Automobile;
import ru.avtosalon.entity.DTO.AutomobileDTO;

import javax.persistence.EntityManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Service
public class CarService {

    @Autowired SessionFactory sessionFactory;



    @Transactional
    public List<Automobile> getCar() throws SQLException {
        Query query = sessionFactory.openSession().createQuery("from Automobile");
        List<Automobile> cars  = query.list();
        return cars;
    }

    @Transactional
    public void addCar(Automobile automobile) throws SQLException {
        sessionFactory.getCurrentSession().save(automobile);
    }

    @Transactional
    public int deleteCar(AutomobileDTO automobile) throws SQLException {
        Query query1 = sessionFactory.getCurrentSession().createQuery("delete from Automobile WHERE mark = :mark AND price = :price");
        query1.setParameter("mark", automobile.getMarkForDelete());
        query1.setParameter("price", automobile.getPriceForDelete());
        return query1.executeUpdate();
    }

}

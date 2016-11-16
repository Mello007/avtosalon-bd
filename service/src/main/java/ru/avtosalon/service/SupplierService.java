package ru.avtosalon.service;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.avtosalon.entity.Supplier;
import java.sql.SQLException;
import java.util.List;

@Service
public class SupplierService {

    @Autowired
    SessionFactory sessionFactory;

    @Transactional
    public List<Supplier> getSuppliers() throws SQLException {
        Query query = sessionFactory.openSession().createQuery("from Supplier");
        List<Supplier> suppliers  = query.list();
        return suppliers;
    }

    @Transactional
    public void addSupplier(Supplier supplier) throws SQLException {
        sessionFactory.getCurrentSession().save(supplier);
    }

    @Transactional
    public int deleteSupplier(Supplier supplier) throws SQLException {
        Query query1 = sessionFactory.getCurrentSession().createQuery("delete from Supplier WHERE nameOfOrganization = :nameOfOrganization AND contactNumber = :contactNumber");
        query1.setParameter("nameOfOrganization", supplier.getNameOfOrganization());
        query1.setParameter("contactNumber", supplier.getContactNumber());
        return query1.executeUpdate();
    }
}

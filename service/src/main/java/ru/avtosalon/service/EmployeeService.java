package ru.avtosalon.service;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.avtosalon.entity.Employee;
import ru.avtosalon.entity.Supplier;

import java.sql.SQLException;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    SessionFactory sessionFactory;

    @Transactional
    public List<Employee> getEmployee() throws SQLException {
        Query query = sessionFactory.openSession().createQuery("from Employee");
        List<Employee> employees  = query.list();
        return employees;
    }

    @Transactional
    public void addEmployee(Employee employee) throws SQLException {
        sessionFactory.getCurrentSession().save(employee);
    }

    @Transactional
    public int deleteSupplier(Employee employee) throws SQLException {
        Query query1 = sessionFactory.getCurrentSession().createQuery("delete from Employee WHERE name = :name");
        query1.setParameter("name", employee.getName());
        return query1.executeUpdate();
    }
}

package ru.avtosalon.service;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.avtosalon.entity.Supplier;
import ru.avtosalon.entity.TestDrive;

import java.sql.SQLException;
import java.util.List;

@Service
public class TestDriveService {
    @Autowired
    SessionFactory sessionFactory;

    @Transactional
    public List<TestDrive> getTestDrive() throws SQLException {
        Query query = sessionFactory.openSession().createQuery("from TestDrive");
        List<TestDrive> testDrives  = query.list();
        return testDrives;
    }

    @Transactional
    public void addTestDrive(TestDrive testDrive) throws SQLException {
        sessionFactory.getCurrentSession().save(testDrive);
    }

    @Transactional
    public int deleteTestDrive(TestDrive testDrive) throws SQLException {
        Query query1 = sessionFactory.getCurrentSession().createQuery("delete from TestDrive WHERE name = :name");
        query1.setParameter("name", testDrive.getName());
        return query1.executeUpdate();
    }
}

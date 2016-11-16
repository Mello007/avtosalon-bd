package ru.avtosalon.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@Entity @Table(name = "Employee")
public class Employee extends BaseEntity {
    private String name;
    private String salary;
    private String dateOfBirthday;
    private String dateOfreception;

}

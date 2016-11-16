package ru.avtosalon.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "TestDrive")
public class TestDrive  extends BaseEntity{
    private String name;
    private String nameOfAutomobile;
    private String date;

}

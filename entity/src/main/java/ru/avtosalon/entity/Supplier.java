package ru.avtosalon.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Getter @Setter
@Entity @Table(name = "Supplier")
public class Supplier extends BaseEntity {
    private String nameOfOrganization;
    private String contactNumber;
}

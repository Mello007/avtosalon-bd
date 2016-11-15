package ru.avtosalon.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Getter @Setter
@Entity @Table(name = "Automobile")
public class Automobile extends BaseEntity {
    private String mark;
    private String color;
    private String price;
    private String dateOfSale;
    private String dateOfSupply;
}

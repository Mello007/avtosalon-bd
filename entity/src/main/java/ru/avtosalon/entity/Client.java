package ru.avtosalon.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@Entity @Table(name = "Client")
public class Client extends BaseEntity {
    private String name;
    private String numberPhone;
    private String address;
}

package com.pavcoding.dev.bankmanager.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class Operation {

    @Id
    @GeneratedValue
    private Long id;
    private  Date date;
    private String description;
    private double amount;

    public Operation(Date date, String description, double amount) {
        this.date = date;
        this.description = description;
        this.amount = amount;
    }
 }

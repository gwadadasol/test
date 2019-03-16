package com.pavcoding.dev.bankmanager.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "operations")
public class Operation {

    @Id
    @GeneratedValue
    private Long id;
    private  Date date;
    private String description;
    private double amount;
    private Long accountId;

    public Operation(Date date, String description, double amount, Long accountId) {
        this.date = date;
        this.description = description;
        this.amount = amount;
        this.accountId = accountId;
    }
 }

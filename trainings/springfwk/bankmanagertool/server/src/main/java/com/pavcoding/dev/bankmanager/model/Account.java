package com.pavcoding.dev.bankmanager.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Account {

    @Id
    @GeneratedValue
    private Long id;
    private String accountNumber;
    private Date creationDate;
    private float initialBalance;
    private float currentBalance;

    @OneToMany( targetEntity=Operation.class) // , fetch= FetchType.EAGER
    private List<Operation> operations = new ArrayList<>();;

    public Account(String accountNumber, Date creationDate, float initialBalance) {
        this.accountNumber = accountNumber;
        this.creationDate = creationDate;
        this.initialBalance = initialBalance;
        this.currentBalance = initialBalance;
    }

    public boolean addOperation(Operation operation){
        return operations.add(operation);
    }
}

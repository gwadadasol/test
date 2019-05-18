package com.pavcoding.dev.bankmanager.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "account")
public class Account {

    @Id
    @GeneratedValue
    @Column(name = "accountId")
    private Long id;
    private String accountNumber;
    private Date creationDate;
    private double initialBalance;


    private double currentBalance;
    private Date startPeriod; // Date of the first operation
    private Date endPeriod; // Date of the last operation

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "accountId", referencedColumnName = "")
    private List<Operation> operations = new ArrayList<>();
    ;

    public Account(String accountNumber, Date creationDate, float initialBalance) {
        this.accountNumber = accountNumber;
        this.creationDate = creationDate;
        this.initialBalance = initialBalance;
        this.currentBalance = initialBalance;
        this.startPeriod = creationDate;
        this.endPeriod = creationDate;
    }

    public boolean addOperation(Operation operation) {

        // TODO: Raise exception when the operation date is before the account creation date

//        if (operations.size() == 0) {
//            // first operation to be added
//            startPeriod = operation.getDate();
//            endPeriod = operation.getDate();
//        } else {
//            if (operation.getDate().compareTo(startPeriod) == -1) {
//                startPeriod = operation.getDate();
//            }
//            if (operation.getDate().compareTo(endPeriod) == 1) {
//                endPeriod = operation.getDate();
//            }
//        }
//
//        currentBalance += operation.getAmount();

        boolean result = operations.add(operation);

        updateVariableValues();

        return result;
    }

    protected void updateVariableValues (){

        Operation operationFirst = operations
                .stream()
                .min(Comparator.comparing(Operation::getDate))
                .orElseThrow(NoSuchElementException::new);

        Operation operationLast = operations
                .stream()
                .max(Comparator.comparing(Operation::getDate))
                .orElseThrow(NoSuchElementException::new);

        double totalOperations = operations
                .stream()
                .mapToDouble(x -> x.getAmount())
                .sum();

        currentBalance = initialBalance + totalOperations;
        startPeriod = operationFirst.getDate();
        endPeriod = operationLast.getDate();
    }

    public void setInitialBalance(double initialBalance){
        this.initialBalance = initialBalance;

        updateVariableValues();
    }
}

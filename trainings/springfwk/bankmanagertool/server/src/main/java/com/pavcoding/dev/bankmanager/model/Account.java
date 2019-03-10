package com.pavcoding.dev.bankmanager.model;

import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import java.util.Date;
import java.util.List;

@Entity
public class Account {
    String accountNumber;
    Date creationDate;
    float initialBalance;
    float currentBalance;
    List<Operation> operationList;

    public Account(String accountNumber, Date creationDate, float initialBalance) {
        this.accountNumber = accountNumber;
        this.creationDate = creationDate;
        this.initialBalance = initialBalance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public float getInitialBalance() {
        return initialBalance;
    }

    public void setInitialBalance(float initialBalance) {
        this.initialBalance = initialBalance;
    }

    public float getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(float currentBalance) {
        this.currentBalance = currentBalance;
    }

    public List<Operation> getOperationList() {
        return operationList;
    }

    public void setOperationList(List<Operation> operationList) {
        this.operationList = operationList;
    }

    public boolean addOperation(Operation operation){
        return operationList.add(operation);
    }
}

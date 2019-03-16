package com.pavcoding.dev.bankmanager.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
    private float initialBalance;
    private float currentBalance;
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

        if (operations.size() == 0) {
            // first operation to be added
            startPeriod = operation.getDate();
            endPeriod = operation.getDate();
        } else {
            if (operation.getDate().compareTo(startPeriod) == -1) {
                startPeriod = operation.getDate();
            }
            if (operation.getDate().compareTo(endPeriod) == 1) {
                endPeriod = operation.getDate();
            }
        }

        currentBalance += operation.getAmount();

        return operations.add(operation);
    }
}

package com.pavcoding.dev.bankmanager.repository;

import com.pavcoding.dev.bankmanager.model.Account;
import com.pavcoding.dev.bankmanager.model.Operation;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class HibernateAccountRepositoryImpl implements AccountRepository {
    @Override
    public List<Account> findAll(){
        List<Account> accounts = new ArrayList<>();

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Date creationDate = null;
        try {
            creationDate = sdf.parse("21/07/2018");
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Account account = new Account("MyAccount Number", creationDate, 0);

        Operation operation;

        try {
            operation = new Operation (1, sdf.parse("21/01/2019"), "Retrait", -2500);
            account.addOperation(operation);

            operation = new Operation (2, sdf.parse("22/01/2019"), "Loyer", -4300);
            account.addOperation(operation);

            operation = new Operation (3, sdf.parse("23/01/2019"), "Ecole", -300);
            account.addOperation(operation);

            operation = new Operation (4, sdf.parse("24/01/2019"), "Taste", -200);
            account.addOperation(operation);

            operation = new Operation (5, sdf.parse("25/01/2019"), "AEON", -500);
            account.addOperation(operation);

            operation = new Operation (6, sdf.parse("26/01/2019"), "Chaussures", -540);
            account.addOperation(operation);

            operation = new Operation (7, sdf.parse("27/01/2019"), "Salaire", 5000);
            account.addOperation(operation);

        } catch (ParseException e) {
            e.printStackTrace();
        }

        accounts.add(account);

        return accounts;
    }
}

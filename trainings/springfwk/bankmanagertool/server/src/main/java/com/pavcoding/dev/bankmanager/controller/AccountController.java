package com.pavcoding.dev.bankmanager.controller;

import com.pavcoding.dev.bankmanager.model.Account;
import com.pavcoding.dev.bankmanager.model.Operation;
import com.pavcoding.dev.bankmanager.repository.AccountRepository;
import com.pavcoding.dev.bankmanager.repository.FileLoader;
import com.pavcoding.dev.bankmanager.service.FileStorageService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Path;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;

@RestController
public class AccountController {
    private AccountRepository repository;
    boolean initialized = false;
    boolean filedata = true;

    @Autowired
    private FileStorageService fileStorageService;


    public AccountController(AccountRepository repository) {
        this.repository = repository;
    }

    void initData(){

        if (initialized){
            return;
        }

        if (!filedata) {

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
                operation = new Operation(sdf.parse("21/01/2019"), "Retrait", -2500, account.getId());
                account.addOperation(operation);

                operation = new Operation(sdf.parse("22/01/2019"), "Loyer", -4300, account.getId());
                account.addOperation(operation);

                operation = new Operation(sdf.parse("23/01/2019"), "Ecole", -300, account.getId());
                account.addOperation(operation);

            } catch (ParseException e) {
                e.printStackTrace();
            }

            LoggerFactory.getLogger("BankManager").info("Preloading " + repository.save(account));


            account = new Account("MyAccount Number 2", creationDate, 1234);

            try {

                operation = new Operation(sdf.parse("24/01/2019"), "Taste", -200, account.getId());
                account.addOperation(operation);

                operation = new Operation(sdf.parse("25/01/2019"), "AEON", -500, account.getId());
                account.addOperation(operation);


            } catch (ParseException e) {
                e.printStackTrace();
            }

            LoggerFactory.getLogger("BankManager").info("Preloading " + repository.save(account));


            account = new Account("MyAccount Number 3", creationDate, -777);

            try {
                operation = new Operation(sdf.parse("26/01/2019"), "Chaussures", -540, account.getId());
                account.addOperation(operation);

                operation = new Operation(sdf.parse("27/01/2019"), "Salaire", 5000, account.getId());
                account.addOperation(operation);

            } catch (ParseException e) {
                e.printStackTrace();
            }

            LoggerFactory.getLogger("BankManager").info("Preloading " + repository.save(account));
        }else{

            Path path = fileStorageService.fileLocation("CHK_787_01_01_2019.csv");
            Account account = FileLoader.loadExtractFromCitiFile(path);


            LoggerFactory.getLogger("BankManager").info("Preloading " + repository.save(account));

        }


        initialized = true;


    }

    @GetMapping("/accounts")
    @CrossOrigin(origins = {"http://localhost:3000",
            "http://localhost:5000"})
    Collection<Account> all() {
        initData();
        return repository.findAll();
    }

    @GetMapping("/accounts/{id}")
    @CrossOrigin(origins = {"http://localhost:3000",
            "http://localhost:5000"})
    Account one(@PathVariable Long id) {
        initData();
        return repository.findById(id).orElseThrow(() -> new AccountNotFoundException(id));
    }

    @GetMapping("/accounts/{id}/operations")
    @CrossOrigin(origins = {"http://localhost:3000",
            "http://localhost:5000"})
    Collection<Operation> operations(@PathVariable Long id) {

        initData();

        Account account = repository.findById(id).orElseThrow(() -> new AccountNotFoundException(id));

        return account.getOperations();
    }
}
package com.pavcoding.dev.bankmanager.controller;

import com.pavcoding.dev.bankmanager.exception.AccountNotFoundException;
import com.pavcoding.dev.bankmanager.model.Account;
import com.pavcoding.dev.bankmanager.model.Operation;
import com.pavcoding.dev.bankmanager.repository.AccountRepository;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Date;

@RestController
public class AccountController {
    private AccountRepository repository;

    public AccountController(AccountRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/accounts")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    Collection<Account> all() {
        return repository.findAll();
    }

    @GetMapping("/accounts/{id}")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    Account one(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new AccountNotFoundException(id));
    }

    @GetMapping("/accounts/{id}/operations")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    Collection<Operation> operations(@PathVariable Long id) {

        Account account = repository.findById(id).orElseThrow(() -> new AccountNotFoundException(id));

        return account.getOperations();
    }

    @PostMapping("/updateAccount")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public void  updateAccount(
            @RequestParam("accountId") String accountId,
            @RequestParam("accountNumber") String accountNumber,
            @RequestParam("creationDate") String creationDate,
            @RequestParam("initialBalance") float initialBalance,
            @RequestParam("currentBalance") float currentBalance,
            @RequestParam("startPeriod") String startPeriod,
            @RequestParam("endPeriod") String endPeriod
    ){

        System.out.println("accountId: " + accountId);
        System.out.println("accountNumber: " + accountNumber);
        System.out.println("creationDate: " + creationDate);
        System.out.println("initialBalance: " + initialBalance);
        System.out.println("currentBalance: " + currentBalance);
        System.out.println("startPeriod: " + startPeriod);
        System.out.println("endPeriod: " + endPeriod);


        String tmp = "191";

        Long id = Long.parseLong(accountId);
        Account account = repository.findById(id).orElseThrow(() -> new AccountNotFoundException(id));
        account.setInitialBalance(initialBalance);

        System.out.println("account -> " + account.toString());

        repository.save(account);

//        return ResponseEntity.ok()
//                .contentType(MediaType.TEXT_PLAIN)
//                .header(HttpHeaders.CONTENT_DISPOSITION,"ACCOUNT NUMBER")
//                .body("test response server");
    }
}
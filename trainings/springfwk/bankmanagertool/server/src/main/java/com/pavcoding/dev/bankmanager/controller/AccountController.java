package com.pavcoding.dev.bankmanager.controller;

import com.pavcoding.dev.bankmanager.exception.AccountNotFoundException;
import com.pavcoding.dev.bankmanager.model.Account;
import com.pavcoding.dev.bankmanager.model.Operation;
import com.pavcoding.dev.bankmanager.repository.AccountRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

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
}
package com.pavcoding.dev.bankmanager.controller;

import com.pavcoding.dev.bankmanager.model.Account;
import com.pavcoding.dev.bankmanager.repository.AccountRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class AccountController {
    private AccountRepository repository;

    public AccountController(AccountRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    Collection<Account> list(){return repository.findAll();}

}

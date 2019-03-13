package com.pavcoding.dev.bankmanager.controller;

import com.pavcoding.dev.bankmanager.model.Account;
import com.pavcoding.dev.bankmanager.model.Operation;
import com.pavcoding.dev.bankmanager.repository.AccountRepository;
import com.pavcoding.dev.bankmanager.repository.OperationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Collection;

public class OperationController {
    private OperationRepository repository;

    public OperationController(OperationRepository repository) {
        this.repository = repository;
    }

//
//    @GetMapping("/operation/{accountId}")
//    Collection<Operation> one(@PathVariable Long id){
//        return repository.findById(id).orElseThrow(() -> new AccountNotFoundException(id));
//    }
//}

}

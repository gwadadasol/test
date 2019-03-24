package com.pavcoding.dev.bankmanager.controller;

import com.pavcoding.dev.bankmanager.repository.OperationRepository;

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

package com.pavcoding.dev.bankmanager.exception;

public class AccountNotFoundException extends RuntimeException {

    public AccountNotFoundException(Long id) {
        super("Could not find Account " + id);
    }
}

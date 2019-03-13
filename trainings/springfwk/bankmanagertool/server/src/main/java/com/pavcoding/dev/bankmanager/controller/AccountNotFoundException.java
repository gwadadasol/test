package com.pavcoding.dev.bankmanager.controller;

public class AccountNotFoundException extends RuntimeException {

    public AccountNotFoundException(Long id) {
        super("Could not find Account " + id);
    }
}

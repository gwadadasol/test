package com.pavcoding.dev.bankmanager.service;

import com.pavcoding.dev.bankmanager.model.Account;

import java.util.List;

public interface AccountService {
    List<Account> findAll();
}

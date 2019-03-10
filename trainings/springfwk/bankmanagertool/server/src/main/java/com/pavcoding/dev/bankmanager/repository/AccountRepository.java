package com.pavcoding.dev.bankmanager.repository;

import com.pavcoding.dev.bankmanager.model.Account;

import java.util.List;

public interface AccountRepository {
    List<Account> findAll();
}

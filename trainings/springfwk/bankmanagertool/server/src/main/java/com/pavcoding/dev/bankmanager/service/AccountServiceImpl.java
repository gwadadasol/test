package com.pavcoding.dev.bankmanager.service;

import com.pavcoding.dev.bankmanager.model.Account;
import com.pavcoding.dev.bankmanager.repository.AccountRepository;
import com.pavcoding.dev.bankmanager.repository.HibernateAccountRepositoryImpl;

import java.util.List;

public class AccountServiceImpl {
    AccountRepository accountRepository = new HibernateAccountRepositoryImpl();

    public List<Account> 
}

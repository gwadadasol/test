package com.pavcoding.dev.bankmanager.repository;

import com.pavcoding.dev.bankmanager.model.Account;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface AccountRepository {
    List<Account> findAll();
}

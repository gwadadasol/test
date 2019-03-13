package com.pavcoding.dev.bankmanager.repository;

import com.pavcoding.dev.bankmanager.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}

package com.pavcoding.dev.bankmanager.repository;

import com.pavcoding.dev.bankmanager.model.Operation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OperationRepository extends JpaRepository<Operation, Long> {
}

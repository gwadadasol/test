package com.pavcoding.dev.bankmanager.repository;

import com.pavcoding.dev.bankmanager.model.DBFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DBFileRepository extends JpaRepository<DBFile, String> {
}

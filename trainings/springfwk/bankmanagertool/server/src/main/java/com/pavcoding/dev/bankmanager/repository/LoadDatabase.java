package com.pavcoding.dev.bankmanager.repository;

import com.pavcoding.dev.bankmanager.model.Account;
import com.pavcoding.dev.bankmanager.model.Operation;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Configuration
@Slf4j
@Component
public class LoadDatabase {

    @Bean
    CommandLineRunner initDatabase(AccountRepository repository) {

        return args -> {

            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
            Date creationDate = null;
            try {
                creationDate = sdf.parse("21/07/2018");
            } catch (ParseException e) {
                e.printStackTrace();
            }

            Account account = new Account("MyAccount Number", creationDate, 0);
            LoggerFactory.getLogger("BankManager").info("Preloading " + repository.save(account));


            Operation operation;

            try {
                operation = new Operation(sdf.parse("21/01/2019"), "Retrait", -2500);
                account.addOperation(operation);

                operation = new Operation(sdf.parse("22/01/2019"), "Loyer", -4300);
                account.addOperation(operation);

                operation = new Operation(sdf.parse("23/01/2019"), "Ecole", -300);
                account.addOperation(operation);

                operation = new Operation(sdf.parse("24/01/2019"), "Taste", -200);
                account.addOperation(operation);

                operation = new Operation(sdf.parse("25/01/2019"), "AEON", -500);
                account.addOperation(operation);

                operation = new Operation(sdf.parse("26/01/2019"), "Chaussures", -540);
                account.addOperation(operation);

                operation = new Operation(sdf.parse("27/01/2019"), "Salaire", 5000);
                account.addOperation(operation);

            } catch (ParseException e) {
                e.printStackTrace();
            }
            LoggerFactory.getLogger("BankManager").info("Preloading " + repository.save(
                    new Account("MyAccount Number 2", creationDate, 1234)));

            LoggerFactory.getLogger("BankManager").info("Preloading " + repository.save(
                    new Account("MyAccount Number 3", creationDate, -777)));


        };
    }
}

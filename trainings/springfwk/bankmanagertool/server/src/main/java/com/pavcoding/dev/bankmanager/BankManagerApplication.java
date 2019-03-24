package com.pavcoding.dev.bankmanager;

import com.pavcoding.dev.bankmanager.property.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;


@SpringBootApplication
@EnableConfigurationProperties({
        FileStorageProperties.class
})
public class BankManagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(BankManagerApplication.class, args);
    }

}

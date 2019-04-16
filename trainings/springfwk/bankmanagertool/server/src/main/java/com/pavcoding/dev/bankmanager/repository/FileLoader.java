package com.pavcoding.dev.bankmanager.repository;

import com.pavcoding.dev.bankmanager.model.Account;
import com.pavcoding.dev.bankmanager.model.Operation;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Stream;

public class FileLoader {

    private static SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy");

    public static Account loadExtractFromCitiFile(Path file) {
        Account account = new Account("MyAccount Number", new Date(), 0);

        try (Stream<String> stream = Files.lines(file)) {


            // stream.forEach(System.out::println);
            stream.forEach(line -> {
                        List<String> values = new ArrayList<>();
                        char comma = ',';

                        int index = 0;

                        for (int i = 0; i < line.length(); i++) {
                            if (line.charAt(i) == comma) {
                                if ((line.charAt(i - 1) == '"') && (line.charAt(i + 1) == '"')) {
                                    values.add(line.substring(index, i));
                                    index = i + 1;
                                }
                            }
                        }

                        values.add(line.substring(index));
//                        values.toString();


                        values.forEach(value -> {
                            System.out.print(value + " -- ");
                        });
                        System.out.println("");
//                        values.get(0).trim()

                        values.forEach(value -> {
                                    System.out.print(StringUtils.strip(value, "\"") + " -- ");
                                }
                        );
                        System.out.println("");
                        System.out.println("");

                        Operation operation;


                        try {
                            Date newdate = sdf.parse(StringUtils.strip(values.get(0), "\""));
                            String description = StringUtils.strip(values.get(1), "\"");
                            double amount = Double.parseDouble(StringUtils.strip(values.get(2), "\""));
                            String accountName = StringUtils.strip(values.get(4), "\"");


                            operation = new Operation(newdate, description, amount, account.getId());
                            account.addOperation(operation);

                        } catch (ParseException e) {
                            e.printStackTrace();
                        }
                    }
            );

            account.getOperations().forEach(System.out::println);

        } catch (IOException e) {
            e.printStackTrace();
        }

        return account;
    }
}

package com.pavcoding.dev.bankmanager.model;

import java.util.Date;

public class Operation {
    int id;
    Date date;
    String description;
    double amount;

    public Operation(Date date, String description, double amount) {
        this.date = date;
        this.description = description;
        this.amount = amount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}

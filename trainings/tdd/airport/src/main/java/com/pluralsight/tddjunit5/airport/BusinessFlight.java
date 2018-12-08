package com.pluralsight.tddjunit5.airport;

public class BusinessFlight extends Flight {

    public BusinessFlight(String id) {
        super(id);
    }

    @Override
    public boolean addPassager(Passager passager) {
        if (passager.isVip()){
            return passagersList.add(passager);
        }
        return false;
    }

    @Override
    public boolean removePassager(Passager passager) {
        return false;
    }
}

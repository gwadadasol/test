package com.pluralsight.tddjunit5.airport;

public class BusinessFlight extends Flight {

    public BusinessFlight(String id, int mileage) {
        super(id, mileage);
    }

    public BusinessFlight(String id) {
        super(id, 0);
    }

    @Override
    public boolean addPassager(Passager passager) {
        if (passager.isVip()){
            return passagersSet.add(passager);
        }
        return false;
    }

    @Override
    public boolean removePassager(Passager passager) {
        return false;
    }
}

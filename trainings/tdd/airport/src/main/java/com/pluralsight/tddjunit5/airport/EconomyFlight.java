package com.pluralsight.tddjunit5.airport;

public class EconomyFlight extends Flight {

    public EconomyFlight(String id, int mileage) {
        super(id, mileage);
    }
    public EconomyFlight(String id) {
        super(id, 0);
    }

    @Override
    public boolean addPassager(Passager passager) {
        return passagersSet.add(passager);
    }

    @Override
    public boolean removePassager(Passager passager) {
        if (passager.isVip()) {
            return false;
        }
        return passagersSet.remove(passager);
    }
}

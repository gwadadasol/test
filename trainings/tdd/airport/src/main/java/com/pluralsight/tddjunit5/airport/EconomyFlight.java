package com.pluralsight.tddjunit5.airport;

public class EconomyFlight extends Flight {

    public EconomyFlight(String id) {
        super(id);
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

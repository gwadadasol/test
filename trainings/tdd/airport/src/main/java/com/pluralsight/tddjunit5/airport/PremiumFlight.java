package com.pluralsight.tddjunit5.airport;

public class PremiumFlight extends Flight {
    public PremiumFlight(String s, int mileage) {
        super(s, mileage);
    }
    public PremiumFlight(String id) {
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
        if (passager.isVip()){
            return passagersSet.remove(passager);
        }
        return false;
    }
}

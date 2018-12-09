package com.pluralsight.tddjunit5.airport;

public class PremiumFlight extends Flight {
    public PremiumFlight(String s) {
        super(s);
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

package com.pluralsight.tddjunit5.airport.com.pluralsight.tddjunit5.Mileage;

import com.pluralsight.tddjunit5.airport.Flight;
import com.pluralsight.tddjunit5.airport.Passager;

import java.util.HashMap;
import java.util.Map;

public class Mileage {

    public static final int VIP_FACTOR = 10;
    public static final int USUAL_FACTOR = 20;

    private Map<Passager, Integer> passagersMileages;
    private Map<Passager, Integer> passagersBonusPoints;

    public Mileage() {
        passagersBonusPoints = new HashMap<>();
        passagersMileages = new HashMap<>();
    }

    public void addFlight(Flight flight) {
        for (Passager passager : flight.getPassagersSet()) {
            int newValue = (passagersMileages.containsKey(passager) ? passagersMileages.get(passager).intValue() : 0)
                    + flight.getDistance();
            passagersMileages.put(passager, new Integer(newValue));
            passagersBonusPoints.put(passager, new Integer(passager.isVip()?newValue/VIP_FACTOR:newValue/USUAL_FACTOR));
        }
    }

    public int getPoints(Passager passager) {
        if (passagersBonusPoints.containsKey(passager)){
            return passagersBonusPoints.get(passager);
        }
        return 0;
    }
}

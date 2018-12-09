package com.pluralsight.tddjunit5.airport.com.pluralsight.tddjunit5.Mileage;

import com.pluralsight.tddjunit5.airport.Flight;
import com.pluralsight.tddjunit5.airport.Passager;

import java.util.Map;

public class Mileage {

    public static final int VIP_FACTOR = 10;
    public static final int USUAL_FACTOR = 20;

    private Map<Passager, Integer> passagersMileages;
    private Map<Passager, Integer> passagersBonusPoints;


    public void addFlight(Flight ecoFlight) {
    }

    public int getPoints(Passager mike) {
        return 0;
    }
}

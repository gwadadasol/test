package com.pluralsight.tddjunit5.database;

import com.pluralsight.tddjunit5.airport.*;

import java.util.ArrayList;
import java.util.List;

public class DatabaseUtil {

    private DatabaseUtil() {

    }

    static List<Flight> buildFlightList(List<List<String>> queryData) {
        List<Flight> listOfFlight = new ArrayList<>();

        for (List<String> flightString : queryData) {
            Flight flight;
            if (flightString.get(1).equals("e")) {
                flight = new EconomyFlight(flightString.get(0), Integer.valueOf(flightString.get(4)));
            } else if (flightString.get(1).equals("b")) {
                flight = new BusinessFlight(flightString.get(0), Integer.valueOf(flightString.get(4)));
            } else  { //(flightString.get(1).equals("p")) {
                flight = new PremiumFlight(flightString.get(0), Integer.valueOf(flightString.get(4)));
            }

            Passager passager = new Passager(flightString.get(2), Boolean.valueOf(flightString.get(3)));
            flight.addPassager(passager);
            listOfFlight.add(flight);
        }
        return listOfFlight;
    }
}

package com.pluralsight.tddjunit5.airport.com.pluralsight.tddjunit5.mileage;

import com.pluralsight.tddjunit5.airport.*;
import com.pluralsight.tddjunit5.airport.com.pluralsight.tddjunit5.Mileage.Mileage;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MileageTest {

    @Test
    void testMileage(){
        Passager mike = new Passager("Mike", false);
        Passager john = new Passager("John", true);
        Flight ecoFlight = new EconomyFlight("e", 300);
        Flight busFlight = new BusinessFlight("b", 800);
        Flight preFlight = new PremiumFlight("p", 400);

        Mileage mileage = new Mileage();

        ecoFlight.addPassager(mike);
        ecoFlight.addPassager(john);

        busFlight.addPassager(mike);
        busFlight.addPassager(john);

        preFlight.addPassager(mike);
        preFlight.addPassager(john);

        mileage.addFlight ( ecoFlight);
        mileage.addFlight ( busFlight);
        mileage.addFlight ( preFlight);

        assertAll("test mileage",
                () -> assertEquals(75, mileage.getPoints(mike)),
        () -> assertEquals(150, mileage.getPoints(john)));

    }
}

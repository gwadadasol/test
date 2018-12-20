package com.pluralsight.tddjunit5.mileage;

import com.pluralsight.tddjunit5.airport.*;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MileageTest {

    @Test
    void testMileage(){
        Passager mike = new Passager("Mike", false);
        Passager john = new Passager("John", true);
        Passager john2 = new Passager("John", true);
        Passager phil = new Passager("Phil", true);


        Flight ecoFlight = new EconomyFlight("e", 300);
        Flight busFlight = new BusinessFlight("b", 800);
        Flight preFlight = new PremiumFlight("p", 400);

        Mileage mileage = new Mileage();

        ecoFlight.addPassager(mike);
        ecoFlight.addPassager(john);
        ecoFlight.addPassager(john2);

        busFlight.addPassager(mike);
        busFlight.addPassager(john);

        preFlight.addPassager(mike);
        preFlight.addPassager(john);

        mileage.addFlight ( ecoFlight);
        mileage.addFlight ( busFlight);
        mileage.addFlight ( preFlight);

        assertAll("test mileage",
                () -> assertEquals(15, mileage.getPoints(mike)),
                () -> assertEquals(0, mileage.getPoints(phil)),
                () -> assertEquals(150, mileage.getPoints(john2)));

    }
}

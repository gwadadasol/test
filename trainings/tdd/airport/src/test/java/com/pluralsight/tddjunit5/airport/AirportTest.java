package com.pluralsight.tddjunit5.airport;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AirportTest {

    @Test
    public void testAirport() {
        Flight economicFlight = new EconomyFlight("1");
        Flight businessFlight = new BusinessFlight("2");

        Passager john = new Passager("John", true);
        Passager mike = new Passager("Mike", false);

        assertEquals(true, economicFlight.addPassager(john));
        assertEquals(false, economicFlight.removePassager(john));
        assertEquals(true, businessFlight.addPassager(john));
        assertEquals(false, businessFlight.removePassager(john));

        assertEquals(true, economicFlight.addPassager(mike));
        assertEquals(true, economicFlight.removePassager(mike));
        assertEquals(false, businessFlight.addPassager(mike));
        assertEquals(false, businessFlight.removePassager(mike));
    }

    @Test
    public void testEconomyFlightUsualPassager (){
        Flight flight = new EconomyFlight("1");

        Passager mike = new Passager("Mike", false);

        assertEquals("1", flight.getId());

        assertEquals("Mike", mike.getName());
        assertEquals(false, mike.isVip());

        assertEquals(true, flight.addPassager(mike));
        assertEquals(1, flight.getPassagersList().size());
        assertEquals(true, flight.removePassager(mike));
    }
    @Test
    public void testBusinessFlightUsualPassager (){
        Flight flight = new BusinessFlight("1");

        Passager mike = new Passager("Mike", false);

        assertEquals("1", flight.getId());

        assertEquals("Mike", mike.getName());
        assertEquals(false, mike.isVip());

        assertEquals(false, flight.addPassager(mike));
        assertEquals(0, flight.getPassagersList().size());
        assertEquals(false, flight.removePassager(mike));
    }

    @Test
    public void testEconomyFlightVipPassager (){
        Flight flight = new EconomyFlight("1");

        Passager mike = new Passager("Mike", true);

        assertEquals("1", flight.getId());

        assertEquals("Mike", mike.getName());
        assertEquals(true, mike.isVip());

        assertEquals(true, flight.addPassager(mike));
        assertEquals(1, flight.getPassagersList().size());
        assertEquals(false, flight.removePassager(mike));
    }
    @Test
    public void testBusinessFlightVipPassager (){
        Flight flight = new BusinessFlight("1");

        Passager mike = new Passager("Mike", true);

        assertEquals("1", flight.getId());

        assertEquals("Mike", mike.getName());
        assertEquals(true, mike.isVip());

        assertEquals(true, flight.addPassager(mike));
        assertEquals(1, flight.getPassagersList().size());
        assertEquals(false, flight.removePassager(mike));
    }

}

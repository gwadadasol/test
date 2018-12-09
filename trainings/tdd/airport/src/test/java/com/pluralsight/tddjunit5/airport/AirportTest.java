package com.pluralsight.tddjunit5.airport;

import org.junit.jupiter.api.*;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

public class AirportTest {

    @DisplayName("Given there is an economy flight")
    @Nested
    class EconomyFlightTest {

        private Flight flight;
        private Passager mike;
        private Passager john;

        @BeforeEach
        void setUp() {
            flight = new EconomyFlight("1");
            mike = new Passager("Mike", false);
            john = new Passager("John", true);
        }

        @Nested
        @DisplayName("When we have a usual passager")
        class UsualPassager {

            @Test
            @DisplayName("Then you can add and remove him from the economy flight")
            public void testEconomyFlightUsualPassager() {
                assertAll("Verify all conditions for a usual passager and an economy flight",
                        () -> assertEquals("1", flight.getId()),
                        () -> assertTrue(flight.addPassager(mike)),
                        () -> assertEquals(1, flight.getPassagersSet().size()),
                        () -> assertTrue(flight.getPassagersSet().contains(mike)),
                        () -> assertTrue(flight.removePassager(mike)),
                        () -> assertEquals(0, flight.getPassagersSet().size())
                );
            }


            @DisplayName("Then you cannot add him in a economy flight more than once")
            @RepeatedTest(5)
            public void testEconomyFlightUsualPassagerAddedOnlyOnce(RepetitionInfo repetitionInfo) {

                for (int i = 0; i < repetitionInfo.getCurrentRepetition(); i++) {
                    flight.addPassager(mike);
                }

                assertAll("Verify a usual passager can be added in an economy flight only once",
                        () -> assertEquals(1, flight.getPassagersSet().size()),
                        () -> assertTrue(flight.getPassagersSet().contains(mike)),
                        () -> assertTrue(new ArrayList<>(flight.getPassagersSet()).get(0).getName().equals("Mike")));
            }
        }

        @Nested
        @DisplayName("When we have a VIP passager")
        class VIPPassager {

            @Test
            @DisplayName("Then you can add but cannot remove him from the economy flight")
            public void testEconomyFlightVipPassager() {
                assertAll("Verify all conditions for a VIP passager and an economy flight",
                        () -> assertEquals("1", flight.getId()),

                        () -> assertEquals("John", john.getName()),
                        () -> assertEquals(true, john.isVip()),

                        () -> assertEquals(true, flight.addPassager(john)),
                        () -> assertEquals(1, flight.getPassagersSet().size()),
                        () -> assertTrue(flight.getPassagersSet().contains(john)),
                        () -> assertEquals(false, flight.removePassager(john)),
                        () -> assertEquals(1, flight.getPassagersSet().size())
                );
            }


            @DisplayName("Then you cannot add him in a economy flight more than once")
            @RepeatedTest(5)
            public void testEconomyFlightVipPassagerAddedOnlyOnce(RepetitionInfo repetitionInfo) {

                for (int i = 0; i < repetitionInfo.getCurrentRepetition(); i++) {
                    flight.addPassager(john);
                }

                assertAll("Verify a usual passager can be added in an economy flight only once",
                        () -> assertEquals(1, flight.getPassagersSet().size()),
                        () -> assertTrue(flight.getPassagersSet().contains(john)),
                        () -> assertTrue(new ArrayList<>(flight.getPassagersSet()).get(0).getName().equals("John")));
            }

        }
    }


    @DisplayName("Given there is an business flight")
    @Nested
    class BusinessFlightTest {

        private Flight flight;
        private Passager mike;
        private Passager john;

        @BeforeEach
        void setUp() {
            flight = new BusinessFlight("2");
            mike = new Passager("Mike", false);
            john = new Passager("John", true);
        }

        @Nested
        @DisplayName("When we have a usual passager")
        class UsualPassager {

            @Test
            @DisplayName("Then you cannot add or remove him from the economy flight")
            public void testBusinessFlightUsualPassager() {
                assertAll("Verify all conditions for a Usual passager and an business flight",
                        () -> assertEquals("2", flight.getId()),

                        () -> assertEquals("Mike", mike.getName()),
                        () -> assertEquals(false, mike.isVip()),

                        () -> assertEquals(false, flight.addPassager(mike)),
                        () -> assertEquals(0, flight.getPassagersSet().size()),
                        () -> assertEquals(false, flight.removePassager(mike))
                );
            }
        }

        @Nested
        @DisplayName("When we have a VIP passager")
        class VIPPassager {

            @Test
            @DisplayName("Then you can add but cannot remove him from the business flight")
            public void testBusinessFlightVipPassager() {
                assertAll("Verify all conditions for a VIP passager and an business flight",
                        () -> assertEquals("2", flight.getId()),

                        () -> assertEquals("John", john.getName()),
                        () -> assertEquals(true, john.isVip()),

                        () -> assertEquals(true, flight.addPassager(john)),
                        () -> assertEquals(1, flight.getPassagersSet().size()),
                        () -> assertEquals(false, flight.removePassager(john))
                );
            }


            @DisplayName("Then you cannot add him in a economy flight more than once")
            @RepeatedTest(5)
            public void testBusinessFlightVipPassagerAddedOnlyOnce(RepetitionInfo repetitionInfo) {

                for (int i = 0; i < repetitionInfo.getCurrentRepetition(); i++) {
                    flight.addPassager(john);
                }

                assertAll("Verify a usual passager can be added in an economy flight only once",
                        () -> assertEquals(1, flight.getPassagersSet().size()),
                        () -> assertTrue(flight.getPassagersSet().contains(john)),
                        () -> assertTrue(new ArrayList<>(flight.getPassagersSet()).get(0).getName().equals("John")));
            }

        }

    }


    @DisplayName("Given there is an Premium flight")
    @Nested
    class PremiumFlightTest {

        private Flight flight;
        private Passager mike;
        private Passager john;

        @BeforeEach
        void setUp() {
            flight = new PremiumFlight("3");
            mike = new Passager("Mike", false);
            john = new Passager("John", true);
        }

        @Nested
        @DisplayName("When we have a usual passager")
        class UsualPassager {

            @Test
            @DisplayName("Then you cannot add but can remove him from the premium flight")
            public void testBusinessFlightUsualPassager() {
                assertAll("Verify all conditions for a Usual passager and an premium flight",
                        () -> assertEquals("3", flight.getId()),

                        () -> assertEquals("Mike", mike.getName()),
                        () -> assertEquals(false, mike.isVip()),

                        () -> assertEquals(false, flight.addPassager(mike)),
                        () -> assertEquals(0, flight.getPassagersSet().size()),
                        () -> assertEquals(false, flight.removePassager(mike))
                );
            }
        }

        @Nested
        @DisplayName("When we have a VIP passager")
        class VIPPassager {

            @Test
            @DisplayName("Then you can add and remove him from the business flight")
            public void testBusinessFlightVipPassager() {
                assertAll("Verify all conditions for a VIP passager and an premium flight",
                        () -> assertEquals("3", flight.getId()),

                        () -> assertEquals("John", john.getName()),
                        () -> assertEquals(true, john.isVip()),

                        () -> assertEquals(true, flight.addPassager(john)),
                        () -> assertEquals(1, flight.getPassagersSet().size()),
                        () -> assertEquals(true, flight.removePassager(john))
                );
            }


            @DisplayName("Then you cannot add him in a premium flight more than once")
            @RepeatedTest(5)
            public void testEconomyFlightVipPassagerAddedOnlyOnce(RepetitionInfo repetitionInfo) {

                for (int i = 0; i < repetitionInfo.getCurrentRepetition(); i++) {
                    flight.addPassager(john);
                }

                assertAll("Verify a vip passager can be added in an premium flight only once",
                        () -> assertEquals(1, flight.getPassagersSet().size()),
                        () -> assertTrue(flight.getPassagersSet().contains(john)),
                        () -> assertTrue(new ArrayList<>(flight.getPassagersSet()).get(0).getName().equals("John")));
            }


        }

    }
}

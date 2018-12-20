package com.pluralsight.tddjunit5.database;

import com.pluralsight.tddjunit5.airport.Flight;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.pluralsight.tddjunit5.database.DatabaseUtil.buildFlightList;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class StatisticsTest {

    @Spy
    private Database database;

    private List<List<String>> queriesData;
    private List<Flight> flightList;

    @BeforeEach
    void before(){
        queriesData = new ArrayList<>();

        List<String> row1 = Arrays.asList("1", "e", "Mike", "false", "349");
        List<String> row2 = Arrays.asList("2", "b", "John", "true", "278");
        List<String> row3 = Arrays.asList("3", "e", "Mike", "false", "319");
        List<String> row4 = Arrays.asList("4", "p", "John", "true", "817");
        List<String> row5 = Arrays.asList("5", "e", "Mike", "false", "623");
        List<String> row6 = Arrays.asList("6", "e", "John", "true", "978");

        queriesData.add(row1);
        queriesData.add(row2);
        queriesData.add(row3);
        queriesData.add(row4);
        queriesData.add(row5);
        queriesData.add(row6);

        flightList = buildFlightList(queriesData);
    }

    @Test
    void testQueryData(){
        when(database.getQueriedData()).thenReturn(queriesData);
        assertEquals(6,database.getQueriedData().size());
        assertEquals(6,flightList.size());
        assertEquals(560.0, database.averageDistance(flightList),1);
        assertEquals(978, database.maximumDistance(flightList),1);
        assertEquals(278, database.minimumDistance(flightList),1);

    }
}

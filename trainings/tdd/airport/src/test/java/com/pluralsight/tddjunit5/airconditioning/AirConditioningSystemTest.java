package com.pluralsight.tddjunit5.airconditioning;

import com.pluralsight.tddjunit5.MockitoExtension;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class AirConditioningSystemTest {

    @Mock
    Thermometer thermometer;

    @InjectMocks
    AirConditioningSystem airConditioningSystem;

    @Test
    void testAirConditioningOn (){

        when(thermometer.getTemperature()).thenReturn(25.0);
        airConditioningSystem.setTemperatureThreshold(24);
        airConditioningSystem.checkAirConditioningSystem();
        assertTrue(airConditioningSystem.isOpen());
        verify(thermometer, times(1)).getTemperature();

    }

    @Test
    void testAirConditioningOff (){

        when(thermometer.getTemperature()).thenReturn(25.0);
        airConditioningSystem.setTemperatureThreshold(26);
        airConditioningSystem.checkAirConditioningSystem();
        assertFalse(airConditioningSystem.isOpen());
        verify(thermometer, times(1)).getTemperature();

    }
}

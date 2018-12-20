package com.pluralsight.tddjunit5.database;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.quality.Strictness;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class DatabaseAccessTest {

    @Mock
    private Database database;

    Credentials credentials = new Credentials("phil", "pav");

    @Test
    void testDatabaseAccessSuccessfull(){
        when(database.login(credentials)).thenReturn(true);
        Credentials sameCredentials = new Credentials("phil", "pav");
        assertTrue(database.login(sameCredentials));
    }

    @Test
    void testDatabaseAccessFailure(){
        // lenient() to authorize the call of login() function with different credential.
        // otherwise Mokito raises an error, thinking I make a mistake by call login() with
        // with different arguments in the same function.
        lenient().when(database.login(credentials)).thenReturn(true);
        Credentials otherCredentials = new Credentials("phil", "pav");
        otherCredentials.setUsername("other");
        otherCredentials.setPassword("otherpass");
        assertNotEquals(credentials.getUsername(), otherCredentials.getUsername());
        assertNotEquals(credentials.getPassword(), otherCredentials.getPassword());
        assertNotEquals(credentials.hashCode(), otherCredentials.hashCode());
        assertFalse(database.login(otherCredentials));
    }

}

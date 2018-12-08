package com.pluralsight.tddjunit5.airport;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public abstract class Flight {

    private String id;
    List<Passager> passagersList = new ArrayList<Passager>();

    public Flight(String id){
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public List<Passager> getPassagersList() {
        return Collections.unmodifiableList(passagersList);
    }

    public abstract boolean addPassager(Passager passager);

    public abstract boolean removePassager(Passager passager);

}

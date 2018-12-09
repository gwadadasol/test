package com.pluralsight.tddjunit5.airport;

import java.util.*;

public abstract class Flight {

    private String id;
    Set<Passager> passagersSet = new HashSet<Passager>();

    public Flight(String id){
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public Set<Passager> getPassagersSet() {
        return Collections.unmodifiableSet(passagersSet);
    }

    public abstract boolean addPassager(Passager passager);

    public abstract boolean removePassager(Passager passager);

}

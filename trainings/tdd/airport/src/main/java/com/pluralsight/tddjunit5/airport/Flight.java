package com.pluralsight.tddjunit5.airport;

import java.util.*;

public abstract class Flight {

    private String id;
    Set<Passager> passagersSet = new HashSet<Passager>();
    private int distance;

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public Flight(String id, int distance){

        this.id = id;
        this.distance = distance;
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

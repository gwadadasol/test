package com.pluralsight.tddjunit5.airport;

public class Passager {

    private String name;
    private boolean vip;

    public Passager(String name, boolean vip) {
        this.name = name;
        this.vip = vip;
    }

    public boolean isVip() {
        return vip;
    }

    public String getName() {
        return this.name;
    }


}

package com.pluralsight.tddjunit5.airport;

import java.util.Objects;

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

    @Override
    public int hashCode(){
        return Objects.hash(name);
    }

    @Override
    public boolean equals (Object o){
     if (this == o ) return true;
     if (o == null || getClass() != o.getClass()) return false;
     Passager passager = (Passager)o;
     return Objects.equals(this.name, passager.name);
    }


}

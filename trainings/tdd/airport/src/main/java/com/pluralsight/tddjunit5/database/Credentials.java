package com.pluralsight.tddjunit5.database;

import java.util.Objects;

public class Credentials {
    private String username;
    private String password;

    Credentials(String username, String password){
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o){
        if ( this == o ) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Credentials credentials = (Credentials)o;
        return (Objects.equals(username, credentials.username) &&
                Objects.equals(password, credentials.password));
    }

    @Override
    public  int hashCode(){
        return Objects.hash(username, password);
    }
}

package com.cj.humidortracker;

import org.httpobjects.jetty.HttpObjectsJettyHandler;
import org.httpobjects.util.ClasspathResourceObject;
import org.httpobjects.util.ClasspathResourcesObject;

public class Tracker {
    public static void main(String[] args) {
        HttpObjectsJettyHandler.launchServer(8080, 
        new ClasspathResourceObject("/", "/content/index.html", Tracker.class),
        new ClasspathResourcesObject("/{resource*}", Tracker.class, "/content"));
    }
}

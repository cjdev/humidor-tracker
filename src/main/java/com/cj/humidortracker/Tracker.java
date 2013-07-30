package com.cj.humidortracker;

import java.io.ByteArrayOutputStream;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import org.httpobjects.HttpObject;
import org.httpobjects.Representation;
import org.httpobjects.Request;
import org.httpobjects.Response;
import org.httpobjects.jetty.HttpObjectsJettyHandler;
import org.httpobjects.util.ClasspathResourceObject;
import org.httpobjects.util.ClasspathResourcesObject;

public class Tracker {
//	static final Map<Integer, String> cigars = new HashMap<Integer, String>();
	static String myCigar;
	
    public static void main(String[] args) {
        HttpObjectsJettyHandler.launchServer(8080, 
        new ClasspathResourceObject("/", "/content/index.html", Tracker.class),
        new ClasspathResourcesObject("/{resource*}", Tracker.class, "/content"), 
        new HttpObject("/api/cigars"){
        	@Override
        	public synchronized Response post(Request req) {
        		myCigar = toString(req.representation());
        		return OK(Json(myCigar));
        	}
        	@Override
        	public Response get(Request req) {
        		return OK(Json(myCigar));
        	}
        	private String toString(Representation representation) {
        		try {
        			ByteArrayOutputStream bytes = new ByteArrayOutputStream();
        			representation.write(bytes);
        			return new String(bytes.toByteArray(), "UTF8");
        		} catch (UnsupportedEncodingException e) {
        			throw new RuntimeException(e);
        		}
        	}
        });
    }
    
	
}

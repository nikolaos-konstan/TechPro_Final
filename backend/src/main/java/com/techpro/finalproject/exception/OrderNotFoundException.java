package com.techpro.finalproject.exception;

public class OrderNotFoundException extends RuntimeException{
    public OrderNotFoundException(Integer id){
        super("Could not find the order with id: "+id);
    }
}

package com.techpro.finalproject.exception;

public class OrderDetailsNotFoundException extends RuntimeException{
    public OrderDetailsNotFoundException(Integer id){
        super("Could not find the order details with id: "+id);
    }
}

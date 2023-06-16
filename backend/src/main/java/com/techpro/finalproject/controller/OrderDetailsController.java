package com.techpro.finalproject.controller;


import com.techpro.finalproject.model.OrderDetails;


import com.techpro.finalproject.repository.OrderDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderDetailsController {
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    @PostMapping("/orderdetails")
    OrderDetails newOrderDetails(@RequestBody OrderDetails newOrderDetails) {
        return orderDetailsRepository.save(newOrderDetails);
    }

    @GetMapping("/orderdetails/")
    List<OrderDetails> getAllPeople(){
        return orderDetailsRepository.findAll();
    }


}

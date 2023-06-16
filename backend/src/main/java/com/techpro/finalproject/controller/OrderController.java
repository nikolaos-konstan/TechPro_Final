package com.techpro.finalproject.controller;

import com.techpro.finalproject.model.Order;
import com.techpro.finalproject.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/orders")
    Order newOrder(@RequestBody Order newOrder) {
        return orderRepository.save(newOrder);
    }

    @GetMapping("/orders/")
    List<Order> getAllOrders(){
        return orderRepository.findAll();
    }
}

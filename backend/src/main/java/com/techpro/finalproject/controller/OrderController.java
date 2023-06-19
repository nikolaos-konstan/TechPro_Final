package com.techpro.finalproject.controller;

import com.techpro.finalproject.exception.OrderNotFoundException;
import com.techpro.finalproject.model.Order;
import com.techpro.finalproject.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
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

    @GetMapping("/orders/{id}")
    Order getOrdersById(@PathVariable Integer id){
        return orderRepository.findById(id)
                .orElseThrow(()->new OrderNotFoundException(id));
    }

    @DeleteMapping("/orders/{id}")
    String deleteOrder(@PathVariable Integer id){
        if(!orderRepository.existsById(id)){
            throw new OrderNotFoundException(id);
        }
        orderRepository.deleteById(id);
        return "Order with id: "+id+" has been deleted successfully.";
    }

}

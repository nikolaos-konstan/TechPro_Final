package com.techpro.finalproject.controller;

import com.techpro.finalproject.model.OrderDetails;
import com.techpro.finalproject.exception.OrderDetailsNotFoundException;
import com.techpro.finalproject.repository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class OrderDetailsController {
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

        // Create a new order detail
    @PostMapping("/orderdetails")
    OrderDetails newOrderDetails(@RequestBody OrderDetails newOrderDetails) {
        return orderDetailsRepository.save(newOrderDetails);
    }
    // Retrieve a list of all order details
    @GetMapping("/orderdetails/")
    List<OrderDetails> getAllOrderDetails(){
        return orderDetailsRepository.findAll();
    }
    // Retrieve an order detail by ID
    @GetMapping("/orderdetails/{id}")
    OrderDetails getOrderDetailsById(@PathVariable Integer id){
        return orderDetailsRepository.findById(id)
                .orElseThrow(()->new OrderDetailsNotFoundException(id));
    }
    // Update an order detail by ID
    @PutMapping("/orderdetails/{id}")
    OrderDetails updateOrderDetails(@RequestBody OrderDetails newOrderDetails, @PathVariable Integer id){
        return orderDetailsRepository.findById(id)
                .map(orderDetails -> {

                    orderDetails.setQuantity(newOrderDetails.getQuantity());
                    return orderDetailsRepository.save(orderDetails);
                }).orElseThrow(()->new OrderDetailsNotFoundException(id));
    }
    // Delete an order detail by ID
    @DeleteMapping("/orderdetails/{id}")
    String deleteOrderDetails(@PathVariable Integer id){
        if(!orderDetailsRepository.existsById(id)){
            throw new OrderDetailsNotFoundException(id);
        }
        orderDetailsRepository.deleteById(id);
        return "Person with id: "+id+" has been deleted successfully.";
    }

}

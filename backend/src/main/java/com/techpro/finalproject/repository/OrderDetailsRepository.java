package com.techpro.finalproject.repository;

import com.techpro.finalproject.model.OrderDetails;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {

}

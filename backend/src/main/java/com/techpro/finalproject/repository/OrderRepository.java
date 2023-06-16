package com.techpro.finalproject.repository;

import com.techpro.finalproject.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}

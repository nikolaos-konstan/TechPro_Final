package com.techpro.finalproject.repository;

import com.techpro.finalproject.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}

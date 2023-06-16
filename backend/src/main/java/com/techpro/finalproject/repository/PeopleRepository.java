package com.techpro.finalproject.repository;

import com.techpro.finalproject.model.People;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PeopleRepository extends JpaRepository<People,Long> {
}

package com.techpro.finalproject.controller;

import com.techpro.finalproject.model.People;
import com.techpro.finalproject.exception.PersonNotFoundException;
import com.techpro.finalproject.repository.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class PeopleController {

    @Autowired
    private PeopleRepository peopleRepository;

    @PostMapping("/people")
    People newPeople(@RequestBody People newPeople) {
        return peopleRepository.save(newPeople);
    }

    @GetMapping("/people/")
    List<People> getAllPeople(){
        return peopleRepository.findAll();
    }

    @GetMapping("/people/{id}")
    People getPeopleById(@PathVariable Integer id){
        return peopleRepository.findById(id)
                .orElseThrow(()->new PersonNotFoundException(id));
    }

    @PutMapping("/people/{id}")
    People updatePeople(@RequestBody People newPeople, @PathVariable Integer id){
            return peopleRepository.findById(id)
                    .map(people -> {

                        people.setFirstName(newPeople.getFirstName());
                        people.setLastName(newPeople.getLastName());
                        people.setEmail(newPeople.getEmail());
                        return peopleRepository.save(people);
                    }).orElseThrow(()->new PersonNotFoundException(id));
    }

    @DeleteMapping("/people/{id}")
    String deletePeople(@PathVariable Integer id){
        if(!peopleRepository.existsById(id)){
            throw new PersonNotFoundException(id);
        }
        peopleRepository.deleteById(id);
        return "Person with id: "+id+" has been deleted successfully.";
    }
}
package com.techpro.finalproject.controller;

import com.techpro.finalproject.exception.ItemNotFoundException;
import com.techpro.finalproject.exception.PersonNotFoundException;
import com.techpro.finalproject.model.Item;

import com.techpro.finalproject.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;
    // Create a new item
    @PostMapping("/items")
    Item newItem(@RequestBody Item newItem) {
        return itemRepository.save(newItem);
    }
    // Retrieve a list of all items
    @GetMapping("/items/")
    List<Item> getAllItems() {
        return itemRepository.findAll();
    }
    // Retrieve an item by ID
    @GetMapping("/items/{id}")
    Item getItemById(@PathVariable Integer id) {
        return itemRepository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException(id));
    }
    // Update an item by ID
    @PutMapping("/items/{id}")
    Item updateItem(@RequestBody Item newItem, @PathVariable Integer id) {
        return itemRepository.findById(id)
                .map(item -> {

                    item.setItemName(newItem.getItemName());
                    return itemRepository.save(item);
                }).orElseThrow(() -> new PersonNotFoundException(id));
    }
    // Delete an item by ID
    @DeleteMapping("/items/{id}")
    String deleteItem(@PathVariable Integer id) {
        if (!itemRepository.existsById(id)) {
            throw new ItemNotFoundException(id);
        }
        itemRepository.deleteById(id);
        return "Item with id: " + id + " has been deleted successfully.";
    }
}

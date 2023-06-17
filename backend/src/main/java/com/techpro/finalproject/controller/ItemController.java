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

    @PostMapping("/items")
    Item newItem(@RequestBody Item newItem) {
        return itemRepository.save(newItem);
    }

    @GetMapping("/items/")
    List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @GetMapping("/items/{id}")
    Item getItemById(@PathVariable Long id) {
        return itemRepository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException(id));
    }

    @PutMapping("/items/{id}")
    Item updateItem(@RequestBody Item newItem, @PathVariable Long id) {
        return itemRepository.findById(id)
                .map(item -> {

                    item.setItemName(newItem.getItemName());
                    return itemRepository.save(item);
                }).orElseThrow(() -> new PersonNotFoundException(id));
    }

    @DeleteMapping("/items/{id}")
    String deleteItem(@PathVariable Long id) {
        if (!itemRepository.existsById(id)) {
            throw new ItemNotFoundException(id);
        }
        itemRepository.deleteById(id);
        return "Item with id: " + id + " has been deleted successfully.";
    }
}

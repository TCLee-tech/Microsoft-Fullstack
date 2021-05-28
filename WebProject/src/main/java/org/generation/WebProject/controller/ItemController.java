package org.generation.WebProject.controller;

import org.generation.WebProject.repository.Entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.generation.WebProject.service.ItemService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import org.generation.WebProject.controller.dto.ItemDTO;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.generation.WebProject.repository.ItemRepository;

@RestController
@RequestMapping("/item")

public class ItemController {

                        //bad way -> directly accessing the itemRepository to find items

                        /* commenting out codes that directly access itemRepository
                        final ItemRepository itemRepository;

                        public ItemController(@Autowired ItemRepository itemRepository)
                        {
                            this.itemRepository = itemRepository;
                        }

                        @GetMapping
                        public Iterable<Item> getItems()
                        {
                            return itemRepository.findAll();
                        }*/

    //proper way of using the Services to access ItemRepository

    final ItemService itemService;

public ItemController(@Autowired ItemService itemService)
{
    this.itemService = itemService;
}


@GetMapping("/all")
public Iterable<Item> getItems()
{
    return itemService.all();
}

/*
passing the itemDTO class object into the save method
item DTO class object is the object that received the data passed from fetch/ajax in frontend.
Item DTO class object in turn, passed the data to Item class (entity) to perform adding of record to the database;
through the service layer
To avoid CROS
*/

@CrossOrigin
@PostMapping("/add")
public Item save (@RequestBody ItemDTO itemDTO)
{
    return itemService.save(new Item(itemDTO) );
}


@GetMapping("/{id}")
public Item findItemById(@PathVariable Integer id)
{
    return itemService.findById(id);
}

@CrossOrigin
@PutMapping("/{id}")
public Item update(@PathVariable Integer id, @RequestBody ItemDTO itemDTO)
//public item update(@PathVariable Integer id)
{
    System.out.println("Hello");
    Item item = itemService.findById(id);
    item.setName(itemDTO.getName() );
    item.setDescription(itemDTO.getDescription() );
    item.setImageUrl(itemDTO.getImageUrl());
    item.setStyle(itemDTO.getStyle());
    item.setPrice(itemDTO.getPrice());
    return itemService.save(item);
}

@CrossOrigin
@DeleteMapping("/{id}")
public void delete(@PathVariable Integer id)
{
    itemService.delete(id);
}

}
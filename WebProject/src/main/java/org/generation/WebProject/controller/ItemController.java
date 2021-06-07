package org.generation.WebProject.controller;

import org.generation.WebProject.repository.Entity.Item;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.util.*;
import org.springframework.web.bind.annotation.*;
import org.generation.WebProject.Service.*;
import org.generation.WebProject.controller.dto.ItemDTO;
import org.generation.WebProject.component.FileUploadUtil;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.*;

import org.generation.WebProject.component.FileUploadUtil;

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

@CrossOrigin
@GetMapping("/all")
public Iterable<Item> getItems()
{
    return itemService.all();
}

/*
    update the handler method that is responsible to handle form submission
    To handle file uploaded from the client, we need to declare this parameter for the handler method:
    @RequestParam("image") MultipartFile multipartFile
    Just use the spring starter web dependency is enough. Under the hood, Spring will use Apache Commons File Upload
    that parses multipart request to reads data from the file uploaded.
    */

/*
passing the itemDTO class object into the save method
item DTO class object is the object that received the data passed from fetch/ajax in frontend.
Item DTO class object in turn, passed the data to Item class (entity) to perform adding of record to the database;
through the service layer
To avoid CROS
*/

@CrossOrigin
@PostMapping("/add")
public Item save (  @RequestParam(name="name", required = true) String name,
                    @RequestParam(name="description", required = true) String description,
                    @RequestParam(name = "imageUrl", required = true) String imageUrl,
                    @RequestParam(name = "style", required = true) String style,
                    @RequestParam(name = "price", required = true) double price,
                    @RequestParam("imagefile") MultipartFile multipartFile) throws IOException {

    String uploadDir1 = "productImages/images";
    //String uploadDir2 = "build/resources/main/static/images";

    //System.out.println("Inside");

    //System.out.println("aaa : " + multipartFile.getOriginalFilename());

    //to get the name of the uploaded file
    String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());

    /*The class StringUtils come from the package org.springframework.util.
    Note that we store only the file name in the database table,
    and the actual uploaded file is stored in the file system:
    Here, the uploaded file is stored in the directory productImages/images,
    which is relative to the application’s directory.*/
    FileUploadUtil.saveFile(uploadDir1, fileName, multipartFile);

    ItemDTO itemDTO = new ItemDTO(name, description, imageUrl, style, price);
    return itemService.save(new Item(itemDTO));
}

@CrossOrigin
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
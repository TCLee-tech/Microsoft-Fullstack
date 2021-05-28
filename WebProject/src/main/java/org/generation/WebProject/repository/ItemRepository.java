package org.generation.WebProject.repository;

import org.springframework.data.repository.*;
import org.generation.WebProject.repository.Entity.Item;

//This will be AUTO IMPLEMENTED by Spring into a Bean called ItemRepository
//CRUD refers to Create, Read, Update Delete
public interface ItemRepository extends CrudRepository<Item, Integer> {
}

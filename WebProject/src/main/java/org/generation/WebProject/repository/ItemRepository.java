package org.generation.WebProject.repository;

import org.generation.WebProject.repository.Entity.Item;
import org.springframework.data.repository.*;

//This will be AUTO IMPLEMENTED by Spring into a Bean called ItemRepository
//CRUD refers to Create, Read, Update Delete
public interface ItemRepository extends CrudRepository<Item, Integer>
{
}

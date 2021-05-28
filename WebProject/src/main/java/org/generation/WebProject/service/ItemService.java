package org.generation.WebProject.service;

import org.generation.WebProject.repository.Entity.Item;
import java.util.List;

public interface ItemService {

    Item save (Item item);

    void delete (int itemId);

    List<Item> all();

    Item findById(int itemId);

}

package org.generation.WebProject;
package org.generation.WebProject.controller;

import org.generation.WebProject.controller.ItemController;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import org.generation.WebProject.Service.ItemService;


@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ItemControllerTest {

    @Mock
    ItemService itemService;

    ItemController itemController;

    @BeforeAll
    public void setup() {itemController = new ItemController(itemService); }

    @Test
    public void findItemService()
    {
        int id = 34;
        itemController.findItemById(id);
        Mockito.verify(itemService).findById(id);
    }
}

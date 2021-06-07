package org.generation.WebProject;

import org.generation.WebProject.Service.*;
import org.generation.WebProject.repository.*;
import org.generation.WebProject.repository.Entity.*;
import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.boot.test.context.*;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS) //enables us to ask Junit to create only one instance of the test class and reuse
public class ItemServiceMySQLTest {

    //Mocking is done when you invoke methods of a class that has external communication like database calls or rest calls
    @Mock
    ItemRepository itemRepository;

    ItemService itemService;

    @BeforeAll
    public void setup()
    {
        itemService = new ItemServiceMySQL(itemRepository);
    }

    /*
    The Mockito.mock() method allows us to create a mock object of a class or an interface.
    Then, we can use the mock to stub return values for its methods and verify if they were called.
    Mockito Verify methods are used to check that certain behavior happened.
    We can use Mockito verify methods at the end of the testing method code to make sure
    that specified methods are called.
     */

    @Test
    public void saveCallsItemsRepositorySave()
    {
        Item itemMock = Mockito.mock(Item.class);
        itemService.save(itemMock);                     // to test
        Mockito.verify(itemRepository).save(itemMock);  //to validate
    }
}

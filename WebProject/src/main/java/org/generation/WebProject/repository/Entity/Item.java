package org.generation.WebProject.repository.Entity;

import org.generation.WebProject.controller.dto.ItemDTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    private String name;
    private String description;
    private String imageUrl;
    private String style;
    private double price;

    public Item() {}

    //Task 9
    public Item(ItemDTO itemDTO)
    {
        this.name = itemDTO.getName();
        this.description = itemDTO.getDescription();
        this.imageUrl = itemDTO.getImageUrl();
        this.style = itemDTO.getStyle();
        this.price = itemDTO.getPrice();
    }

    public Integer getId() {return id; }

    public void setId(Integer id) {this.id = id; }

    public String getName() {return name;}

    public void setName(String name) {this.name = name; }

    public String getDescription() {return description; }

    public void setDescription(String description) {this.description = description;}

    public String getImageUrl() {return imageUrl; }

    public void setImageUrl(String imageUrl) {this.imageUrl = imageUrl; }

    public void setStyle (String style) {this.style = style; }

    public String getStyle() {return style; }

    public void setPrice (double price) {this.price = price; }

    public double getPrice() {return price; }

    @Override
    public String toString()
    {
        return "Item{" + "id=" + id + ", name='" + name + '\''+ ", description='" + description + '\'' + ", imageUrl" + imageUrl + '\'' + ",styles='" + style + '\'' + ", price='" + price + '}';
    }
}

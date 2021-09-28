import React, { useState } from "react";

export default function AdminView(props) {
  const [newItemName, setNewItemName] = useState("");

  const [newItemPrice, setNewItemPrice] = useState("");
  const [newManuafacter, setManuafacter] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newPromos, setNewPromos] = useState("");
  const [newRating, setNewRating] = useState("");
  const addNewItem = () => {
    props.addNewItem(
      newItemName,
      newItemPrice,
      newManuafacter,
      newCategory,
      newImage,
      newPromos,
      newRating
    );
  };

  const onDeleteItemClick = (itemId) => {
    console.log("clicked delete for item id " + itemId);
    props.deleteItem(itemId);
  };

  return (
    <div>
      <div>
        <h1>Add new item</h1>
        <div>
          Name{" "}
          <input
            type="text"
            onChange={(event) => setNewItemName(event.target.value)}
          />
        </div>

        <div>
          Price{" "}
          <input
            type="text"
            onChange={(event) => setNewItemPrice(event.target.value)}
          />
        </div>
        <div>
          Manufacturer{" "}
          <input
            type="text"
            onChange={(event) => setManuafacter(event.target.value)}
          />
        </div>
        <div>
          Category{" "}
          <input
            type="text"
            onChange={(event) => setNewCategory(event.target.value)}
          />
        </div>
        <div>
          Promos{" "}
          <input
            type="text"
            onChange={(event) => setNewPromos(event.target.value)}
          />
        </div>
        <div>
          Rating{" "}
          <input
            type="number"
            onChange={(event) => setNewRating(event.target.value)}
          />
        </div>
        <div>
          Image{" "}
          <input
            type="url"
            onChange={(event) => setNewImage(event.target.value)}
          />
        </div>
        <button onClick={addNewItem}>Add Item</button>
      </div>
      <button onClick={props.disableAdminMode}>Disable Admin Mode</button>

      <h1>List of items</h1>
      {props.items.map((item, index) => (
        <div key={index}>
          <button onClick={() => onDeleteItemClick(item.id)}>X</button>{" "}
          {item.name}, {item.price},{item.manufacturer}, {item.category},
          {item.image}
        </div>
      ))}
    </div>
  );
}

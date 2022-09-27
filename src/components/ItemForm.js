import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

function handleItemChange(e){
  let key = e.target.id;
  setFormData({
    ...formData, 
    [key]: e.target.value
  })
}

function handleItemSubmit(e){
  e.preventDefault();
  props.onItemFormSubmit(formData)
};


  return (
    <form onSubmit={handleItemSubmit} className="NewItem">
      <label>
        Name:
        <input id="name" type="text" name="name" placeholder={formData.category} onChange={handleItemChange} />
      </label>

      <label>
        Category:
        <select name="category" id="category" onChange={handleItemChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

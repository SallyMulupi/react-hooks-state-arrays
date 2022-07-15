import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
    const [foods, setFoods] = useState(spicyFoods);

    function handleAddFood() {
        const newFood = getNewRandomSpicyFood();
        console.log(newFood);
    }
    const foodList = foods.map((food) => (
      <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  function handleClick(id){
    const newFoodArray = foods.filter((food) => food.id !== food.id);
    setFoods(newFoodArray);
  }
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <button onClick={handleClick}>remove New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

    export default SpicyFoodList;
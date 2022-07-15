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
    export default SpicyFoodList;
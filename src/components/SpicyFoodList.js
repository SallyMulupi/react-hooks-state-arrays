import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
    const [foods, setFoods] = useState(spicyFoods);

    function handleAddFood() {
        const newFood = getNewRandomSpicyFood();
        console.log(newFood);
    }

    export default SpicyFoodList;
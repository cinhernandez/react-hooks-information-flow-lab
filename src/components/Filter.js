import React from "react"

function Filter ({onCategoryChange}){

    return <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
     </div>
    
     
}

export default Filter;

//Created this filter component in order to oraganize items that are filtered in here
//instead of having to keep a ton of code all in the shopping list
//the goal was to narrow down and create a hierarchy of components

//onCategoryChange is a prop that is passed in from the shopping list component 
//and through the component that is placed inside the return statement in the shopping list
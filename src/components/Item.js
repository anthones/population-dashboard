import React from 'react';
// import { sortable } from 'react-sortable';

const Item = ({ name, population }) => {
  return (
    <div>
        <span>{name}</span>
        <span>{population}</span>
    </div>
  );
}


// var SortableItem = sortable(Item);
export default Item;
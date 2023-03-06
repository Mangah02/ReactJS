import React from 'react';

function ItemList(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;

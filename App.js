import React from 'react';
import ItemList from './ItemList';

function App() {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  
  return (
    <div>
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;

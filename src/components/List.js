import React from 'react';
import Item from './Item';

const List = ({countries}) => {
  return (
    <div>
      {
        countries.map((country, i) => {
          return (
            <Item
              key={i}
              name={country[i].name}
              population={country[i].population}
              />
          );
        })
      }
    </div>
  );
}

export default List;
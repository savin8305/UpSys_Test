// src/Item.js
import React from 'react';

const Item = (props) => {
  return (
    <div className="rounded-lg shadow-md bg-white p-4 mb-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{props.title}</h2>
      <p className="text-gray-600">Author: {props.author}</p>
    </div>
  );
};

export default Item;

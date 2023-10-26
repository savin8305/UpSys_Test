// src/Task02.js
import React from 'react';
import Item from './Item';

const items = [
  { title: 'Book 1', author: 'Author 1' },
  { title: 'Book 2', author: 'Author 2' },
  { title: 'Book 3', author: 'Author 3' },
];

const Task02 = () => {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} title={item.title} author={item.author} />
      ))}
    </div>
  );
};

export default Task02;

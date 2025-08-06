import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory, addCategory } from '../features/tasksSlice';
import { FaPlus } from 'react-icons/fa';

const CategorySelector = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(state => state.tasks);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      dispatch(addCategory(newCategory));
      setNewCategory('');
    }
  };

  return (
    <div className="category-selector">
      <select
        value={selectedCategory}
        onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
      >
        <option value="All">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      
      <form onSubmit={handleAddCategory} className="add-category-form">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add new category"
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default CategorySelector;
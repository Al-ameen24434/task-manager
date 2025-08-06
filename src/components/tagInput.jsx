import React, { useState } from 'react';
import { FaTimes, FaTag } from 'react-icons/fa';

const TagInput = ({ tags, onAddTag, onRemoveTag }) => {
  const [tagInput, setTagInput] = useState('');

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput)) {
      onAddTag(tagInput);
      setTagInput('');
    }
  };

  return (
    <div className="tag-input">
      <div className="tags-container">
        {tags.map(tag => (
          <span key={tag} className="tag">
            <FaTag /> {tag}
            <button onClick={() => onRemoveTag(tag)} className="remove-tag">
              <FaTimes />
            </button>
          </span>
        ))}
      </div>
      <form onSubmit={handleAddTag} className="add-tag-form">
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          placeholder="Add tags..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TagInput;
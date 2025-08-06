import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/tasksSlice';
import { FaPlus } from 'react-icons/fa';
import DatePicker from './datePicker'; // Note: Capitalized to match file name
import TagInput from './tagInput'; // Note: Capitalized to match file name

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const [category, setCategory] = useState('Other');
  const [dueDate, setDueDate] = useState(null);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask({
        text: taskText,
        category,
        dueDate,
        tags,
      }));
      // Reset form
      setTaskText('');
      setCategory('Other');
      setDueDate(null);
      setTags([]);
    }
  };

  const addTag = (tag) => {
    if (tag.trim() && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tag) => setTags(tags.filter(t => t !== tag));

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
        required
      />
      
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="category-select"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      
      <DatePicker value={dueDate} onChange={setDueDate} />
      
      <TagInput tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
      
      <button type="submit" className="add-button">
        <FaPlus /> Add Task
      </button>
    </form>
  );
};

export default AddTask;
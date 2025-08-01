import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/tasksSlice';
import { FaTrash, FaCheck, FaRedo } from 'react-icons/fa';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <div className="task-actions">
        <button 
          onClick={() => dispatch(toggleTask(task.id))}
          className="toggle-btn"
        >
          {task.completed ? <FaRedo /> : <FaCheck />}
        </button>
        <button 
          onClick={() => dispatch(deleteTask(task.id))}
          className="delete-btn"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
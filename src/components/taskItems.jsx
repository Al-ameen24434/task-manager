import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/tasksSlice';
import { FaTrash, FaCheck, FaRedo, FaTag, FaCalendarAlt } from 'react-icons/fa';
import { Draggable } from 'react-beautiful-dnd';

const TaskItem = ({ task, index }) => {
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-item ${task.completed ? 'completed' : ''}`}
        >
          <div className="task-content">
            <span className="task-text">{task.text}</span>
            
            <div className="task-meta">
              {task.category && (
                <span className="task-category">
                  {task.category}
                </span>
              )}
              
              {task.dueDate && (
                <span className="task-due">
                  <FaCalendarAlt /> {new Date(task.dueDate).toLocaleDateString()}
                </span>
              )}
              
              {task.tags.length > 0 && (
                <div className="task-tags">
                  {task.tags.map(tag => (
                    <span key={tag} className="tag">
                      <FaTag /> {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          
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
      )}
    </Draggable>
  );
};

export default TaskItem;
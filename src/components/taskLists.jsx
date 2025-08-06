import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './taskItems';
import { Droppable } from 'react-beautiful-dnd';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);
  const selectedCategory = useSelector(state => state.tasks.selectedCategory);

  const filteredTasks = tasks.filter(task => {
    // Apply status filter
    if (filter === 'active' && task.completed) return false;
    if (filter === 'completed' && !task.completed) return false;
    
    // Apply category filter
    if (selectedCategory !== 'All' && task.category !== selectedCategory) return false;
    
    return true;
  });

  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <div 
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="task-list"
        >
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <TaskItem key={task.id} task={task} index={index} />
            ))
          ) : (
            <p className="no-tasks">No tasks found. Add a new task!</p>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
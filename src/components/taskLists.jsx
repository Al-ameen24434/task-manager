import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './taskItems';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      ) : (
        <p>No tasks found. Add a new task!</p>
      )}
    </div>
  );
};

export default TaskList;
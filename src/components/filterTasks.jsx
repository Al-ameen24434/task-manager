import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/tasksSlice';

const FilterTasks = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.tasks.filter);

  return (
    <div className="filter-tasks">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => dispatch(setFilter('all'))}
      >
        All
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => dispatch(setFilter('active'))}
      >
        Active
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => dispatch(setFilter('completed'))}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTasks;
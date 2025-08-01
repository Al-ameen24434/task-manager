import { useEffect } from 'react';
import { setTasks } from '../features/tasksSlice';
import { useDispatch } from 'react-redux';

export const useLocalStorage = () => {
  const dispatch = useDispatch();

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      dispatch(setTasks(JSON.parse(savedTasks)));
    }
  }, [dispatch]);

  // Save tasks to localStorage whenever they change
  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return { saveTasks };
};
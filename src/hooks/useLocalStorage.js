import { useEffect } from 'react';
import { setTasks, setSelectedCategory, toggleDarkMode } from '../features/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useLocalStorage = () => {
  const dispatch = useDispatch();
  const { tasks, selectedCategory, darkMode } = useSelector(state => state.tasks);

  // Load all data from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    const savedCategory = localStorage.getItem('selectedCategory');
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedTasks) dispatch(setTasks(JSON.parse(savedTasks)));
    if (savedCategory) dispatch(setSelectedCategory(savedCategory));
    if (savedDarkMode) dispatch(toggleDarkMode());
  }, [dispatch]);

  // Save all data to localStorage when they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('selectedCategory', selectedCategory);
    localStorage.setItem('darkMode', darkMode);
  }, [tasks, selectedCategory, darkMode]);

  return {};
};
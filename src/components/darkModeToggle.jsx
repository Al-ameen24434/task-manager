import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../features/tasksSlice';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.tasks.darkMode);

  return (
    <button 
      className="dark-mode-toggle"
      onClick={() => dispatch(toggleDarkMode())}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
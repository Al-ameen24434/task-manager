import React from 'react';
import { useSelector } from 'react-redux';
import { useLocalStorage } from './hooks/useLocalStorage';
import AddTask from './components/addTask';
import TaskList from './components/taskLists';
import FilterTasks from './components/filterTasks';
import CategorySelector from './components/categorySelector';
import DarkModeToggle from './components/darkModeToggle';
import './App.css';

function App() {
  useLocalStorage();
  const darkMode = useSelector(state => state.tasks.darkMode);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header">
        <h1>Task Manager</h1>
        <DarkModeToggle />
      </div>
      
      <div className="controls">
        <CategorySelector />
        <FilterTasks />
      </div>
      
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
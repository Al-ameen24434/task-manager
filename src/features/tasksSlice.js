import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all',
  categories: ['Work', 'Personal', 'Shopping', 'Other'],
  selectedCategory: 'All',
  darkMode: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        category: action.payload.category || 'Other',
        dueDate: action.payload.dueDate || null,
        tags: action.payload.tags || [],
      });
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    reorderTasks: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const result = Array.from(state.tasks);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      state.tasks = result;
    },
    addCategory: (state, action) => {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      }
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    addTagToTask: (state, action) => {
      const { taskId, tag } = action.payload;
      const task = state.tasks.find(t => t.id === taskId);
      if (task && !task.tags.includes(tag)) {
        task.tags.push(tag);
      }
    },
    removeTagFromTask: (state, action) => {
      const { taskId, tag } = action.payload;
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        task.tags = task.tags.filter(t => t !== tag);
      }
    },
  },
});

export const { 
  addTask, 
  toggleTask, 
  deleteTask, 
  setFilter, 
  setTasks,
  reorderTasks,
  addCategory,
  setSelectedCategory,
  toggleDarkMode,
  addTagToTask,
  removeTagFromTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
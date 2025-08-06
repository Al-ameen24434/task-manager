import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import { DragDropContext  } from 'react-beautiful-dnd';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <DragDropContext onDragEnd={() => {}}>  
        <App />
      </DragDropContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
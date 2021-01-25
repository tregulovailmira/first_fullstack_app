import React from 'react';
import TaskForm from '../components/TaskForm';
import TasksList from '../components/TasksList';
const Todo = () => {
  return (
    <div>
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default Todo;

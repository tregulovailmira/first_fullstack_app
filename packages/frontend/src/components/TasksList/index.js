import React from 'react';
import { connect } from 'react-redux';

const TasksList = (props) => {
  const { tasks, isFetching, error } = props;

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.data} {t.isDone}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => state.todo;

const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(TasksList);

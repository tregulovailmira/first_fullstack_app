import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createTask } from '../../actions/todoActionCreators';

const TaskForm = (props) => {
  const { createTaskCb } = props;
  const initialValues = {
    data: 'New Todo',
    isDone: false,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => createTaskCb(values)}
    >
      {formik => (
        <Form>
          <Field name="data"></Field>
          <Field name="isDone"></Field>
          <button type="submit">Create Task</button>
          <button type="reset">Reset</button>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createTaskCb: (values) => {
    dispatch(createTask(values));
  },
});

export default connect(null, mapDispatchToProps)(TaskForm);

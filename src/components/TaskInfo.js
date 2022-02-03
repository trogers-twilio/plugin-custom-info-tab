import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

class TaskInfo extends React.Component {
  render() {
    const task  = this.props.task._task.attributes.test;

    return(
      <div>
      <h3>{task}</h3>
      </div>
    );
  }
}

export default withTaskContext(TaskInfo);

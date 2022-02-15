import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

class CustomTaskInfo extends React.Component {
  render() {
    // In studio flow , under json attributes we defined an attribute test
    // The attribute `test` could be retrieved using withTaskContext() helper function
    // More details about this function could be found in the link below
    // https://www.twilio.com/docs/flex/developer/ui/add-component-context

    //retrieve the attribute and assign it to a parameter and populate it within return()
    const transferReason  = this.props.task.attributes.test;


    return(
      <div>
      <span className="strong">Transfer Reason</span>
      <h3>{transferReason}</h3>
      </div>
    );
  }
}

export default withTaskContext(CustomTaskInfo);

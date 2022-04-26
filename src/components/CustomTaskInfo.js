import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';


class CustomTaskInfo extends React.Component {
  render() {
    // In studio flow , under json attributes we defined an attribute test
    // The attribute `test` could be retrieved using withTaskContext() helper function
    // More details about this function could be found in the link below
    // https://www.twilio.com/docs/flex/developer/ui/add-component-context

    //retrieve the attribute and assign it to a parameter and populate it within return()
    const { task } = this.props;
    console.debug('CustomTaskInfo: props.task', task);
    const { attributes, queueName, taskSid, sid: reservationSid } = task;
    const { call_sid, caseNumber, name, transferReason } = attributes;


    return(
      <React.Fragment>
        <h2>Customer Name/ Phone Number</h2>
        <p>{name}</p>
        {queueName && (
          <React.Fragment>
            <h2>Queue</h2>
            <p>{queueName}</p>
          </React.Fragment>
        )}
        {transferReason && (
          <React.Fragment>
            <h2>Transfer Reason</h2>
            <p>{transferReason}</p>
          </React.Fragment>
        )}
        {caseNumber && (
          <React.Fragment>
            <h2>Case Number</h2>
            <p>{caseNumber}</p>
          </React.Fragment>
        )}
        <hr color='black'></hr>
        <h1>Task Context</h1>
        <h2>Task SID</h2>
        <p>{taskSid}</p>
        {reservationSid && (
          <React.Fragment>
            <h2>Reservation SID</h2>
            <p>{reservationSid}</p>
          </React.Fragment>
        )}
        {call_sid && (
          <React.Fragment>
            <h2>Call SID</h2>
            <p>{call_sid}</p>
          </React.Fragment>
        )}
        <hr color='black'></hr>
      </React.Fragment>

    );
  }
}

export default withTaskContext(CustomTaskInfo);

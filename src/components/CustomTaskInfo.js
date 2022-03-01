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
    const { attributes, taskSid, reservationSid } = task;
    const { name, from_country, transferReason } = attributes;


    return(
      <React.Fragment>
        <h1>Customer Context</h1>
        <h2>Customer Name/ Phone Number</h2>
        <p>{name}</p>
        {from_country && (
          <React.Fragment>
            <h2>Country</h2>
            <p>{from_country}</p>
          </React.Fragment>
        )}
        <hr color='black'></hr>
        <h1>Other Information</h1>
        {transferReason && (
          <React.Fragment>
            <h2>Transfer Reason</h2>
            <p>{transferReason}</p>
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
        <hr color='black'></hr>
      </React.Fragment>

    );
  }
}

export default withTaskContext(CustomTaskInfo);

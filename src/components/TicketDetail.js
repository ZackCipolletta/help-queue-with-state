import React, { useContext }  from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/theme-context";

function TicketDetail(props){
  const { ticket, onClickingDelete, onClickingEdit } = props; 

  const theme = useContext(ThemeContext); // To get the current provider value returned, all we need to do is provide the context we want to use to the useContext() hook as an argument. It's as simple as that! Invoking useContext() also creates a consumer that is subscribed to any change in the context provider's value.

  const styles = { 
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor 
  }

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button style={styles} onClick={onClickingEdit}>Update Ticket</button>
      <button style={styles} onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button> {/* The only remaining update we make is creating button styles from the theme value and applying them as inline styles to each button. This process is the same as with the ToggleTheme and TicketControl components. */}
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default TicketDetail;
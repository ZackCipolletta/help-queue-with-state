import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/theme-context";

function ReusableForm(props) {

  const theme = useContext(ThemeContext); //We create a ThemeContext consumer and get access to the provider value.

  const buttonStyles = { // We create button styles.
    backgroundColor: theme.buttonBackground,
    color: theme.textColor,
  };

  const inputStyles = { // We create input styles.
    backgroundColor: theme.inputBackground,
    color: theme.textColor,
  };


  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label> Pair Names:
          <br />
          <input
            style={inputStyles}
            type='text'
            name='names' />
        </label>
        <br />
        <label>Location:
          <br />
          <input
            style={inputStyles}
            type='text'
            name='location' />
        </label>
        <br />
        <label>Describe your issue:
          <br />
          <textarea
            style={inputStyles}
            name='issue' />
        </label>
        <br />
        <button style={buttonStyles} type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
import React from "react";
import { connect } from "react-redux";
import { changeMessage } from "../redux/test/actions";

export const Test = ({ message, changeMessage }) => {
  let textInput;
  return (
    <div>
      <span>{message}</span>
      <br />
      <input ref={node => (textInput = node)} type="text" />
      <button onClick={() => changeMessage(textInput.value)}>Change</button>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps, { changeMessage })(Test);

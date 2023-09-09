import React from "react";
import propTypes from 'prop-types'

function TextInput({ placeholder, name, value, type, onChange }) {
  return <input placeholder={placeholder} name={name} value={value} type={type} onChange={onChange} />;
}



TextInput.defaultProps = {
  type: 'text'
};

TextInput.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.oneOfType([propTypes.string, propTypes])
}


export default TextInput;

import React from "react";


function Button({ name, onClick, loading }) {
  return (
    <button onClick={onClick} disabled={loading ? true : false}>
      {loading ? "loading..." : name}
    </button>
  );
}


export default Button;

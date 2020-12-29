import React, { useRef } from 'react';

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
      <h1>FocusScreen</h1>

      <input
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      />

      <button 
        className="btn btn-primary mt-3"
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  )
}

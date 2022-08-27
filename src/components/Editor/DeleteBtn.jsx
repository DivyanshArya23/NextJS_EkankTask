import React from 'react';

const DeleteBtn = ({ onClick, className = '' }) => {
  return (
    <div className={className} onClick={onClick}>
      <i className="bi bi-trash"></i>
    </div>
  );
};

export default DeleteBtn;

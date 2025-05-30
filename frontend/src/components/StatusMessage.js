import React from 'react';

export default function StatusMessage({ status, message }) {
  if (!message) return null;
  return (
    <div className={`status-message ${status}`}>
      {message}
    </div>
  );
}

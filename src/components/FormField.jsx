import React from 'react';

const FormField = ({ label, type = 'text', name, value, onChange, error }) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormField;
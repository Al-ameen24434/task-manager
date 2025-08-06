import React from 'react';

const DatePicker = ({ value, onChange }) => {
  return (
    <div className="date-picker">
      <input
        type="date"
        value={value || ''}
        onChange={(e) => onChange(e.target.value || null)}
        min={new Date().toISOString().split('T')[0]}
      />
    </div>
  );
};

export default DatePicker;
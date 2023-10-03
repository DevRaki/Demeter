import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectWaiters = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const GetWaiters = async () => {
      try {
        const response = await axios.get('http://localhost:5000/GetWaiters');  
        setOptions(response.data.Nombre);
      } catch (error) {
        console.error('Error fetching options from the database:', error);
      }
    };

    GetWaiters();
  }, []);

  return (
    <div>
      <label htmlFor="options">Select an option:</label>
      <select id="options">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectWaiters;

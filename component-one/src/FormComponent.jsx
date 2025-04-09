import { useState } from 'react';
import producer from 'post-transport/src/producer';

function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '50px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    producer(window.parent, 'formSubmit', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
      />
      <button type='submit' style={buttonStyle}>
        Submit
      </button>
    </form>
  );
}

export default FormComponent;

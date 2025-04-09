import { useState, useEffect } from 'react';
import consumer from 'post-transport/src/consumer';

function App() {
  const [formData, setFormData] = useState({});

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const dataDisplayStyle = {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  useEffect(() => {
    const _consumer = consumer('formSubmit', (data) => {
      setFormData(data);
    });

    return () => _consumer.cancel();
  }, []);

  return (
    <div className='App' style={containerStyle}>
      <h1>Main Application</h1>
      <iframe
        src='http://localhost:3001'
        title='Child Application'
        style={{
          width: '300px',
          height: '300px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      ></iframe>
      <div style={dataDisplayStyle}>
        <h2>Received Form Data:</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );
}

export default App;

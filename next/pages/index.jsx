import { useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.text();
    setResponse(data);
  };

  return (
    <div>
      <h1>Send a Message to Nest.js</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default Home;

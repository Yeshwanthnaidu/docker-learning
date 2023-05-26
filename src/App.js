import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const clearAll = () => {
    setName('');
    setEmail('');
    setPhoneNumber('');
  }

  return (
    <>
      <Form style={{ margin: '20px', width: '50vw' }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Jhon" value={name} onChange={(e) => { setName(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
        </Form.Group>
      </Form>
      <button onClick={() => { alert(`name: ${name}, email: ${email}, phoneNumber: ${phoneNumber}`) }} style={{ margin: '20px' }}>Submit</button>
      <button onClick={clearAll}>Clear All</button>
    </>
  );
}

export default App;


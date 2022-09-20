import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div >
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  console.log(users);

  return (
    <div>
      <h1>Users from jsonPlaceHolder</h1>
      {
        users.map(user => <UserDetails name="user.name" website={user.website} phone={user.phone} city={user.address.city}></UserDetails>)
      }
    </div>
  );
}

function UserDetails(props) {
  return (
    <div className='container'>
      <h1>Name: {props.name}</h1>
      <h3>City: {props.city}</h3>
      <h3>Phone: {props.phone}</h3>
      <p>Website: {props.website}</p>
    </div>
  );
}

export default App;

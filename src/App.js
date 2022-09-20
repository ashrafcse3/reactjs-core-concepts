import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <hr />
      <h6>New Component</h6>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div >
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Sakib Al Hasan</h1>
      <h3>Profession: Cricket</h3>
    </div>
  );
}

function Friend() {
  return (
    <div className='container'>
      <h3>Name: Ajay Devgun</h3>
      <p>job: Maramari</p>
    </div>
  );
}

export default App;

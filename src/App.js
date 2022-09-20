import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="Sabana"></Person>
      <Person name="BappaRaz" nayika="purnima"></Person>
      <hr />
      <h6>New Component</h6>
      <Friend actor="Ajay devgun" phone="017777"></Friend>
      <Friend actor="Salman khan" phone="019999"></Friend>
    </div >
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <h3>Naika: {props.nayika}</h3>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.actor}</h3>
      <p>phone: {props.phone}</p>
    </div>
  );
}

export default App;

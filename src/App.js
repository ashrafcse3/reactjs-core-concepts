import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'BappaRaz'];
  const nayoksObject = [
    {
      name: 'Rubel',
      naika: 'Sabana'
    },
    {
      name: 'BappaRaz',
      naika: 'Purnima'
    }
  ];
  return (
    <div className="App">
      {
        nayoksObject.map(nayok => <Person name={nayok.name} nayika={nayok.naika}></Person>)
      }
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

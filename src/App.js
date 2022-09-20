import logo from './logo.svg';
import './App.css';

const musicNumber = 444;
const singer = { name: 'Dr. Mahfuz', job: 'singer' };
const singer2 = { name: 'eva rahman', job: 'designer' };

const singerStyle = {
  color: 'purple',
  background: 'yellow'
};

function App() {
  return (
    <div className="App">
      <h1>JSX</h1>
      <h2>Emmet is done</h2>
      <div className="container">
        <h3>Hello dude. React. How are you..</h3>
      </div>
      {/* <div className="music">
        <p>Name: {222 + musicNumber}</p>
      </div> */}
      <div className="musician" style={singerStyle}>
        <p>Musician Name: <strong>{singer.name}</strong></p>
        <p>Musician Job: <strong>{singer.job}</strong></p>
      </div>
      <div className="musician" style={{ color: 'hotpink' }}>
        <p>Musician Name: <strong>{singer2.name}</strong></p>
        <p>Musicain Job: <strong>{singer2.job}</strong></p>
      </div>
    </div >
  );
}

export default App;

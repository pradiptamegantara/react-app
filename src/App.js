import logo from './logo.svg';
import './App.css';

function App() {
  const enigma = 'Enigmacamp'
  const name = <h1>Hello {enigma}</h1>
  function sayHello(name){
    return `hello ${name}`
  }

  const buttontext = {
    text : 'Send'
  }

  const myStyle = {
    color: 'red',
    fontSize: '100px'
  }

  return (
    <>
      {name}
      <h1 style={{color : 'blue', fontSize : '100px'}}>{sayHello(enigma)}</h1>
      <h1 style={myStyle}>{sayHello(enigma)}</h1>
      <button className = 'my-button'>{buttontext.text}</button>
      <label htmlFor='name'>Enter Name</label>
    </>
  );
}


export default App;

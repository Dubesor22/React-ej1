import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';
import PersonClass from './components/PersonClass/PersonClass';

function App() {
  return (
    <div className="App">
     <Person name="David" surname="Ubeda" age="25"/>
      <Person name="tianfan" surname="Shan" age="22"/>
      <Person name="Juan" surname="Perez" age="23"/>
      <br/>
      <br/>
      <PersonClass name="David" surname="Ubeda" age="25"/>
      <PersonClass name="tianfan" surname="Shan" age="22"/>
      <PersonClass name="Juan" surname="Perez" age="23"/>
    </div>
  );
}


export default App;

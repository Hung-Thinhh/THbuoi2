import logo from './logo.svg';
import './App.css';
import { Hello, HelloPerson } from './hello'
import { Header } from './Header'
import HelloBtn from './HelloBtn'
import Car from "./Car"
import Login from "./Login"
import Routee from "./Route"
function App() {
  return (
    <div className="App">

      <Hello/>
      <HelloPerson name='Nguyễn Hưng Thịnh' />
      <Header />
      {/* <HelloBtn/>
      <h1>jajajaja</h1>
      <Car />  
      <Login /> */}
      <Routee/>
    </div>
  );
}


export default App;

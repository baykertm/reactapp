import logo from './logo.svg';
import Navbar from "./components/Navbar";
import User from "./components/User";
import './App.css';
import { render } from '@testing-library/react';


function App() {


  return (
    <div className="container">
    <Navbar title = "User App"/>
    
    <hr/>
    <User
    name = "Bayram Kerimov"
    salary = "7000 CAD"
    department = "Engineeing"
    />
    <hr/>

<User
    name = "Rejep Arbabov"
    salary = "8000 CAD"
    department = "IT"
    />
    </div>
    
  );
}

export default App;

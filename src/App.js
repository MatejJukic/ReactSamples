import React, { Component } from 'react';
import logo from './logo.svg';
import ReCAPTCHA from "../node_modules/react-google-recaptcha";
import Article from "../src/Article.js";
import './App.css';

function onChange(value) {
  console.log("Captcha value:", value);
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form>
      <ReCAPTCHA
        
        sitekey=""
        onChange={onChange}
      />
      <Article/>
    </form>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

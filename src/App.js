import React, {Component} from 'react';
import './App.css';
import CharComponent from "./components/CharComponent/CharComponent";
import ValidationComponent from "./components/ValidationComponent/ValidationComponent";

class App extends  Component{

  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharacterHandler = (inputIndex) => {
    const userInput = this.state.userInput.split('');
    userInput.splice(inputIndex, 1);
    const userInputUpdated = userInput.join('');
    this.setState({userInput : userInputUpdated});
  }

  render() {
    const charList = this.state.userInput.split('').map((character, index) => {
      return <CharComponent
          characterOfTheInput={character}
          key = {index}
          click = {() => this.deleteCharacterHandler(index)}
      />
    });

    return (
        <div>
          <h1>Assigment 2</h1>
          <li>Create an input (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the validationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as minimum leght)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=>display: inline-block, padding: 16px, text-aling: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponent where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
          <br/>
          <input type="text"
                 onChange={this.inputChangeHandler}
                 value={this.state.userInput}>
          </input>
          <p>{this.state.userInput}</p>
          <ValidationComponent
              userInputLength = {this.state.userInput.length}
          />
          {charList}
        </div>
    );
  }
}

export default App;

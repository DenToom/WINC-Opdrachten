import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

// state
class App extends Component {
  state = {
    textInput: ''
  }

// inputChangeHandler
inputChangedHandler = ( event ) => {
  this.setState( { textInput: event.target.value } );
}

// removeCharHandler
removeCharHandler = ( index ) => {
  const text = this.state.textInput.split('');
  text.splice(index, 1);
  const updatedText = text.join('');
  this.setState({textInput: updatedText});
}

// CharList
render() {  
  const charList = this.state.textInput.split('').map((char, index) => {
    return <Char 
      character={char} 
      key={index}
      clicked={() => this.removeCharHandler(index)} />;
  });

    return (
      
      <div className="App">
        <h1>Opdracht 2, W4D5_React</h1>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop </li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length) </li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black). </li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop. </li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrys!</p>
        {/* add a horizontal line (self-closing) ,hr /> */}
        <hr />
        <input 
            type="text"
            onChange={this.inputChangedHandler} 
            value={this.state.textInput} />
        <p>{this.state.textInput}</p>            
        <Validation inputLength={this.state.textInput.length} />
        {charList}
        </div>
    );
  }
}

export default App;

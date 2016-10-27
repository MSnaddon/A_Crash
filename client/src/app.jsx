const React = require('react');
const ReactDom = require('react-dom');

const GameView = require("./components/GameView")

window.onload = () => {
  
  ReactDom.render(<GameView/>, document.querySelector("#main-container"));
}
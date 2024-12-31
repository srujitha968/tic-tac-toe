import React, { useState } from 'react'
import './App.css'

function App() {
  
  const [player, setplayer] = useState('X')
  const [count, setcount] = useState(1)
  const [game, setgame] = useState(false)

  function chechwin(index) {
    const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    let c = []
    for (let i = 0; i <= 8; i++) {
      c.push(document.getElementById(`cell${i}`).innerHTML)
    }
    for (let x of win) {
      if (x.every(index => c[index] === player)) {
        document.getElementById('result').innerHTML = `${player}  is winner`
        setgame(true)
        return
      }
      else if(count===9){
        document.getElementById('result').innerHTML="It's a draw"
        setgame(true)
      }
    }
  }
 
  function Add(index) {
    if (!game && document.getElementById(index).innerHTML === "") {
      if (player === 'X') {
        document.getElementById(index).innerHTML = player
        setcount(count + 1)
        chechwin(index)
        setplayer('O')
      }
      else {
        document.getElementById(index).innerHTML = player
        setcount(count + 1)
        chechwin(index)
        setplayer('X')
      }
    }
  }

  return (
    <div id="main">
      <h1><u>Tic Tac Toe</u></h1>
      <h1>{game ? `` : `${player}'s turn`}</h1>
      <div id="sub">
        <div id="cell0" onClick={() => { Add('cell0') }}></div>
        <div id="cell1" onClick={() => { Add('cell1') }}></div>
        <div id="cell2" onClick={() => { Add('cell2') }}></div>
        <div id="cell3" onClick={() => { Add('cell3') }}></div>
        <div id="cell4" onClick={() => { Add('cell4') }}></div>
        <div id="cell5" onClick={() => { Add('cell5') }}></div>
        <div id="cell6" onClick={() => { Add('cell6') }}></div>
        <div id="cell7" onClick={() => { Add('cell7') }}></div>
        <div id="cell8" onClick={() => { Add('cell8') }}></div>
      </div>
      <p id="result"></p>
      <button onClick={() => { window.location = "/" }}>Restart</button>
    </div>
  )}

export default App

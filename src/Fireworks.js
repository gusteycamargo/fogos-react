import React from 'react'
import { Firework, Explosion, Container } from './styles.js'

function Fireworks() {
  function generateFirework(left, top, scale, color) {
    return (
      <Firework left={left} top={top} transform={`scale(${scale})`}>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
        <Explosion color={color}/>
      </Firework>
    )
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function renderFirework() {
    let divs = []
    for (let i = 0; i < 35; i++) {
      let firework = generateFirework(`${(Math.floor(Math.random() * 89) + 10)}%`, `${(Math.floor(Math.random() * 65) + 10)}%`, (Math.floor(Math.random() * 15) + 1) / 10, getRandomColor())
      divs.push(firework)
    }
    return divs
  }

  return (
    <Container>
      {renderFirework().map(firework => (
        firework
      ))}
    </Container>
  );
}

export default Fireworks;

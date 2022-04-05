import React, { useCallback, useState, useEffect } from 'react'
import { Firework, Explosion, Container, ButtonEdit } from './styles.js'
import { BsFillPencilFill } from "react-icons/bs"

function Fireworks({ numberOfFireworks = 0, setEditing }) {
  const [fireworks, setFireworks] = useState([])

  function generateFirework(left, top, scale, color) {
    return (
      <Firework left={left} top={top} transform={scale}>
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
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const generateFireworks = useCallback(() => {
    const divs = []
    for (let i = 0; i < numberOfFireworks; i++) {
      const left = Math.floor(Math.random() * 89) + 10
      const top = Math.floor(Math.random() * 65) + 10
      const scale = (Math.floor(Math.random() * 15) + 1) / 10
      const color = getRandomColor();

      const firework = generateFirework(left, top, scale, color)
      divs.push(firework)
    }

    setFireworks(divs)
  }, [numberOfFireworks])

  function handleClickEdit() {
    setEditing(true)
  }

  useEffect(() => {
    if(numberOfFireworks > 0) {
      generateFireworks()
    }
  }, [numberOfFireworks, generateFireworks])

  useEffect(() => {
    return () => setFireworks([])
  }, [])

  return (
    <Container>
      <ButtonEdit onClick={handleClickEdit}>
        <BsFillPencilFill color='#242427' size={22}/>
      </ButtonEdit>

      {fireworks.map(firework => (
        firework
      ))}
    </Container>
  );
}

export default Fireworks;

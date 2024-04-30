import React from 'react'
import './RandomPokemon.css'
const RandomPokemon = () => {
    const randNum=Math.floor(Math.random()*151)+1;
    const imgUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNum}.png`
  return (
    <>
        <div className='parent'>
            <h1>Pokemon #{randNum}</h1>
            <img src={imgUrl} alt="" />
        </div>
        
    </>
  )
}

export default RandomPokemon
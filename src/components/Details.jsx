import React from 'react';
import { useSelector } from 'react-redux';

export default function Details() {

  const character=useSelector(state=>state.characterDetails);

  return (
    <>
    <h1>Name: {character[0].name}</h1>
    {console.log(character)}
    </>
  )
}

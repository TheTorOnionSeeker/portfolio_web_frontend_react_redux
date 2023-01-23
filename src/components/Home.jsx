import React from 'react';
import logo from '../1985052.svg';
import '../Home.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/actions';

export default function Home() {

  const dispatch=useDispatch();

  return (
    <>
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Click on my name to see more about me.
        </p>
        <Link to={'/details'}>
            <h1 onClick={()=>dispatch(actions.getCharacterDetail())} className="Home-link">Guillermo Oscar Núñez</h1>
        </Link>
      </header>
    </div>
    </>
  )
}

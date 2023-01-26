import React, { useEffect } from 'react';
import logo from '../../src/img/My project-1.png';
import video from '../../src/matrixBinario.mp4'
import '../Home.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/actions';

export default function Home() {

  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(actions.getCharacterDetail());
  }, [])
  

  return (
    <>
    <div className="Home">
      <video id="video_background" loop autoPlay muted>
        <source src={video} type="video/mp4"/>
      </video>
      <header className="Home-header">
        <Link to={'/details'}>
          <img src={logo} className="Home-logo" alt="logo" /><br />
        </Link>
        <br />
        <p>
          Haga clic en el vórtice para entrar y ver más sobre mí.
        </p>
      </header>
    </div>
    </>
  )
}

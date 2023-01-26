import React from 'react';
/* import 'react-circular-progressbar/dist/styles.css'; */
import '../styles/Section.css';
import { CircularProgressbar,CircularProgressbarWithChildren } from 'react-circular-progressbar';
import javaLogo from '../img/java.png';
import javascriptLogo from '../img/js.png';
import htmlLogo from '../img/html.png';
import springbootLogo from '../img/springboot.png';
import reactLogo from '../img/react.png';
import reduxLogo from '../img/redux.png';
import nodejsLogo from '../img/nodejs.png';
import expressLogo from '../img/express.png';
import mysqlLogo from '../img/mysql.png';
import mongodbLogo from '../img/mongodb.jpg';
import gitLogo from '../img/git.png';
import cssLogo from '../img/CSS.png';
import bootstrapLogo from '../img/bootstrap.png';
import { useSelector } from 'react-redux';

export default function Section() {

    const character=useSelector(state=>state.characterDetails[0]);

  return (
    <>
    {console.log(character)}
    <div className='row'>
        <h1>Hard Skills</h1><br />
        <div className="col-lg-1"></div>
        <div className="col-lg-11"></div>
    </div>
    <div id='row'>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[0]}>
        <img className='remove-bg' style={{ width: 100, marginTop: 3 }} src={javaLogo} alt={character.hard_skills[0]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[0]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[1]}>
        <img className='remove-bg' style={{ width: 160, height: 80, marginTop: -5 }} src={springbootLogo} alt={character.hard_skills[1]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[1]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[2]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={reactLogo} alt={character.hard_skills[2]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[2]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[3]}>
        <img className='remove-bg' style={{ width: 80, marginTop: 3 }} src={javascriptLogo} alt={character.hard_skills[3]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[3]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[4]}>
        <img className='remove-bg' style={{ width: 160, marginTop: -5 }} src={reduxLogo} alt={character.hard_skills[4]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[4]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[5]}>
        <img className='remove-bg' style={{ width: 160, marginTop: -5 }} src={nodejsLogo} alt={character.hard_skills[5]} /><br/>
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[5]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[6]}>
        <img className='remove-bg' style={{ width: 120, marginTop: -5 }} src={expressLogo} alt={character.hard_skills[6]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[6]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[7]}>
        <img className='remove-bg' style={{ width: 120, marginTop: -5 }} src={mysqlLogo} alt={character.hard_skills[7]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[7]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[8]}>
        <img className='remove-bg' style={{ width: 160, marginTop: -5 }} src={mongodbLogo} alt={character.hard_skills[8]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[8]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[9]}>
        <img className='remove-bg' style={{ width: 120, marginTop: -5 }} src={gitLogo} alt={character.hard_skills[9]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[9]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[10]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={htmlLogo} alt={character.hard_skills[10]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[10]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[11]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={cssLogo} alt={character.hard_skills[11]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[11]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[12]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={bootstrapLogo} alt={character.hard_skills[12]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[12]}</strong>
        </div>
        </CircularProgressbarWithChildren>
    </div>
    <div className='row'>
        <h1>Soft Skills</h1><br />
        <div className="col-lg-1"></div>
        <div className="col-lg-11"></div>
    </div>
    <div className='row' id='row_soft_skills'>
        <div className="col-lg-9"></div>
        <div className="col-lg-3">
        <ul>
            <li><h3>{character.soft_skills[0]}</h3></li>
            <li><h3>{character.soft_skills[1]}</h3></li>
            <li><h3>{character.soft_skills[2]}</h3></li>
            <li><h3>{character.soft_skills[3]}</h3></li>
            <li><h3>{character.soft_skills[4]}</h3></li>
            <li><h3>{character.soft_skills[5]}</h3></li>
            <li><h3>{character.soft_skills[6]}</h3></li>
        </ul>
        </div>
        {/* <CircularProgressbarWithChildren value={100}>
        <img className='remove-bg' style={{ width: 100, marginTop: 3 }} src='' alt=''/>
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong className='text'>{character.soft_skills[0]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={100}>
        <img className='remove-bg' style={{ width: 100, marginTop: 3 }} src='' alt=''/>
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong className='text'>{character.soft_skills[1]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={100}>
        <img className='remove-bg' style={{ width: 100, marginTop: 3 }} src='' alt=''/>
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong className='text'>{character.soft_skills[2]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={100}>
        <img className='remove-bg' style={{ width: 100, marginTop: 3 }} src='' alt=''/>
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong className='text'>{character.soft_skills[3]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={100}>
        <img className='remove-bg' style={{ width: 100, marginTop: 3 }} src='' alt=''/>
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong className='text'>{character.soft_skills[4]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={100}>
        <img className='remove-bg' style={{ width: 100, marginTop: 3 }} src='' alt=''/>
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong className='text'>{character.soft_skills[5]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={100}>
        <img className='remove-bg' style={{ width: 100, marginTop: 3 }} src='' alt=''/>
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong className='text'>{character.soft_skills[6]}</strong>
        </div>
        </CircularProgressbarWithChildren> */}
    </div>
    <div className="row">
        <h1>Proyectos</h1>
        <div className="col-lg-1"></div>
        <div className="col-lg-11">
            <ul>
            <li>
                <h1>Tour de Viajes y Compras</h1> - <a href={character.projects[0]} target='_blank'><h3>Visitar</h3></a>
                <p>
                Aplicación desarrollada para empresa de viajes y turismo.
                </p>
            </li>
            <li>
                <h1>App de Rick and Morty</h1> - <a href={character.projects[1]} target='_blank'><h3>Visitar</h3></a>
                <p>
                Aplicación de Rick and Morty desarrollada para aplicar conocimientos adquiridos.
                </p>
            </li>
            <li>
                <h1>Portfolio Web personal</h1> - <a href='https://portfolio-web-guillermo-nunez.onrender.com/' target='_blank'><h3>Visitar</h3></a>
                <p>
                Portfolio Web personal desarrollado para aplicar conocimientos adquiridos.
                </p>
            </li>
            </ul>
        </div>
    </div>


    <div className="row">
        <h1>Educación</h1>
        <div className="col-lg-1"></div>
        <div className="col-lg-11">
            <ul>
            <li>
                <h1>Estudio 1</h1> - <h3>1 año</h3>
                <h2>{character.education[0]}</h2>
            </li>
            <li>
                <h1>Estudio 2</h1> - <h3>1 año</h3>
                <h2>{character.education[1]}</h2>
            </li>
            </ul>
        </div>
    </div>
    </>
  )
}

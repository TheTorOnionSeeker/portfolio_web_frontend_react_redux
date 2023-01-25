import React from 'react';
/* import 'react-circular-progressbar/dist/styles.css'; */
import '../styles/Section.css';
import { CircularProgressbar,CircularProgressbarWithChildren } from 'react-circular-progressbar';
import javaLogo from '../img/java.png';
import javascriptLogo from '../img/js.png';
import { useSelector } from 'react-redux';

export default function Section() {

    const character=useSelector(state=>state.characterDetails[0]);

  return (
    <>
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
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[1]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[1]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[2]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[2]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[2]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[3]}>
        <img className='remove-bg' style={{ width: 100, marginTop: 3 }} src={javascriptLogo} alt={character.hard_skills[3]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[3]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[4]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[4]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[4]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[5]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[5]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[5]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[6]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[6]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[6]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[7]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[7]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[7]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[8]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[8]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[8]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[9]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[9]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[9]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[10]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[10]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[10]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[11]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[11]} />
        <div style={{ fontSize: 20, marginTop: 5 }}>
          <strong>{character.hard_skills[11]}</strong>
        </div>
        </CircularProgressbarWithChildren>
        <CircularProgressbarWithChildren value={character.percentage_hard_skills[12]}>
        <img className='remove-bg' style={{ width: 100, marginTop: -5 }} src={javaLogo} alt={character.hard_skills[12]} />
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
    <div id='row_soft_skills'>
    </div>
    <div className="row">
        <h1>Proyectos</h1>
        <div className="col-lg-1"></div>
        <div className="col-lg-11">
            <ul>
            <li>
                <h1>Trabajo 1</h1> - <h3>(años)</h3>
                <p>
                Texto
                </p>
            </li>
            <li>
                <h1>Trabajo 2</h1> - <h3>(años)</h3>
                <p>
                Texto
                </p>
            </li>
            <li>
                <h1>Trabajo 3</h1> - <h3>(años)</h3>
                <p>
                Texto
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
                <h1>Estudio 1</h1> - <h3>(años)</h3>
                <p>
                Texto
                </p>
            </li>
            <li>
                <h1>Estudio 2</h1> - <h3>(años)</h3>
                <p>
                Texto
                </p>
            </li>
            <li>
                <h1>Estudio 3</h1> - <h3>(años)</h3>
                <p>
                Texto
                </p>
            </li>
            </ul>
        </div>
    </div>

{/* <h1>Hard Skills</h1>
<div class="row">
  <div class="text-center col-sm-4 col-md-4 col-lg-4" style="background-color: lightblue;">
    <circle-progress
      [percent]="95"
      [radius]="100"
      [imageSrc]="'/assets/html.png'"
      [showImage]="true"
      [imageHeight]="70"
      [imageWidth]="70"
      [title]="'HTML'"
      [outerStrokeWidth]="16"
      [innerStrokeWidth]="8"
      [outerStrokeColor]="'#78C000'"
      [innerStrokeColor]="'#C7E596'"
      [animation]="true"
      [animationDuration]="600"
      [showSubtitle]="false">
    </circle-progress>
  </div>
  <div class="text-center col-sm-4 col-md-4 col-lg-4" style="background-color: lightblue;">
    <circle-progress
      [percent]="80"
      [radius]="100"
      [imageSrc]="'/assets/CSS.png'"
      [showImage]="true"
      [imageHeight]="70"
      [imageWidth]="70"
      [title]="'CSS'"
      [outerStrokeWidth]="16"
      [innerStrokeWidth]="8"
      [outerStrokeColor]="'#78C000'"
      [innerStrokeColor]="'#C7E596'"
      [animation]="true"
      [animationDuration]="600"
      [showSubtitle]="false">
    </circle-progress>
  </div>
  <div class="text-center col-sm-4 col-md-4 col-lg-4" style="background-color: lightblue;">
    <circle-progress
      [percent]="70"
      [radius]="100"
      [imageSrc]="'/assets/java.png'"
      [showImage]="true"
      [imageHeight]="70"
      [imageWidth]="70"
      [title]="'Java'"
      [outerStrokeWidth]="16"
      [innerStrokeWidth]="8"
      [outerStrokeColor]="'#78C000'"
      [innerStrokeColor]="'#C7E596'"
      [animation]="true"
      [animationDuration]="600"
      [showSubtitle]="false"
      [backgroundColor]="'lightblue'"
      [showBackground]="true">>
    </circle-progress>
  </div>
  <div class="text-center col-sm-4 col-md-4 col-lg-4" style="background-color: lightblue;">
    <circle-progress
      [percent]="90"
      [radius]="100"
      [imageSrc]="'/assets/js.png'"
      [showImage]="true"
      [imageHeight]="70"
      [imageWidth]="70"
      [title]="'Javascript'"
      [outerStrokeWidth]="16"
      [innerStrokeWidth]="8"
      [outerStrokeColor]="'#78C000'"
      [innerStrokeColor]="'#C7E596'"
      [animation]="true"
      [animationDuration]="600"
      [showSubtitle]="false">
    </circle-progress>
  </div>
  <div class="text-center col-sm-4 col-md-4 col-lg-4" style="background-color: lightblue;">
    <circle-progress
      [percent]="80"
      [radius]="100"
      [imageSrc]="'/assets/github.png'"
      [showImage]="true"
      [imageHeight]="70"
      [imageWidth]="70"
      [title]="'GitHub'"
      [outerStrokeWidth]="16"
      [innerStrokeWidth]="8"
      [outerStrokeColor]="'#78C000'"
      [innerStrokeColor]="'#C7E596'"
      [animation]="true"
      [animationDuration]="600"
      [showSubtitle]="false">
    </circle-progress>
  </div>
</div>

<h1>Soft Skills</h1>
<div class="row">
  <div class="text-center col-sm-4 col-md-4 col-lg-4" style="background-color: lightblue;">
    <circle-progress
      [percent]="80"
      [radius]="100"
      [imageSrc]="'/assets/eng.png'"
      [showImage]="true"
      [imageHeight]="70"
      [imageWidth]="70"
      [title]="'English'"
      [outerStrokeWidth]="16"
      [innerStrokeWidth]="8"
      [outerStrokeColor]="'#78C000'"
      [innerStrokeColor]="'#C7E596'"
      [animation]="true"
      [animationDuration]="600"
      [showSubtitle]="false">
    </circle-progress>
  </div>
  <div class="text-center col-sm-4 col-md-4 col-lg-4" style="background-color: lightblue;">
    <circle-progress
      [percent]="80"
      [radius]="100"
      [imageSrc]="'/assets/grupal.png'"
      [showImage]="true"
      [imageHeight]="70"
      [imageWidth]="70"
      [title]="'Trabajo Colaborativo'"
      [outerStrokeWidth]="16"
      [innerStrokeWidth]="8"
      [outerStrokeColor]="'#78C000'"
      [innerStrokeColor]="'#C7E596'"
      [animation]="true"
      [animationDuration]="600"
      [showSubtitle]="false">
    </circle-progress>
  </div>
</div> */}
    </>
  )
}

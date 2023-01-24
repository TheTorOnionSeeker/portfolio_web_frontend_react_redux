import React from 'react';
import { useSelector } from 'react-redux';
import './Card.css';
import linkedinLogo from '../img/linkedin.png';
import githubLogo from '../img/github.png'

export default function Card() {

  const character=useSelector(state=>state.characterDetails[0]);

  return (
  <>
    {console.log(character)}
    <div className="card-header">
      <div className="social">
        <a target='_blank' href="https://www.linkedin.com/in/guillermonunezfullstackwebdeveloperjr/" >
          <img id="LinkedInLogo" src={linkedinLogo} alt="LinkedIn"/>
        </a>
        <a target='_blank' href="https://github.com/TheTorOnionSeeker"> 
          <img id="GitHubLogo" src={githubLogo} alt="GitHub"/>
        </a>
        {/* <a href="#">
          <img id="FBLogo" src="../img/facebook.png" alt="FB"/>
        </a>
        <a href="#">
          <img id="IGLogo" src="../img/instagram.png" alt="IG"/>
        </a>
        <a href="#">
          <img id="TwitterLogo" src="../img/twitter.png" alt="Twitter"/>
        </a> */}
      </div>
    </div>


    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <img id="profile-image" src={character.image} alt={character.name} />
      </div>
      <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12">
        <h2>{character.name}</h2>
        <div id="info-company">{character.role}</div>
      </div>
    </div>


    {/* <div>
        <img id='img' src={character.image} alt={character.name} />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>{character.role}</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                {character.projects.map(e=>
                    <p>{e}</p>)}
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                {character.skills.map(e=>
                    <p>{e}</p>)}
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
                {character.education.map(e=>
                    <p>{e}</p>)}
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

import React from 'react';

import '../App.css' 
import { gsap } from "gsap";
import { SiGreensock, SiVite} from 'react-icons/si';
import { BiGitRepoForked,BiLogoReact, BiLogoHtml5, BiLogoJavascript, BiSolidFileCss } from 'react-icons/bi';
function Title() {



 
  return (
    <>
    
      <section className="title-section" id='home'> 
        
  
        <div className="title-container"> 
          
          <h1>Hi, I'm <span className="name">Adel</span></h1><br/>
          <h2>Front End Developer</h2>
          <div className="icon-corner">
          <BiLogoReact className="title-icon"/>
          <BiLogoJavascript className="title-icon"/>
          <BiSolidFileCss className="title-icon"/>
          <BiLogoHtml5 className="title-icon"/>
          <SiGreensock className="title-icon"/>
          <BiGitRepoForked className="title-icon"/>
          <SiVite className="title-icon"/>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Title;

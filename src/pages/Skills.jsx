import React from 'react';
import '../App.css'
import '../styles/Skills.css'
import { BiLogoFigma, BiGitRepoForked,BiCog, BiLogoReact, BiLogoJavascript, BiSolidFileCss, BiLogoPython, BiLogoHtml5 } from 'react-icons/bi';
import { SiVite, SiPowershell, SiAmazonaws} from 'react-icons/si';
import {BsFileWordFill} from 'react-icons/bs';

function Skills() {
  

  return (
    <>
    
        <section className="skills-section" id='skills'>
          <div className="skills-title">
          <h1>Skill Summary</h1>
          </div>
        
          <div className="skills-container">
            <div className="skills-box">
            <div className="skills-heading"><h2>React</h2><BiLogoReact className="icon-large"/></div>
              <p>Rich experience developing web, mobile, and desktop applications using React.</p>
            </div>
            <div className="skills-box">
            <div className="skills-heading"><h2>Javascript</h2><BiLogoJavascript className="icon-large"/></div>
              <p>I utilize Javascript to give my webpages <i>life</i>.</p>
            </div>
            <div className="skills-box">
            <div className="skills-heading"><h2>CSS</h2><BiSolidFileCss className="icon-large"/></div>
              <p>CSS because I got styles</p>
            </div>
            <div className="skills-box">
            <div className="skills-heading"><h2>Powershell</h2><SiPowershell className="icon-large"/></div>
              <p>I use Powershell to automate tasks across microsoft office applications.</p>
            </div>
            <div className="skills-box">
            <div className="skills-heading"><h2>Python</h2><BiLogoPython className="icon-large"/></div>
              <p>Got data? I like python for data analyses.</p>
            </div>
            <div className="skills-box">
            <div className="skills-heading"><h2>C/C++</h2><BiCog className="icon-large"/></div>
              <p>My first programming language. I use it for OOP.</p>
            </div>
            <div className="skills-box">
            <div className="skills-heading"><h2>Vite</h2><SiVite className="icon-large"/></div>
              <p>My favorite build tool for React.</p>
            </div>
            <div className="skills-box">
            <div className="skills-heading"><h2>Git</h2><BiGitRepoForked className="icon-large"/></div>
              <p>Git is my favorite version control system.</p>
            </div>
            <div className="skills-box">
              <div className="skills-heading"><h2>Figma</h2><BiLogoFigma className="icon-large"/></div>
              <p>I use Figma to design my projects.</p>
            </div>
            <div className="skills-box">
              <div className="skills-heading"><h2>VBA</h2><BsFileWordFill className="icon-large"/></div>
              <p>I use VBA to automate repetive reports and create interactive excel sheets.</p>
            </div>
            <div className="skills-box">
              <div className="skills-heading"><h2>HTML</h2><BiLogoHtml5 className="icon-large"/></div>
              <p>HTML is my favorite markup language.</p>
            </div>
            <div className="skills-box">
              <div className="skills-heading"><h2>AWS</h2><SiAmazonaws className="icon-large"/></div>
              <p>I'm using AWS Amplify console to bring my sites online and manage ongoing updates.</p>
            </div>
          </div>
        </section>
    </>
  )
}

export default Skills
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>40+ Completed Projetcs</small>
            </article>                       
          </div>
          <p>
            I'm a developer and I love what I do for my job... I've been creating web and desktop applications for the company's 
            internal use using Microsoft's .NET platform. Technology is one of my passions, and for that reason, I'm a Highly 
            motivated, and results-driven professional with experience in Fullstack development using C# and .NET CORE / .NET 
            framework as well as JavaScript. Creative and proactive problem solver, organized and attentive to detail with 
            outstanding time management skills. Excellent communication and interpersonal skills through the application of 
            rapport with clients and partners in the negotiation process, knowledgeable in agile methodologies. An energetic 
            team member who is task-focused and goal-oriented. One of my strengths as a developer is the fact that, despite 
            starting a few years in the profession, I manage to develop myself in new technologies very quickly and insightfully. 
            I discovered a passion for the use of technologies and I didn't hold back from just holding on to what I had already learned.
            I am very proud to say that even though I started working on the factory floor, I never stopped studying and developing 
            myself, to the point where I received the opportunity to join the IT team of one of the companies in the group where 
            I work today doing what I've doing now. I learned on my journey that nothing is impossible and that with my determination 
            I can learn and apply anything I set my mind to. With this determination, even having previously studied only web design 
            in college, I accepted the challenge of becoming a full-stack professional and developing myself further in back end 
            technologies using the C# language and developing applications in .NET and its variants as well as going deeper into 
            the database, especially Microsoft SQL Server. Not forgetting that on the front end I delved further into JavaScript and 
            its frameworks, in addition to the use of HTML and CSS, using Bootstrap and JQuery most of the time.
            </p> 
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
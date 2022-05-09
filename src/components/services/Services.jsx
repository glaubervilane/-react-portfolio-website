import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Working on implementing design, development, deployment, and Integration using C# and ASP.NET, and JavaScript.
                </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing high quality, performant, secure and maintainable code.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience using web technologies such as HTML/CSS, JavaScript, and React.js , .NET Framework, and .NET Core</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating production-quality web applications written in C# using Razor pages.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>frontends built with CSS libraries like Bootstrap, and JQuery, communications handled using an MSSQL Server database</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating and updating reports into the Report Builder platform connected to the M2M ERP with IRRS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CI/CD using GIT tools and resources</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating logos, websites using WordPress and PHP.
                </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Providing attractive designs, responsive content, and interactive features.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Continuously work with clients to establish and maintain value-based ideas using feedback to achieve mutual satisfaction.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
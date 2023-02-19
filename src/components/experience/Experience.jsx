import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <artice className="experience__details">
              <BsFillCheckCircleFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              <br />
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              <br />
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              <br />
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              <br />
            </artice>
          </div>
        </div>
        
        <div className="experience__backend">
        <h3>Other Skills</h3>
        <artice className="experience__details">
              <BsFillCheckCircleFill />
              <h4>GIT</h4>
              <small className='text-light'>Experienced</small>
              <br />
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill />
              <h4>GitHub</h4>
              <small className='text-light'>Intermediate</small>
              <br />
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill />
              <h4>Team Work</h4>
              <small className='text-light'>Experienced</small>
              <br />
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill />
              <h4>Self organization</h4>
              <small className='text-light'>Experienced</small>
              <br />
            </artice>
        </div>
      </div>
    </section>
  )
}

export default Experience
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
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artice>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Other Skills</h3>
        <div className="experience__content">
        <artice className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>GIT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Team Work</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artice>
            <artice className="experience__details">
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Self organization</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artice>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
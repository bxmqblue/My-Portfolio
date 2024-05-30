import React from 'react'
import { FaClover } from "react-icons/fa6";

function Frontend() {
  return (
    <div className='skills-content'>
        <h3 className='title'>Frontend Developer</h3>

      <div className="skills-card">
        <div className="skills-group">
            <div className="skills-data">
                <FaClover className='clover' />

                <div>
                    <div className="skills-name">HTML</div>
                    <span className="skills-level">Intermediate</span>
                </div>
            </div>

            <div className="skills-data">
                <FaClover className='clover' />

                <div>
                    <div className="skills-name">CSS</div>
                    <span className="skills-level">Advanced</span>
                </div>
            </div>

            <div className="skills-data">
                <FaClover className='clover' />

                <div>
                    <div className="skills-name">JavaScript</div>
                    <span className="skills-level">Basic</span>
                </div>
            </div>

            <div className="skills-data">
                <FaClover className='clover' />

                <div>
                    <div className="skills-name">React</div>
                    <span className="skills-level">Intermediate</span>
                </div>
            </div>

            <div className="skills-data">
                <FaClover className='clover' />

                <div>
                    <div className="skills-name">Bootstrap</div>
                    <span className="skills-level">Basic</span>
                </div>
            </div>

            <div className="skills-data">
                <FaClover className='clover' />

                <div>
                    <div className="skills-name">Tailwind</div>
                    <span className="skills-level">Basic</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend

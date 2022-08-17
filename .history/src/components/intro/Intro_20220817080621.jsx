import React from 'react'
import './Intro.css'
import Me from '../../images/me.png'

const Intro = () => {
  return (
    <>
      <div className='dev'>
        {/* Name and Skil intro */}
          <div className="dev-l">
            <h2 className='dev-intro'>Hello, My name is</h2>
            <h1 className='dev-name'>Abdullah Oladeji</h1>

            <div className="dev-skill">
              <div className="dev-skill-container">
                <div className="dev-skill-item">Web-Developer</div>

                <div className="dev-skill-item">Data Analyst</div>
              </div>
            </div>

            <p className="abt-dev">
              I am an ICT enthusiast specialising in web development (Front end), and data analysis. I am an experienced web developer trained in HTML CSS Javascript and React. I am well vast in the usage of Microsoft Office. I am open to opportunities through student internships and others.
            </p>
          </div>

          <div className="dev-r">
            <div className="dev-bg"></div>
            <img src={Me} alt="" className="dev-img" />
          </div>
      </div>
    </>
  )
}

export default Intro
import React from 'react'
import '../about/About.css'

const About = () => {
  return (
    <div className='abt'>
        <div className="abt-l">

          <h1 className="abt-title">About Me</h1>

          <div className="abt-card">
              <img src="https://images.pexels.com/photos/5496467/pexels-photo-5496467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="abt-img" />
          </div>
        </div>
        <div className="abt-r">
          <h1 className="abt-title">About Me</h1>

          <p className="abt-sub">
            It is a long established fact that a reader will be distracted by readable content.
          </p>

          <p className="abt-desc">
            I am an ICT enthusiast specialising in web development (Front end), and data analysis. I am an experienced web developer trained in HTML CSS Javascript and React. I am well vast in the usage of Microsoft Office. I am open to opportunities through student internships and others. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, voluptatem! Laudantium cupiditate, repudiandae maxime inventore nisi voluptate laboriosam quos unde eos dignissimos modi cumque sed itaque fuga nam aut repellat?
          </p>

          <div className="abt-award">
            <img src="https://images.pexels.com/photos/7005694/pexels-photo-7005694.jpeg?cs=srgb&dl=pexels-rodnae-productions-7005694.jpg&fm=jpg" alt="" className="abt2-img" />
            <div className="abt2-award-text">
              <h4 className="award-title">International Design</h4>
              <p className="award-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt aperiam odit cumque.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
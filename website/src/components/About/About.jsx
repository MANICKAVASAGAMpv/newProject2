import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNVERSITY</h3>
            <h2>Nurturing  Tomorrow's Leaders Today</h2>

            <p>Being immersed in a new environment, surrounded by new people, 
            and possibly experiencing a different way of living,
            you'll find yourself acquiring knowledge every day.</p>

            <p>Many people think of college as a simple life, which makes students carefree and have fun. 
            In fact, this is usually a very stressful time for most people.
            Students are under pressure to enter university, such as peer pressure, stress, parental stress and financial stress. 
            In this article,“university stress” William Zinsser tries to show us the most important stress of college students.</p>
            
            <p>Being introduced to a distinct setting and adjusting to a different
            set of rules can be overwhelming. During the gap year, students will 
            realize how important a college degree is, and how it can provoke
            students to work even harder. </p>
        </div>
    </div>
  )
}

export default About
import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import user_1 from '../../assets/edusity_assets/user-1.png'
import user_2 from '../../assets/edusity_assets/user-2.png'
import user_3 from '../../assets/edusity_assets/user-3.png'
import user_4 from '../../assets/edusity_assets/user-4.png'

const Testimonials = () => {

    const slider = useRef()
    let tx = 0
    const slideForward = () =>{
        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () =>{
        if(tx < 0){
            tx +=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className="testimonials">
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>I applied to Edusity University as I was looking to complete a librarianship qualification.
                         Aberystwyth has a great reputation in this field, so I came onto the course with high expectations. 
                         They have been thoroughly met. The departmental staff are fantastic, and I find myself constantly excited for my next module. 
                         The flexibility is the best part of my course.  I am able to study whenever I want, which I am truly thankful for.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>I applied to Edusity University as I was looking to complete a librarianship qualification.
                         Aberystwyth has a great reputation in this field, so I came onto the course with high expectations. 
                         They have been thoroughly met. The departmental staff are fantastic, and I find myself constantly excited for my next module. 
                         The flexibility is the best part of my course.  I am able to study whenever I want, which I am truly thankful for.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>I applied to Edusity University as I was looking to complete a librarianship qualification.
                         Aberystwyth has a great reputation in this field, so I came onto the course with high expectations. 
                         They have been thoroughly met. The departmental staff are fantastic, and I find myself constantly excited for my next module. 
                         The flexibility is the best part of my course.  I am able to study whenever I want, which I am truly thankful for.
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>I applied to Edusity University as I was looking to complete a librarianship qualification.
                         Aberystwyth has a great reputation in this field, so I came onto the course with high expectations. 
                         They have been thoroughly met. The departmental staff are fantastic, and I find myself constantly excited for my next module. 
                         The flexibility is the best part of my course.  I am able to study whenever I want, which I am truly thankful for.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
import React from 'react';
import '../styles/Testimonials.css';
import reviewer1 from "../images/reviewer1.jpg";
import reviewer2 from "../images/reviewer2.jpeg";
import reviewer3 from "../images/reviewer3.jpeg";
import reviewer4 from "../images/reviewer4.jpeg";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <p className="testimonials-title">Testimonials</p>
            <section className="testimonials-container">
                <article className="testimonial">
                    <p className="rating">5/5</p>
                    <div className="reviewer-name-image">
                        <img src={reviewer1} alt="Jack Hobbs" className="reviewer-image"/>
                        <p className="reviewer-name">Jack Hobbs</p>
                    </div>
                    <div className="review-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam.
                    </div>
                </article>
                <article className="testimonial">
                    <p className="rating">5/5</p>
                    <div className="reviewer-name-image">
                        <img src={reviewer2} alt="Blake Lively" className="reviewer-image"/>
                        <p className="reviewer-name">Blake Lively</p>
                    </div>
                    <div className="review-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam.
                    </div>
                </article>
                <article className="testimonial">
                    <p className="rating">5/5</p>
                    <div className="reviewer-name-image">
                        <img src={reviewer3} alt="Annie Potts" className="reviewer-image"/>
                        <p className="reviewer-name">Annie Potts</p>
                    </div>
                    <div className="review-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam.
                    </div>
                </article>
                <article className="testimonial">
                    <p className="rating">5/5</p>
                    <div className="reviewer-name-image">
                        <img src={reviewer4} alt="Jack Daniels" className="reviewer-image"/>
                        <p className="reviewer-name">Jack Daniels</p>
                    </div>
                    <div className="review-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam.
                    </div>
                </article>
            </section>
        </section>
    );
}
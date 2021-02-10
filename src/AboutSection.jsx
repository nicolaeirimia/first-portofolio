import React from 'react';
import profilePic1 from './irimia.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function AboutSection () {
    return (      
    <section>
        <div className="row aboutRow">
            <Fade bottom>
                <h1>About me</h1>
                </Fade>
                <div className="col-md-12 about1">
                <Zoom>
                <img src={profilePic1} alt="First Photo"></img>
                </Zoom>
                <Fade duration={2000}>
                <p>My name is Nicolae, and I am a high school student in 11th grade. My passion for programming started back when I was in 9th grade and my teacher introduced me to the concept of making HTML pages. Back then we were used to inline CSS, but it didn't matter to me. Since then, I have learned new things about web development. Besides programming, I like playing basketball and chess. I like sports in general but after half of the year of athletics, I decided to start playing basketball. I started when I was in 5th grade and now I play at a professional Club. My chess passion started while playing the game with some friends in school. I enjoyed the concept of thinking ahead moves and since then, I gave it more attention.</p>
                </Fade>
            </div>
        </div>
    </section>
    )
}
export default AboutSection;
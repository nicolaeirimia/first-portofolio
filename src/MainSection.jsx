import React from 'react';
import Typist from 'react-typist';
import { BinaryClock } from "binary-clock-react";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
function MainSection () {
    return (
        <section>
          <div className="row">
              <div className="col-md-6 name ">
              <Fade left big duration={1800}>
              <h1>&nbsp;I'm Nick</h1>
              <Typist cursor={
                {
                  show: false,
                  blink: false,
                  element: '|',
                  hideWhenDone: false,
                  hideWhenDoneDelay: 1000,
                }
              }>
                <Typist.Delay ms={2000} />
                  <span>&nbsp;Web Developer</span>
                <Typist.Backspace count={12} delay={1500} />
                  <span>eb Designer</span>
                  <Typist.Backspace count={12} delay={1500} />
                  <span>&nbsp;Fullstack Programmer</span>
                </Typist>
                </Fade>
              </div>
              <Flip left duration={2100}>
              <div className="col-md-6 photo">

              <BinaryClock 
                rootClassName= "backgroundBinary"
                bulbOnClassName="bulbOn"
                bulbOffClassName="bulbOff"
              />
              
              </div>
              </Flip>
          </div>
      </section>
      )
};
export default MainSection;
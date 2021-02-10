import React from 'react';
import ListItem from './ListItem';
import Fade from 'react-reveal/Fade';
import {frontendSkills, backendSkills} from './skills';


function SkillsSection  ()  {
    return(
        <Fade>
      <section>
        <div className="skills">
          <Fade top>
          <h1>My Skills</h1>
          </Fade>
          <div className="row cardRow">
          <Fade>
            <div className="col-md-6">
                <div className="cardBody">
                    <div className="cardTitle">
                      <h2>Front-End</h2>
                    </div>
                    <div className="cardContent">
                        <ul className="cardList">
                          {frontendSkills.map(item => {return <ListItem 
                            key={item.id}
                            icon={item.icon}
                            name={item.name}
                            progress={item.progress}
                          />})}
                        </ul>
                    </div>
                </div>
            </div>
            </Fade>
            <Fade>
            <div className="col-md-6">
                <div className="cardBody">
                    <div className="cardTitle">
                      <h2>Back-End</h2>
                    </div>
                    <div className="cardContent">
                        <ul className="cardList">
                          {backendSkills.map(item => {return <ListItem 
                            key={item.id}
                            icon={item.icon}
                            name={item.name}
                            progress={item.progress}
                          />})}
                        </ul>
                    </div>
                </div>
            </div>
            </Fade>
          </div>
        </div>
      </section>
      </Fade>
    )
}
export default SkillsSection;
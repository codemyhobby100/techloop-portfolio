import React from 'react';
import Team2 from '../../assets/team-2.jpg';
import Team3 from '../../assets/team-3.jpg';
import Team4 from '../../assets/team-4.jpg';
import './teams.css';

const Teams = () => {
  return (
    <section className="section teams" id="teams">
        <h2 className="section__title text-cs">Meet The Team</h2>
            <p className="section__subtitle">
                Let's <span>Talk About Ideas</span>
            </p>
        <div className="container grid team-container">
            <div className="team-member">
                <div className="team-mmember-imng">
                    <img src={Team2} alt="" />
                </div>
                <div className="team-member-name">
                    <h3>Naimur</h3>
                    <h3>Fullstack Developer</h3>
                </div>
            </div>
            <div className="team-member">
            <div className="team-mmember-imng">
                    <img src={Team3} alt="" />
                </div>
                <div className="team-member-name">
                    <h3>Abdullah</h3>
                    <h3>Mobile APP Developer</h3>
                </div>
            </div>
            <div className="team-member">
            <div className="team-mmember-imng">
                    <img src={Team4} alt="" />
                </div>
                <div className="team-member-name">
                    <h3>Naimur</h3>
                    <h3>Frontend Developer</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Teams
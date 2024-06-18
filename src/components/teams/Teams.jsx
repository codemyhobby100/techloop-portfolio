import React from 'react';
import Team2 from '../../assets/team-5.jpg';
import Team3 from '../../assets/team-3.jpg';
import Team4 from '../../assets/team-4.jpg';
import Team5 from '../../assets/team-6.jpg';
import Team1 from '../../assets/team-01.jpg'
import shapeOne from '../../assets/shape-1.png';
import './teams.css';

const Teams = () => {
  return (
    <section className="section teams" id="teams">
        <h2 className="section__title text-cs">Meet The Team</h2>
        <p className="section__subtitle">
            The <span>Talent Behind the Scenes</span>
        </p>
        <div className="container grid team-container">
            <div className="team-member card">
                <div className="team-member-img">
                    <img src={Team1} alt="" />
                </div>
                <div className="team-member-name">
                    <h3>Founder & Fullstack Developer</h3>
                    <h4>Abdul-baqi</h4>
                </div>
            </div>

            <div className="team-member card">
                <div className="team-member-img">
                    <img src={Team2} alt="" />
                </div>
                <div className="team-member-name">
                    <h3>Fullstack Developer</h3>
                    <h4>Naimur</h4>
                </div>
            </div>

            <div className="team-member card">
                <div className="team-member-img">
                    <img src={Team3} alt="" />
                </div>
                <div className="team-member-name">
                    <h3>Mobile APP Developer</h3>
                    <h4>Abdullah</h4>
                </div>
            </div>

            <div className="team-member card">
                <div className="team-member-img">
                    <img src={Team5} alt="" />
                </div>
                <div className="team-member-name">
                    <h3>UI/UX Designer</h3>
                    <h4>Md. Al Amin</h4>
                </div>
            </div>

            <div className="team-member card">
                <div className="team-member-img">
                    <img src={Team4} alt="" />
                </div>
                <div className="team-member-name">
                    <h3>Frontend Developer</h3>
                    <h4>Rakibul</h4>
                </div>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className='shape' />
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Team</span>
        </div>
    </section>
  )
}

export default Teams;

import React from 'react';
import {FaGithub, FaInstagram, FaTiktok} from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className='footer__socials'>
                <a href="https://github.com/codemyhobby100" className='footer__social-link'>
                    <FaGithub />
                </a>

                <a href="https://www.instagram.com/__techloop" className='footer__social-link'>
                    <FaInstagram />
                </a>

                <a href="https://www.tiktok.com/@_techloop?lang=en" className='footer__social-link'>
                    <FaTiktok />
                </a>
            </div>

            <p className="footer__copyright text-cs">&copy; 2024 <span></span>. All Rights Reserved</p>

            <p className="footer__copyright text-cs">Developed by <span>Techloop</span></p>
        </div>
    </footer>
  )
}

export default Footer
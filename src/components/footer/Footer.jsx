import React from 'react';
import {FaTwitter, FaInstagram, FaTiktok} from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className='footer__socials'>
                <a href="" className='footer__social-link'>
                    <FaTwitter />
                </a>

                <a href="" className='footer__social-link'>
                    <FaInstagram />
                </a>

                <a href="" className='footer__social-link'>
                    <FaTiktok />
                </a>
            </div>

            <p className="footer__copyright text-cs">&copy; 20023 <span>Luique</span>. All Rights Reserved</p>

            <p className="footer__copyright text-cs">Developed by <span>Techloop</span></p>
        </div>
    </footer>
  )
}

export default Footer
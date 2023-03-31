import React from 'react';
import Navigation from '../Navigation';
import { FaMapMarkerAlt, FaMobileAlt, FaFacebook, FaEnvelope , FaGithub, FaTwitter,  FaWhatsapp } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
          <div className="contactContent">
            <div className="header"></div>
            <div className="contactBox">
                <h1>Contactez-moi</h1>
                <ul>
                    <li>
                        <i><FaMapMarkerAlt /></i>
                        <span>Morondava</span>
                    </li>
                    <li>
                        <i><FaMobileAlt /></i>
                        <CopyToClipboard text="+261344281436">
                            <span className="clickInput" onClick={() => { alert('Téléphone copie'
                            );}}> +261 34 42 814 36 </span>
                        </CopyToClipboard>
                            
                    </li>
                    
                    <li>
                    <i><FaMobileAlt /></i>
                    <CopyToClipboard text="+261334808634">
                        <span className="clickInput" onClick={() => { alert('Téléphone copie'
                        );}}>+261 33 48 086 34</span>
                    </CopyToClipboard>  

                    </li>

                    <li>
                    <i><FaEnvelope /></i>
                    <CopyToClipboard text="randrianiainavola@gmail.com">
                        <span className="clickInput" onClick={() => { alert('E-mail copie'
                        );}}>randrianiainavola@gmail.com</span>
                    </CopyToClipboard>
                        
                </li> 
               
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <a href="http://www.google.com" target="_blank"
                    rel="nooperer noreferrer">
                        <h4>Facebook</h4> 
                        <i><FaFacebook /></i>
                    </a>

                    <a href="http://www.google.com" target="_blank"
                    rel="nooperer noreferrer">
                        <h4>Github</h4>
                        <i><FaGithub /></i>
                    </a>

                    <a href="http://www.google.com" target="_blank"
                    rel="nooperer noreferrer">
                        <h4>Twitter</h4>
                        <i><FaTwitter /></i>
                    </a>

                    <a href="http://www.google.com" target="_blank"
                    rel="nooperer noreferrer">
                        <h4>WhatsApp</h4>
                        <i><FaWhatsapp /></i> 
                    </a>
                </ul>
            </div>
          </div>
        </div>
    );
};

export default Contact;
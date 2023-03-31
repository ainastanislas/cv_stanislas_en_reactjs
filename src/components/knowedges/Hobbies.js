import React from 'react';
import {  FaFacebookF, FaEnvelopeOpen, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';



const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>PROFIL</h3>
            <ul>
                <li className="hobby"><i><FaMapMarkerAlt /></i><span>Morondava</span></li>
                    <li className="hobby"><i><FaFacebookF /></i><span>Stanislas Aina</span></li>
                <li className="hobby"><i><FaEnvelopeOpen/></i><span>randrianiainavola@gmail.com</span></li>
                <li className="hobby"><i><FaPhone/></i><span> 0344281436/0334808634</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;
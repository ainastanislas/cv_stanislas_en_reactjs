import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h5>ETAT CIVIL</h5>
            <div className="list">
                <ul>
                    <li><i><FaCheckSquare /></i><span>Né:</span> le 17 février 2001 à Tsaramandroso/Analaiva</li>
                    <li><i><FaCheckSquare /></i><span>Situation familiale:</span> Célibataire</li>
                    <li><i><FaCheckSquare /></i><span>CNI:</span>508071012085</li>
                    <li><i><FaCheckSquare /></i><span>Nationalité:</span> Malagasy</li>
             </ul>

            </div>
        </div>
    );
};

export default OtherSkills;
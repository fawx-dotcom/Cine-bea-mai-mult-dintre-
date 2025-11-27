import React from 'react';
import './CandidateCard.css';

const CandidateCard = ({ candidate, onClick, disabled }) => {
    return (
        <div className={`candidate-card ${disabled ? 'disabled' : ''}`} onClick={() => !disabled && onClick(candidate.id)}>
            <div className="image-container">
                <img src={candidate.image} alt={candidate.name} />
            </div>
            <h3>{candidate.name}</h3>
        </div>
    );
};

export default CandidateCard;

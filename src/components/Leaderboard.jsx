import React, { useEffect, useState } from 'react';
import { CandidateService } from '../services/CandidateService';
import './Leaderboard.css';

const Leaderboard = ({ onBack }) => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        setCandidates(CandidateService.getLeaderboard());
    }, []);

    return (
        <div className="leaderboard">
            <h2>Top Sete</h2>
            <ul className="leaderboard-list">
                {candidates.map((c, index) => (
                    <li key={c.id} className="leaderboard-item">
                        <span className="rank">#{index + 1}</span>
                        <img src={c.image} alt={c.name} className="avatar" />
                        <span className="name">{c.name}</span>
                        <span className="score">{c.votes} pts</span>
                    </li>
                ))}
            </ul>
            <button className="btn-secondary" onClick={onBack}>Înapoi</button>
        </div>
    );
};

export default Leaderboard;
